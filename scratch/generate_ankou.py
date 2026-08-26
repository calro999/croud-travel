import json
import urllib.parse

with open('scratch/ankou_10_hotels.json', 'r', encoding='utf-8') as f:
    hotels = json.load(f)

aff_id = '54d2a438.4bc4abc2.54d2a439.aa1be583'

def make_aff_url(no):
    target = f'https://travel.rakuten.co.jp/HOTEL/{no}/{no}.html'
    return f'https://hb.afl.rakuten.co.jp/hgc/{aff_id}/?pc={urllib.parse.quote(target, safe="")}'

review_parts = [
    '<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 mb-4">【2026年最新】東のアンコウ西のフグ！濃厚あんこう鍋＆元祖どぶ汁が旨いおすすめ温泉宿10選！名門比較</h2>',
    '<p class="text-sm text-stone-700 leading-relaxed my-3 font-medium">「東のアンコウ、西のフグ」と並び称される日本の冬の二大味覚「あんこう（鮟鱇）」。鍋いっぱいに広がる濃厚なあん肝のコク、ぷりぷりの身とコラーゲンたっぷりの皮・エラ、香ばしく煎ったあん肝と味噌だけで水を一滴も使わずに煮込む元祖「どぶ汁（どぶじる）」、とろける「あん肝ポン酢」、サクサクの「あんこう唐揚げ」、そして旨味が凝縮した至福の「あんこう雑炊」——。本場・茨城県の大洗（大洗ホテル・里海邸）や北茨城・平潟港（まるみつ旅館・としまや月浜の湯）、福島いわき湯本温泉まで、冬にしか味わえない最高峰のあんこう尽くし会席と太平洋一望の温泉露天風呂を満喫できる名門宿10選を本音で比較レビューします。全施設、楽天トラベル公式最新空室リンク付き。</p>',
    '<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-amber-950 via-stone-900 to-orange-950 text-white border border-amber-500/30 shadow-xl p-6 md:p-8">',
    '<h3 class="text-lg font-bold text-amber-300 mb-3">🍲 なぜ「冬の茨城・常磐のあんこう鍋＆どぶ汁」は別格の旨さなのか？</h3>',
    '<p class="text-xs text-stone-200 leading-relaxed mb-3">11月から3月にかけて、親潮と黒潮が交わる常磐沖で獲れるアンコウは、産卵を控えて<strong>「あん肝（肝臓）が最も大きく肥大化し、濃厚な脂」</strong>を蓄えます。</p>',
    '<p class="text-xs text-stone-200 leading-relaxed mb-3">一般的な醤油ベースの鍋とは異なり、本場の宿では<strong>「生のあん肝を鍋肌でじっくり炒りつけ、味噌を溶いてアンコウから出る水分だけで煮込む『元祖どぶ汁』」</strong>を提供しており、その濃厚さとクリーミーさは一口で概念が変わるほどの衝撃です。</p>',
    '<p class="text-xs text-stone-200 leading-relaxed">美肌コラーゲンたっぷりのアンコウの七つ道具（身・皮・肝・エラ・ヒレ・卵巣・胃袋）を食べ尽くし、太平洋の潮騒を聞く露天風呂で温まる冬の贅沢旅は、一度体験すると毎年通いたくなる魅力に満ちています。</p>',
    '</div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-8">🧭 失敗しない「あんこう鍋・どぶ汁温泉宿」選び4大チェックポイント</h2>',
    '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-900 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-500 text-white text-xs font-black rounded-md">POINT</span>基準1：鍋の仕立て（一般的な味噌仕立て鍋 vs 水を使わない濃厚どぶ汁）</h4><p class="text-xs text-stone-600 leading-relaxed">あん肝をたっぷり炒りつけた本場仕込みの「どぶ汁」か、食べやすいあっさり味噌仕立てかを確認。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-900 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-500 text-white text-xs font-black rounded-md">POINT</span>基準2：あんこう料理の品数（あん肝ポン酢・唐揚げ・共酢・吊るし切り実演）</h4><p class="text-xs text-stone-600 leading-relaxed">鍋だけでなく、あん肝の刺身、供酢和え、唐揚げ、吊るし切りのライブ実演などエンタメ性を検証。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-900 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-500 text-white text-xs font-black rounded-md">POINT</span>基準3：太平洋オーシャンビュー温泉露天風呂・美肌の湯</h4><p class="text-xs text-stone-600 leading-relaxed">太平洋の大海原や朝日のパノラマを望む温泉露天風呂、アンコウコラーゲン風呂の心地よさを重視。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-900 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-500 text-white text-xs font-black rounded-md">POINT</span>基準4：楽天トラベルクチコミ・料理評価の高さ</h4><p class="text-xs text-stone-600 leading-relaxed">実際に宿泊した冬の美食旅行者から「あんこう料理の濃厚さとボリュームに大満足」と絶賛される宿をセレクト。</p></div>',
    '</div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-8">📊 あんこう鍋・どぶ汁温泉宿おすすめ10選のスペック比較一覧表</h2>',
    '<div class="my-6 overflow-x-auto rounded-2xl border border-stone-300 shadow-sm"><table class="w-full text-left text-xs text-stone-700 bg-white"><thead class="bg-stone-900 text-amber-300 font-bold border-b border-stone-300"><tr><th class="p-3">順位・宿名</th><th class="p-3">所在地</th><th class="p-3">あんこう料理の目玉</th><th class="p-3">鍋スタイル</th><th class="p-3">温泉・客室</th><th class="p-3">クチコミ</th></tr></thead><tbody class="divide-y divide-stone-200">',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第1位 里海邸 金波楼本邸</td><td class="p-3">茨城 大洗海岸</td><td class="p-3 font-bold text-amber-800">全8室の隠れ家で味わう大洗前浜の極上あんこう鍋</td><td class="p-3">洗練された特製味噌仕立て鍋</td><td class="p-3">波打ち際のオーシャンフロント・展望風呂</td><td class="p-3 font-bold text-amber-800">⭐ 4.83</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第2位 水戸プラザホテル</td><td class="p-3">茨城 水戸</td><td class="p-3 font-bold text-amber-800">日本料理「よし川」の特選あんこう鍋会席</td><td class="p-3">伝統の上品な濃厚あんこう鍋</td><td class="p-3">緑豊かな森に佇む迎賓館クラシックホテル</td><td class="p-3 font-bold text-amber-800">⭐ 4.71</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第3位 大洗ホテル</td><td class="p-3">茨城 大洗海岸</td><td class="p-3 font-bold text-amber-800">名物「あんこう吊るし切り実演」＆濃厚あんこう鍋</td><td class="p-3">本場仕込み濃厚あんこう鍋ビュッフェ</td><td class="p-3">太平洋パノラマ展望大浴場・朝日絶景</td><td class="p-3 font-bold text-amber-800">⭐ 4.57</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第4位 まるみつ旅館</td><td class="p-3">茨城 平潟港温泉</td><td class="p-3 font-bold text-amber-800">全国グランプリ優勝！水を使わない元祖どぶ汁</td><td class="p-3">あん肝炒りつけ濃厚元祖どぶ汁</td><td class="p-3">あんこうコラーゲン風呂・美肌平潟温泉</td><td class="p-3 font-bold text-amber-800">⭐ 4.50</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第5位 としまや月浜の湯</td><td class="p-3">茨城 北茨城磯原</td><td class="p-3 font-bold text-amber-800">明治創業名門！極上あんこうフルコース＆どぶ汁</td><td class="p-3">元祖あんこうどぶ汁・共酢和え</td><td class="p-3">太平洋を一望する展望露天風呂・磯原温泉</td><td class="p-3 font-bold text-amber-800">⭐ 4.48</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第6位 偕 二ツ島</td><td class="p-3">茨城 北茨城磯原</td><td class="p-3 font-bold text-amber-800">二ツ島を望む特等席！名物あんこうどぶ汁会席</td><td class="p-3">濃厚あん肝仕立てどぶ汁鍋</td><td class="p-3">全室オーシャンビュー・波音露天風呂</td><td class="p-3 font-bold text-amber-800">⭐ 4.39</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第7位 小名浜オーシャンホテル</td><td class="p-3">福島 いわき小名浜</td><td class="p-3 font-bold text-amber-800">太平洋フロント！常磐もの特選あんこう鍋会席</td><td class="p-3">常磐沖あんこうの味噌仕立て鍋</td><td class="p-3">太平洋を見下ろす絶景露天風呂・ゴルフ</td><td class="p-3 font-bold text-amber-800">⭐ 4.36</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第8位 うぐいす谷温泉 竹の葉</td><td class="p-3">茨城 北茨城磯原</td><td class="p-3 font-bold text-amber-800">竹林と渓流の一軒宿！濃厚あんこう鍋・あん肝ポン酢</td><td class="p-3">秘伝味噌の濃厚あんこう鍋</td><td class="p-3">毎分豊富なとろとろ美肌温泉露天風呂</td><td class="p-3 font-bold text-amber-800">⭐ 4.35</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第9位 雨情の宿 新つた</td><td class="p-3">福島 いわき湯本</td><td class="p-3 font-bold text-amber-800">野口雨情ゆかりの老舗！常磐名物あんこう鍋会席</td><td class="p-3">伝統の常磐あんこう鍋仕立て</td><td class="p-3">庭園露天風呂「竹林を渡る風」・硫黄泉</td><td class="p-3 font-bold text-amber-800">⭐ 4.33</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第10位 大洗パークホテル</td><td class="p-3">茨城 大洗海岸</td><td class="p-3 font-bold text-amber-800">2026年リニューアル！大洗の本格あんこう鍋会席</td><td class="p-3">特製出汁とあん肝の旨味鍋</td><td class="p-3">松林に囲まれた大洗温泉・サウナ完備</td><td class="p-3 font-bold text-amber-800">⭐ 4.01</td></tr>',
    '</tbody></table></div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">🏆 【徹底検証】あんこう鍋・どぶ汁温泉宿おすすめ10選の本音レビュー</h2>'
]

# 宿1: 里海邸 金波楼本邸
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第1位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">茨城 大洗海岸 里海邸 －金波楼本邸－（さとうみてい）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 茨城県東茨城郡大洗町磯浜町6883</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.83</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> あんこう鍋体験：楽天★4.83！波打ち際に佇む全8室の最高峰隠れ宿で味わう大洗前浜の極上あんこう鍋</h4><p class="text-xs text-stone-700 leading-relaxed">「太平洋の波打ち際に佇む洗練された大人の隠れ宿で、大洗前浜で水揚げされた極上アンコウの七つ道具鍋と地魚懐石を味わい、海を眺める展望風呂に浸かりたい」という方に文句なしの最高峰第1位です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/136101/136101.jpg" alt="里海邸 金波楼本邸" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 冬のあんこう料理:</span> 大洗前浜産あんこう鍋・あん肝・供酢和え・雑炊</div><div><span class="text-stone-400">■ 常磐前浜の海の幸:</span> 鹿島灘ハマグリ・ヒラメ・常陸牛の極上懐石</div><div><span class="text-stone-400">■ 波打ち際テラス:</span> 太平洋の水平線と波しぶきを間近に感じる全室海側</div><div><span class="text-stone-400">■ 全8室の大人の隠れ家:</span> 素朴な木の温もりと洗練されたラウンジ空間</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 大洗磯前神社至近・大洗駅無料送迎＋楽天トラベル★4.83</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「静寂な大人の宿で、本場大洗の洗練された極上あんこう鍋と常陸牛を味わい、波の音に包まれる海辺の休日を過ごしたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">大洗磯前神社の神磯の鳥居近く、太平洋の波打ち際に建つわずか8室の別荘風隠れ宿。冬の夕食は、大洗前浜で獲れた新鮮なアンコウを料理人が丁寧に仕込み、上品かつコク深い味噌出汁で煮立てる名物あんこう鍋。あん肝の濃厚なコクとぷりぷりの身、コラーゲンたっぷりの皮が絶妙で、締めくくりの雑炊は感動の美味しさ。全室に備えられたデッキテラスからは果てしない太平洋が一望でき、朝には海から昇る神々しい日の出を独占できます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「波の音客室 / コーナースイート」（海辺のテラスと展望風呂を備えた特別室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「冬季限定！大洗前浜産あんこう鍋＆常陸牛懐石」プラン</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>鹿島臨海鉄道「大洗駅」よりタクシー約5分（無料送迎あり）。北関東道「水戸大洗IC」より車約10分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30大洗磯前神社参拝 → 17:00展望風呂 → 18:30大洗あんこう鍋懐石ディナー → 21:00波音ラウンジ【2日目】06:30神磯の鳥居から昇る日の出鑑賞 → 08:00海辺の朝食 → 10:30チェックアウト</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">大規模ホテルの賑やかなアミューズメント施設を求める方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">大洗あんこう鍋×全8室波打ち際隠れ宿×神磯日の出×楽天4.83。茨城最高峰の冬の憧れ宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※大洗駅より無料送迎あり・全室オーシャンフロント</span><span class="text-xs font-black text-amber-800">楽天日本の宿アワードTOP47受賞</span></div><a href="{make_aff_url(136101)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】里海邸 金波楼本邸の空室・最安プランを見る</span></a></div>
</div>''')

# 宿2: 水戸プラザホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第2位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">茨城 水戸 水戸プラザホテル</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 茨城県水戸市千波町2078-1</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.71</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> あんこう鍋体験：楽天★4.71！森の迎賓館で味わう日本料理「よし川」の極上あんこう鍋会席</h4><p class="text-xs text-stone-700 leading-relaxed">「世界屈指のデザイナーが手掛けた森の中のラグジュアリーホテルで、日本料理の名店が仕上げる極上あんこう鍋会席を優雅に味わいたい」という記念日ステイに最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5754/5754.jpg" alt="水戸プラザホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 日本料理よし川:</span> 熟練料理人が引く出汁と濃厚あん肝の特選あんこう鍋</div><div><span class="text-stone-400">■ 常陸牛＆地野菜:</span> 茨城ブランド常陸牛フィレや旬魚との豪華共演</div><div><span class="text-stone-400">■ 森の迎賓館:</span> ジョン・グラハム氏デザインの重厚な中庭と回廊</div><div><span class="text-stone-400">■ 贅沢な客室:</span> 全室シモンズベッド＆高級アメニティ完備</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 水戸駅南口より無料送迎シャトル運行＋楽天4.71</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「洗練されたラグジュアリーホテルの上質空間で、料亭仕込みの極上あんこう鍋とハイレベルな接客を満喫したい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">水戸の深い森の中に佇む迎賓館ホテル。館内の日本料理「よし川」で冬に供されるあんこう鍋は、丁寧にとった一番出汁にあん肝と特製味噌をブレンドし、アンコウの七つ道具（身・皮・肝・エラ等）の旨味を最大限に引き出した上品かつ濃厚な名品。吹き抜けのアトリウムガーデンやクラシックバーなど館内の優雅さは圧巻で、都心からのアクセスも良好です。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「プラザツイン / スイートルーム」（中庭を望むクラシカルな客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「よし川 冬季限定 特選あんこう鍋会席付き」プラン</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR常磐線「水戸駅」南口より無料送迎シャトルバス約15分。常磐道「水戸IC」より車約10分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30アトリウムガーデンでカフェ → 18:30よし川であんこう鍋会席ディナー → 21:00メインバーでカクテル【2日目】07:30テラスレストランで洋朝食 → 10:00偕楽園へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">天然温泉の露天風呂を必須条件とする方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">よし川特選あんこう鍋×森の迎賓館×ラグジュアリーステイ×楽天4.71。記念日に最高の美食ホテルです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※水戸駅南口より無料送迎シャトル運行</span><span class="text-xs font-black text-amber-800">楽天トラベルゴールドアワード受賞</span></div><a href="{make_aff_url(5754)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】水戸プラザホテルの空室・最安プランを見る</span></a></div>
</div>''')

# 宿3: 大洗ホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第3位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">茨城 大洗海岸 大洗ホテル</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 茨城県東茨城郡大洗町磯浜町6881</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.57</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> あんこう鍋体験：冬の名物「あんこう吊るし切り実演」！本場大洗の濃厚あんこう鍋バイキング＆太平洋絶景</h4><p class="text-xs text-stone-700 leading-relaxed">「冬の毎日ロビーで開催される迫力の『あんこう吊るし切りショー』を見学し、熱々の濃厚あんこう鍋やズワイガニ、ステーキ食べ放題を満喫したい」というファミリー・グループに圧倒的人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5950/5950.jpg" alt="大洗ホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 吊るし切り実演:</span> 毎日17:30からロビーで開催される冬の名物ショー</div><div><span class="text-stone-400">■ 濃厚あんこう鍋:</span> 出来立て熱々のあんこう鍋が食べ放題ビュッフェ</div><div><span class="text-stone-400">■ 太平洋パノラマ大浴場:</span> 最上階9階から太平洋と神磯の鳥居を一望</div><div><span class="text-stone-400">■ 充実バイキング:</span> 蟹・ステーキ・握り寿司・手作りスイーツが並ぶ</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 大洗海岸目の前・大洗水族館車5分＋楽天4.57</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「大迫力のあんこう吊るし切りショーを見て、熱々のあんこう鍋やカニをバイキングで心ゆくまで食べ放題したい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">大洗海岸の波打ち際に建つ老舗リゾートホテル。11月〜3月の冬期間は毎日ロビーで熟練料理人による「あんこうの吊るし切りショー」が開催され、巨大なアンコウが見事な手さばきで七つ道具に解体されていく様子を間近で見学できます。ディナービュッフェでは、大鍋で煮込まれた濃厚なあんこう鍋が熱々で提供され、あん肝のコクと身の旨味が凝縮。最上階の展望風呂から望む太平洋の朝日も息を呑む美しさです。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「オーシャンビュー和室 / 和洋室」（太平洋の水平線と朝日を一望）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「あんこう吊るし切り実演＆濃厚あんこう鍋バイキング」プラン</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>鹿島臨海鉄道「大洗駅」よりタクシー約5分（無料送迎あり）。東水戸道路「水戸大洗IC」より車約10分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 16:00展望大浴場 → 17:30ロビーであんこう吊るし切り実演ショー見学 → 18:30あんこう鍋バイキングディナー【2日目】06:30水平線から昇る朝日鑑賞 → 08:00朝食バイキング → 10:00アクアワールド大洗へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">完全個室での静かな懐石料理のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">あんこう吊るし切り実演×濃厚あんこう鍋バイキング×太平洋パノラマ×楽天4.57。大洗屈指のエンタメ名宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※大洗駅より無料送迎あり・冬期間毎日吊るし切り開催</span><span class="text-xs font-black text-amber-800">楽天トラベル人気ホテル</span></div><a href="{make_aff_url(5950)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】大洗ホテルの空室・最安プランを見る</span></a></div>
</div>''')

# 宿4: まるみつ旅館
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第4位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">茨城 平潟港温泉 平潟港温泉 あんこうの宿 まるみつ旅館</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 茨城県北茨城市平潟町235</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.50</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> あんこう鍋体験：全国グランプリ優勝！水を一切使わない元祖「濃厚どぶ汁」＆あんこうコラーゲン風呂</h4><p class="text-xs text-stone-700 leading-relaxed">「全国ご当地鍋フェスタで連覇した伝説の『元祖どぶ汁』を味わい、日本初のあんこうコラーゲン風呂で全身ツルツルになりたい」という全国のあんこう鍋ファンに圧倒的人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31660/31660.jpg" alt="まるみつ旅館" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 伝説の元祖どぶ汁:</span> 水を一滴も使わずアンコウの水分とあん肝だけで煮込む</div><div><span class="text-stone-400">■ 全国鍋グランプリ優勝:</span> 鍋-1グランプリ連覇の実力を誇る本物の味</div><div><span class="text-stone-400">■ コラーゲン風呂:</span> アンコウから抽出した特製コラーゲン温泉風呂</div><div><span class="text-stone-400">■ あんこうづくし:</span> 供酢・唐揚げ・肝刺し・雑炊まで完全制覇</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 平潟港の老舗料理宿・磯原駅無料送迎＋楽天4.50</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「日本一濃厚な本物のどぶ汁を一度でいいから体験し、コラーゲン風呂で美肌になりたい鍋マニア・美食家」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">茨城県最北端・平潟港に佇む「あんこうの聖地」。名物の「元祖どぶ汁」は、生のあん肝を大鍋で炒って香ばしさを引き出し、秘伝の味噌とアンコウ自身の水分だけでじっくり煮詰める極上の逸品。スープというよりペーストに近いほど濃厚で、一口すするだけであん肝の豊かな旨味が口いっぱいに爆発します。館内にはアンコウから抽出したコラーゲンを贅沢に使った「あんこうコラーゲン美肌風呂」もあり、まさにアンコウを満喫するための宿です。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「和モダン客室 / 純和風客室」（落ち着いた平潟港の風情漂う客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「全国グランプリ優勝！元祖あんこうどぶ汁プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR常磐線「大津港駅」よりタクシー約5分（無料送迎あり）。常磐道「北茨城IC」より車約20分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30平潟港散策 → 17:00あんこうコラーゲン風呂 → 18:30元祖どぶ汁フルコースディナー → 21:00大浴場【2日目】07:30朝風呂 → 08:30平潟港の漁師朝食 → 10:00五浦海岸へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">あん肝の濃厚すぎる味が苦手であっさり味のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">元祖どぶ汁×全国グランプリ連覇×コラーゲン美肌風呂×楽天4.50。あんこう鍋の日本一の聖地です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※大津港駅より無料送迎あり</span><span class="text-xs font-black text-amber-800">全国鍋グランプリ連覇の宿</span></div><a href="{make_aff_url(31660)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】あんこうの宿 まるみつ旅館の空室・最安プランを見る</span></a></div>
</div>''')

# 宿5: としまや月浜の湯
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第5位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">茨城 北茨城磯原 としまや月浜の湯</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 茨城県北茨城市磯原町磯原200-3</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.48</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> あんこう鍋体験：明治創業の老舗名門！極上あんこうフルコース＆濃厚どぶ汁・太平洋展望露天風呂</h4><p class="text-xs text-stone-700 leading-relaxed">「北茨城の磯原海岸に佇む名門宿で、本場の濃厚どぶ汁鍋とあん肝ポン酢、供酢和えを堪能し、太平洋を一望する展望露天風呂で温まりたい」という方に不動の人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/17752/17752.jpg" alt="としまや月浜の湯" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 本場あんこう会席:</span> 元祖どぶ汁・あん肝・共酢和え・あんこう唐揚げ</div><div><span class="text-stone-400">■ 磯原温泉露天:</span> 太平洋の大海原と月明かりを望む展望露天風呂</div><div><span class="text-stone-400">■ 常磐前浜の地魚:</span> 平目姿造り・常陸牛・アワビなど贅沢美味</div><div><span class="text-stone-400">■ 全室海一望:</span> 寄せては返す波の音に癒やされるオーシャンビュー</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 磯原駅より無料送迎バス約5分＋明治創業の品格＋楽天4.48</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「北茨城の老舗旅館で、伝統の濃厚どぶ汁と地魚会席を落ち着いた個室で味わい、海を望む温泉露天風呂に癒やされたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">野口雨情の生誕地・北茨城磯原海岸に佇む名旅館。冬のあんこう会席は、生あん肝をたっぷり練り込んだ名物「どぶ汁鍋」が主役で、アンコウの七つ道具が凝縮した深いコクが絶品。自家製酢味噌でいただく「共酢和え」や揚げたての唐揚げも美味しく、最上階の展望露天風呂からは太平洋の水平線と波の音が広がり、磯原温泉の湯冷めしにくい良泉が旅情を高めてくれます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「海側次の間付き和室 / 露天風呂付き客室」（太平洋を一望する客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「冬の贅沢！本場あんこうどぶ汁会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR常磐線「磯原駅」よりタクシー約5分（無料送迎あり）。常磐道「北茨城IC」より車約10分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30磯原海岸散策 → 17:00展望露天風呂 → 18:30本場あんこうどぶ汁会席ディナー → 21:00月見酒【2日目】06:30太平洋の日の出鑑賞 → 08:00海鮮朝食 → 10:00チェックアウト</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">洋風リゾートホテルやバイキング形式を希望する方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">本場どぶ汁鍋×太平洋展望露天風呂×磯原温泉×楽天4.48。北茨城の王道名門旅館です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※磯原駅より無料送迎あり・全室海側</span><span class="text-xs font-black text-amber-800">楽天トラベル人気名旅館</span></div><a href="{make_aff_url(17752)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】としまや月浜の湯の空室・最安プランを見る</span></a></div>
</div>''')

# 宿6: 偕 二ツ島
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第6位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">茨城 北茨城磯原 海音色の宿 偕 二ツ島（かい ふたつしま）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 茨城県北茨城市磯原町磯原2552</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.39</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> あんこう鍋体験：二ツ島を目の前に望む全室海側宿！名物あんこうどぶ汁会席＆波音の天然温泉</h4><p class="text-xs text-stone-700 leading-relaxed">「北茨城のシンボル・二ツ島を目の前に望む特等席で、あん肝たっぷりの名物どぶ汁鍋を味わい、波打ち際の温泉露天風呂で癒やされたい」という方に絶賛されています。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/28263/28263.jpg" alt="偕 二ツ島" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 名物あんこうどぶ汁:</span> 濃厚なあん肝を炒りつけた本場仕込みの特製どぶ汁</div><div><span class="text-stone-400">■ 二ツ島パノラマ:</span> 客室や露天風呂から奇岩「二ツ島」を真正面に望む</div><div><span class="text-stone-400">■ 磯原温泉の湯:</span> 太平洋の波しぶきを感じる大浴場＆露天風呂</div><div><span class="text-stone-400">■ 和モダンリニューアル:</span> スタイリッシュに改装された清潔な空間</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 1泊1万円台前半からの抜群コスパ＋磯原駅無料送迎＋楽天4.39</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「二ツ島の絶景を目の前に眺めながら、本場の濃厚どぶ汁鍋をコスパ良く堪能したいカップルや友人旅」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">磯原海岸のシンボル「二ツ島」の目の前に建つ海辺の宿。冬のあんこうプランは、あん肝を惜しみなく使った濃厚どぶ汁鍋が評判で、ぷりぷりのアンコウの身と出汁が染みた野菜、締めの雑炊まで満足度抜群。全客室が海に面しており、ライトアップされた夜の二ツ島や、海から昇る朝日のパノラマは格別の美しさです。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「海側和モダン客室」（二ツ島と太平洋を一望するリニューアル客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「冬の味覚！名物あんこうどぶ汁会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR常磐線「磯原駅」よりタクシー約5分（無料送迎あり）。常磐道「北茨城IC」より車約10分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30二ツ島を望むテラスでコーヒー → 17:00露天風呂 → 18:30あんこうどぶ汁会席ディナー【2日目】06:30二ツ島からの日の出鑑賞 → 08:00和朝食 → 10:00チェックアウト</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">大規模なバイキング会場を希望する方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">二ツ島絶景×濃厚どぶ汁鍋×波音露天風呂×楽天4.39。北茨城の絶景オーシャンフロント宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※磯原駅より無料送迎あり・全室二ツ島ビュー</span><span class="text-xs font-black text-amber-800">楽天トラベル人気施設</span></div><a href="{make_aff_url(28263)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】偕 二ツ島の空室・最安プランを見る</span></a></div>
</div>''')

# 宿7: 小名浜オーシャンホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第7位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">福島 いわき小名浜 小名浜オーシャンホテル＆ゴルフクラブ</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 福島県いわき市泉町下川字大畑17</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.36</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> あんこう鍋体験：太平洋フロントの絶景リゾート！常磐もの特選あんこう鍋会席＆海を見下ろす露天風呂</h4><p class="text-xs text-stone-700 leading-relaxed">「太平洋を見下ろす高台のリゾートで、冬限定の常磐もの特選あんこう鍋会席を味わい、海と一体化する絶景露天風呂に癒やされたい」という方に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/11304/11304.jpg" alt="小名浜オーシャンホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 常磐あんこう鍋:</span> 常磐沖で獲れた新鮮アンコウの特製味噌鍋会席</div><div><span class="text-stone-400">■ 絶景露天風呂:</span> 太平洋の大海原を見下ろすパノラマ天然温泉</div><div><span class="text-stone-400">■ 全室オーシャンビュー:</span> 窓一面に広がる太平洋と朝日を一望</div><div><span class="text-stone-400">■ アクアマリンふくしま至近:</span> 小名浜港・水族館まで車で約15分</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 1泊1万円台前半の良心価格＋JR泉駅無料送迎＋楽天4.36</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「太平洋の絶景露天風呂とリゾートステイを楽しみながら、冬の常磐名物あんこう鍋をコスパ良く味わいたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">太平洋に突き出た岬の高台に位置する絶景リゾートホテル。レストランで提供される冬のあんこう鍋は、常磐沖で水揚げされた新鮮なアンコウを特製味噌仕立てで煮込み、あん肝のまろやかさと身の弾力が抜群。海を見下ろす露天風呂からは果てしない水平線が広がり、波の音と心地よい海風に包まれながら贅沢な湯浴みが叶います。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「オーシャンビューツイン」（太平洋の絶景パノラマを望む広々客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「冬の味覚！常磐特選あんこう鍋会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR常磐線「泉駅」よりタクシー約15分（無料送迎あり）。常磐道「いわき勿来IC」より車約15分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30アクアマリンふくしま観光 → 17:00絶景露天風呂 → 18:30常磐あんこう鍋ディナー【2日目】06:30朝風呂 → 08:00朝食バイキング → 10:00いわき・ら・ら・ミュウへ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">和風の畳敷き純和風旅館のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">常磐あんこう鍋×太平洋絶景露天×全室海一望×楽天4.36。いわき屈指の絶景リゾート宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※泉駅より無料送迎バス運行</span><span class="text-xs font-black text-amber-800">楽天トラベル人気リゾート</span></div><a href="{make_aff_url(11304)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】小名浜オーシャンホテルの空室・最安プランを見る</span></a></div>
</div>''')

# 宿8: うぐいす谷温泉 竹の葉
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第8位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">茨城 北茨城磯原 うぐいす谷温泉 竹の葉（たけのは）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 茨城県北茨城市磯原町磯原2275</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.35</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> あんこう鍋体験：竹林と渓流に囲まれた一軒宿！名物濃厚あんこう鍋・あん肝ポン酢＆とろとろ美肌温泉</h4><p class="text-xs text-stone-700 leading-relaxed">「北茨城の静かな竹林と渓流沿いに佇む隠れ宿で、自家製味噌の濃厚あんこう鍋とあん肝ポン酢を味わい、とろとろの美肌温泉に癒やされたい」という温泉ファンに大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/38592/38592.jpg" alt="竹の葉" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 濃厚あんこう鍋:</span> 秘伝の自家製味噌とあん肝の深いコクが自慢の鍋</div><div><span class="text-stone-400">■ とろとろ美肌温泉:</span> pH8.8のアルカリ性単純温泉（源泉かけ流し）</div><div><span class="text-stone-400">■ 竹林と渓流の風情:</span> 全室から竹林と川のせせらぎを望む静寂な一軒宿</div><div><span class="text-stone-400">■ 常磐海の幸:</span> 平目の姿造りや地魚の刺身が充実</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 全12室の静かな隠れ家＋磯原駅無料送迎＋楽天4.35</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「竹林に囲まれた静かな一軒宿で、とろとろの美肌温泉と本場仕込みの濃厚あんこう鍋に癒やされたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">北茨城の山あいにひっそりと佇む全12室の温泉宿。冬のあんこう鍋は、自家製の合わせ味噌に香ばしく炒ったあん肝を溶かし込んだ濃厚な出汁が絶品で、プリプリの身とコラーゲンがたっぷり。うぐいす谷温泉の湯は化粧水のようにトロリとした肌触りで、竹林を望む露天風呂で川のせせらぎを聞きながら浸かる時間は日々の喧騒を忘れさせてくれます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「渓流側純和風客室」（竹林と川のせせらぎを望む落ち着いた客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「冬の味覚！特製あんこう鍋会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR常磐線「磯原駅」よりタクシー約5分（無料送迎あり）。常磐道「北茨城IC」より車約10分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30竹林散策 → 17:00美肌露天風呂 → 18:30濃厚あんこう鍋会席ディナー → 21:00大浴場【2日目】07:30朝風呂 → 08:30和朝食 → 10:00チェックアウト</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">海のオーシャンビューを第一希望とする方（山あい立地のため）。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">濃厚あんこう鍋×とろとろ美肌温泉×竹林の一軒宿×楽天4.35。北茨城の静かな名湯宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※磯原駅より無料送迎あり</span><span class="text-xs font-black text-amber-800">全12室の竹林隠れ宿</span></div><a href="{make_aff_url(38592)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】うぐいす谷温泉 竹の葉の空室・最安プランを見る</span></a></div>
</div>''')

# 宿9: 雨情の宿 新つた
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第9位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">福島 いわき湯本温泉 いわき湯本温泉 雨情の宿 新つた</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 福島県いわき市常磐湯本町吹谷58</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.33</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> あんこう鍋体験：野口雨情ゆかりの老舗宿！常磐名物あんこう鍋会席＆庭園露天風呂「竹林を渡る風」</h4><p class="text-xs text-stone-700 leading-relaxed">「いわき湯本温泉の老舗宿で、常磐ものの新鮮アンコウ鍋を味わい、硫黄の香る庭園露天風呂で日本三古泉の名湯を満喫したい」という方に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/18337/18337.jpg" alt="新つた" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 常磐あんこう会席:</span> 名物あんこう鍋・あん肝・常磐前浜の地魚刺身</div><div><span class="text-stone-400">■ 日本三古泉の硫黄泉:</span> 毎分豊富な源泉かけ流し庭園露天風呂</div><div><span class="text-stone-400">■ 雨情ギャラリー:</span> 童謡詩人・野口雨情の遺墨や資料を展示</div><div><span class="text-stone-400">■ スパリゾートハワイアンズ:</span> ハワイアンズまで車で約10分の好立地</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 湯本駅より徒歩約7分＋1泊1万円前後の良心価格＋楽天4.33</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「いわき湯本温泉の名湯硫黄泉に浸かりながら、冬の常磐名物あんこう鍋会席をお手頃価格で満喫したい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">いわき湯本温泉街の中心に位置する老舗宿。冬のあんこう会席は、地元いわきの小名浜港で揚がった新鮮なアンコウを使い、ぷりぷりの身と濃厚なあん肝の旨味が溶け込んだ出汁が絶品。庭園露天風呂「竹林を渡る風」には硫黄の香る良質な源泉が注がれ、湯上がりもしっとり温まります。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「純和風客室」（落ち着いた数寄屋風情の清潔な客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「冬の常磐名物！あんこう鍋会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR常磐線「湯本駅」より徒歩約7分（無料送迎あり）。常磐道「いわき湯本IC」より車約10分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30温泉街足湯めぐり → 17:00庭園露天風呂 → 18:30常磐あんこう鍋ディナー【2日目】07:30朝風呂 → 08:30和朝食 → 10:00スパリゾートハワイアンズへ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">最新鋭のタワー型リゾート設備のみを求める方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">常磐あんこう鍋×庭園硫黄泉露天×湯本駅徒歩7分×楽天4.33。いわき湯本の王道老舗宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※湯本駅徒歩7分・送迎あり</span><span class="text-xs font-black text-amber-800">野口雨情ゆかりの老舗</span></div><a href="{make_aff_url(18337)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】雨情の宿 新つたの空室・最安プランを見る</span></a></div>
</div>''')

# 宿10: 大洗パークホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第10位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">茨城 大洗海岸 大洗パークホテル</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 茨城県東茨城郡大洗町磯浜町8249-10</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.01</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> あんこう鍋体験：2026年リニューアル！大洗松林の温泉リゾート＆冬の本格あんこう鍋会席・サウナ</h4><p class="text-xs text-stone-700 leading-relaxed">「大洗海岸の松林に囲まれたリゾートで、冬限定の本格あんこう鍋会席と大洗温泉、サウナを満喫したい」というファミリー・カップルに大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/6274/6274.jpg" alt="大洗パークホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 本格あんこう会席:</span> 大洗産あんこう鍋・あん肝ポン酢・あんこう雑炊</div><div><span class="text-stone-400">■ 大洗温泉＆サウナ:</span> ナトリウム塩化物泉の大浴場＆ロウリュサウナ</div><div><span class="text-stone-400">■ 松林リゾート立地:</span> アクアワールド大洗水族館まで徒歩約3分</div><div><span class="text-stone-400">■ 2026年改装:</span> リニューアルされた快適な客室とパブリックスペース</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 1泊1万円前後の抜群コスパ＋大洗駅無料送迎＋楽天4.01</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「大洗水族館観光とあわせて、冬の本格あんこう鍋と天然温泉・サウナを手頃な価格で楽しみたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">アクアワールド大洗水族館のすぐ隣、松林に囲まれたリゾートホテル。冬のあんこう会席プランでは、特製味噌で仕上げた熱々のあんこう鍋やあん肝ポン酢が楽しめ、旨味たっぷりの雑炊まで大満足。大洗温泉の大浴場とサウナでしっかりリフレッシュできます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「リニューアル和モダンツイン」（松林の緑を望む快適客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「冬の味覚！本格あんこう鍋会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>鹿島臨海鉄道「大洗駅」よりバス約10分（アクアワールド下車徒歩約3分、無料送迎あり）。東水戸道路「水戸大洗IC」より車約10分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30アクアワールド大洗水族館観光 → 17:30大洗温泉＆サウナ → 18:30あんこう鍋ディナー【2日目】07:30朝風呂 → 08:30和洋朝食 → 10:00チェックアウト</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">純和風の木造高級旅館のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">大洗あんこう鍋×大洗温泉サウナ×水族館徒歩3分×楽天4.01。大洗観光に便利なリゾート宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※大洗駅より無料送迎あり・水族館徒歩3分</span><span class="text-xs font-black text-amber-800">2026年リニューアル施設</span></div><a href="{make_aff_url(6274)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】大洗パークホテルの空室・最安プランを見る</span></a></div>
</div>''')

# FAQ・関連記事ナビ
review_parts.append('''<h2 class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-8">💡 あんこう鍋・どぶ汁に関するよくある質問（FAQ）</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">Q</span>
      「一般的なあんこう鍋」と「元祖どぶ汁」の決定的な違いは？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
      <span class="font-bold text-amber-700">A.</span> 通常のあんこう鍋は出汁（昆布や鰹）に味噌や醤油を溶いて煮ますが、「どぶ汁」は<strong>「水を一切使わず、生のあん肝を鍋肌でじっくり炒りつけ、味噌を加えてアンコウ自身の水分と野菜の水分だけで煮込む」</strong>という漁師直伝の究極の鍋です。あん肝の比率が極めて高く、圧倒的に濃厚でクリーミーな味わいが特徴です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">Q</span>
      あんこうの「七つ道具（ななつどうぐ）」とは何？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
      <span class="font-bold text-amber-700">A.</span> 骨以外捨てるところがないと言われるアンコウの食用7部位（<strong>①身・②皮・③肝・④エラ・⑤ヒレ・⑥卵巣・⑦胃袋</strong>）のことです。淡白で上品な身、コラーゲンたっぷりの皮、濃厚な肝、コリコリとしたエラや胃袋など、部位ごとに異なる食感と旨味を楽しめます。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">Q</span>
      あんこう鍋のベストシーズン（旬の時期）はいつ？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
      <span class="font-bold text-amber-700">A.</span> 11月から3月（特にあん肝が最も肥大化する12月〜2月が最盛期）です。大洗ホテルの吊るし切り実演や、北茨城のどぶ汁プランもこの時期限定で提供されます。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-50 border border-stone-200/90 shadow-sm">
  <div class="flex items-center gap-2 mb-3 border-b border-stone-200 pb-2">
    <span class="px-2.5 py-0.5 bg-stone-800 text-white font-black text-xs rounded-md">旅行ナレッジ</span>
    <h3 class="text-sm font-bold text-stone-900">📍 あんこう鍋・どぶ汁温泉宿 宿泊エリアガイド＆旅行情報</h3>
  </div>
  <p class="text-xs text-stone-600 leading-relaxed">
    当ガイドでは、<strong>日本全国のあんこう鍋・元祖どぶ汁・あん肝料理自慢の名門温泉宿（大洗・水戸・北茨城平潟港・磯原・いわき湯本・小名浜）</strong>を厳選してご紹介しています。
    楽天トラベルの最新空室状況・限定宿泊プラン・リアルタイムクチコミ評価と直結しており、失敗しないホテル選びをサポートします。
  </p>
  <div class="mt-4 pt-3 border-t border-stone-200 flex flex-wrap gap-2 text-2xs text-stone-500">
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">エリア: 全国（茨城・福島）</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">テーマ: あんこう鍋・元祖どぶ汁・あん肝ポン酢・吊るし切り実演・コラーゲン風呂・太平洋オーシャンビュー温泉</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">更新日: 2026年最新版</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">即時予約・公式連携</span>
  </div>
</div>

<div class="my-12 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-50 via-amber-50/40 to-orange-50/30 border border-amber-200/80 shadow-md">
  <div class="flex items-center gap-2 mb-4 border-b border-amber-200 pb-3">
    <span class="px-3 py-1 bg-amber-600 text-white font-black text-xs rounded-lg">関連記事ナビ</span>
    <h3 class="text-base md:text-lg font-bold text-stone-900">🗺️ あわせて読みたい！冬の美食＆名湯特集</h3>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    <div class="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
      <h4 class="text-xs font-black text-amber-900">💎 人気の秋冬キラー特集</h4>
      <a href="/posts/winter-kanburi-yellowtail-shabu-onsen-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 寒ブリ・ぶりしゃぶが旨い温泉宿10選！比較
      </a>
      <a href="/posts/matsutake-autumn-mushroom-kaiseki-onsen-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 松茸尽くし会席が旨い温泉宿10選！比較
      </a>
      <a href="/posts/hamayaki-seafood-scallop-oyster-buffet-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 海鮮浜焼き食べ放題が凄い温泉宿10選！比較
      </a>
      <a href="/posts/a5-brand-wagyu-beef-kaiseki-onsen-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 A5ブランド和牛が凄い温泉宿10選！極上肉比較
      </a>
    </div>
    <div class="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
      <h4 class="text-xs font-black text-orange-900">🎌 エリア別特集</h4>
      <a href="/posts/ibaraki-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-orange-700">🏨 【茨城・大洗北茨城】厳選10選ガイド</a>
      <a href="/posts/fukushima-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-orange-700">🏨 【福島・いわき湯本】厳選10選ガイド</a>
      <a href="/posts/chiba-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-orange-700">🏨 【千葉・房総】厳選10選ガイド</a>
      <a href="/posts/kanagawa-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-orange-700">🏨 【神奈川・箱根】厳選10選ガイド</a>
    </div>
  </div>
</div>''')

slug = 'ankou-dobujiru-hotpot-winter-gourmet-hotels-guide'
title = '【2026最新】あんこう鍋・どぶ汁が旨い温泉宿10選！比較'
desc = '冬の味覚の王様！濃厚あんこう鍋・元祖どぶ汁・あん肝ポン酢！大洗ホテルから里海邸金波楼、北茨城まるみつ旅館、いわき新つたまで徹底比較。失敗しないあんこう尽くし温泉宿10選を本音レビュー。全施設楽天公式最新空室リンク付き。'

post_data = {
    'id': slug,
    'slug': slug,
    'title': title,
    'description': desc,
    'prefecture': '全国',
    'area': '全国（茨城・福島）',
    'hotel_name': 'あんこう鍋・どぶ汁が旨い温泉宿おすすめ10選',
    'image': 'https://img.travel.rakuten.co.jp/share/HOTEL/136101/136101.jpg',
    'other_images': [],
    'affiliate_url': make_aff_url(136101),
    'price': 25820,
    'rating': 4.83,
    'date': '2026-08-26',
    'categories': [
        '特集10選',
        'キラーコンテンツ',
        '後悔回避',
        'ホテル厳選',
        'あんこう鍋',
        'どぶ汁',
        'あん肝',
        '冬の味覚'
    ],
    'keywords': [
        'あんこう鍋 温泉宿 おすすめ 10選',
        'どぶ汁 茨城 旅館 比較',
        'あんこう尽くし 宿泊 予約',
        '大洗 北茨城 あんこう鍋 ホテル 比較',
        '大洗ホテル 里海邸 まるみつ旅館 比較',
        'あんこう鍋 楽天トラベル'
    ],
    'is_special_feature': True,
    'review': ''.join(review_parts)
}

target_file = f'src/data/posts/{slug}.json'
with open(target_file, 'w', encoding='utf-8') as f:
    json.dump(post_data, f, ensure_ascii=False, indent=2)

print('Generated post file successfully:', target_file)
