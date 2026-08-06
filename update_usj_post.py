import json

affiliate_id = '54d2a438.4bc4abc2.54d2a439.aa1be583'

usj_hotels_data = [
    {
        'rank': '👑 ファミリー部門 第1位',
        'badge_color': 'from-yellow-500/10 via-orange-500/10 to-red-500/10 border-yellow-400/40',
        'badge_text': 'bg-yellow-200 text-yellow-900',
        'btn_color': 'from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400',
        'star': '⭐ 4.6 / 5.0',
        'name': 'ホテル ユニバーサル ポート',
        'hno': '38281',
        'desc': '館内の至る所にミニオンが溢れる、子供が大喜び間違いなしのオフィシャルホテル！「ミニオンルーム」は予約困難なほど大人気。全室バストイレ別（洗い場付きバスルーム）完備で、赤ちゃん・子連れファミリーに圧倒的に選ばれています。'
    },
    {
        'rank': '👑 パーク徒歩1分＆夜景部門 第1位',
        'badge_color': 'from-pink-500/10 via-purple-500/10 to-indigo-500/10 border-pink-400/40',
        'badge_text': 'bg-pink-200 text-pink-900',
        'btn_color': 'from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500',
        'star': '⭐ 4.5 / 5.0',
        'name': 'ザ パーク フロント ホテル アット ユニバーサル・スタジオ・ジャパン',
        'hno': '147805',
        'desc': 'パークのメインゲートまで徒歩1分という圧倒的近さ！高層階からはパーク全体のナイトビューを一望でき、ラグジュアリーな空間はカップルの記念日やおしゃれな女子旅に最適です。'
    },
    {
        'rank': '👑 コスパ・リブランド部門 第1位',
        'badge_color': 'from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border-emerald-400/40',
        'badge_text': 'bg-emerald-200 text-emerald-900',
        'btn_color': 'from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500',
        'star': '⭐ 4.4 / 5.0',
        'name': 'オリエンタルホテル ユニバーサル・シティ',
        'hno': '182668',
        'desc': 'リブランドオープンした大人気ホテル！スタイリッシュなデザインと高い快適性を備えつつ、他オフィシャルホテルと比較してリーズナブルな宿泊料金に設定されていることが多いコスパ最強宿。名物「肉厚ハンバーガー」の朝食ビュッフェも大好評！'
    },
    {
        'rank': '👑 2018年誕生・最新設備＆ファミリー人気',
        'badge_color': 'from-amber-500/10 via-orange-500/10 to-yellow-500/10 border-amber-400/40',
        'badge_text': 'bg-amber-200 text-amber-900',
        'btn_color': 'from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500',
        'star': '⭐ 4.6 / 5.0',
        'name': 'ホテル ユニバーサル ポート ヴィータ',
        'hno': '166138',
        'desc': '太陽や自然をテーマにした明るくポップなオフィシャルホテル。もこもこメゾネットやローベッドルームなど多種多様な客室があり、3世代旅行や大人数ファミリーでも快適に過ごせます。'
    },
    {
        'rank': '👑 天然温泉スパ＆大人の癒やし部門',
        'badge_color': 'from-indigo-500/10 via-blue-500/10 to-cyan-500/10 border-indigo-400/40',
        'badge_text': 'bg-indigo-200 text-indigo-900',
        'btn_color': 'from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500',
        'star': '⭐ 4.7 / 5.0',
        'name': 'リーベルホテル アット ユニバーサル・スタジオ・ジャパン（現 リーベルホテル 大阪）',
        'hno': '172378',
        'desc': 'エリア最大級のリゾート感あふれるホテル。地下約1,000mから湧き出る天然温泉大浴場と広大なリバーサイドテラスを併設。パークで一日中遊び疲れた体を極上の天然温泉で癒やすことができます。'
    },
    {
        'rank': '👑 セサミストリートコラボ＆直結アクセス',
        'badge_color': 'from-rose-500/10 via-red-500/10 to-orange-500/10 border-rose-400/40',
        'badge_text': 'bg-rose-200 text-rose-900',
        'btn_color': 'from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500',
        'star': '⭐ 4.3 / 5.0',
        'name': 'ホテル近鉄ユニバーサル・シティ',
        'hno': '16654',
        'desc': 'ユニバーサル・シティウォーク大阪に直結！館内・客室にはセサミストリートの仲間たちがデザインされた「セサミストリート・コンセプトフロア」があり、パークを出た後もポップな世界観を楽しめます。'
    },
    {
        'rank': '👑 31階展望天然温泉＆夜景スパ',
        'badge_color': 'from-blue-500/10 via-sky-500/10 to-cyan-500/10 border-blue-400/40',
        'badge_text': 'bg-blue-200 text-blue-900',
        'btn_color': 'from-blue-500 to-sky-600 hover:from-blue-400 hover:to-sky-500',
        'star': '⭐ 4.4 / 5.0',
        'name': 'ホテル京阪 ユニバーサル・タワー',
        'hno': '71921',
        'desc': 'ユニバーサルシティ駅スグ！31階には地上110mから大阪の夜景を一望できる天然温泉スカイスパ「スパーク」を併設。シックで落ち着いたインテリアが魅力の32階建て高層ホテルです。'
    },
    {
        'rank': '👑 駅直結＆展望露天風呂スパ',
        'badge_color': 'from-purple-500/10 via-violet-500/10 to-fuchsia-500/10 border-purple-400/40',
        'badge_text': 'bg-purple-200 text-purple-900',
        'btn_color': 'from-purple-500 to-violet-600 hover:from-purple-400 hover:to-violet-500',
        'star': '⭐ 4.5 / 5.0',
        'name': 'ザ シンギュラリ ホテル & スパ アット ユニバーサル・スタジオ・ジャパン',
        'hno': '160809',
        'desc': 'JRユニバーサルシティ駅改札を出てすぐの絶好アクセス！「和」と「モダン」が融合した和モダンホテル。最上階にはスカイスパ（展望露天風呂・サウナ）を完備し、和のくつろぎを体感できます。'
    }
]

review_html = '''<h2 id="intro">【2026年最新】USJオフィシャルホテル全8棟 比較＆完全攻略ガイド</h2>
<p>大阪旅行の目玉といえば<strong>ユニバーサル・スタジオ・ジャパン（USJ）</strong>！特に2024年にオープンした「ドンキーコング・カントリー」や、連日大混雑の「スーパー・ニンテンドー・ワールド」を120%楽しむなら、<strong>「USJオフィシャルホテル」</strong>への宿泊が圧倒的におすすめです。</p>
<p>本記事では、公式楽天トラベルAPIと連携し、全8棟あるオフィシャルホテルの特長や高画質写真付きカード、目的別ランキング、さらに<strong>「エリア入場確約券付きプラン」</strong>の仕組みまで網羅しました。</p>

<div class="my-6 p-5 bg-white border border-blue-950/20 rounded-2xl shadow-sm">
  <h3 class="text-lg font-bold text-blue-900 border-b border-blue-950/10 pb-2 mb-3">📌 目次</h3>
  <ul class="space-y-2 text-sm text-blue-950/80 font-medium">
    <li><a href="#benefits" class="hover:text-blue-600 hover:underline">1. 🌟 USJオフィシャルホテルに泊まる3つの最強メリット</a></li>
    <li><a href="#nintendo" class="hover:text-blue-600 hover:underline">2. 🍄 「スーパー・ニンテンドー・ワールド」入場確約券付きプランとは？</a></li>
    <li><a href="#hotels-all" class="hover:text-blue-600 hover:underline">3. 🏨 【写真・価格比較】USJオフィシャルホテル全8棟おすすめ紹介</a></li>
    <li><a href="#tips" class="hover:text-blue-600 hover:underline">4. 🉐 USJ旅行を劇的に安くする裏ワザ・楽天トラベル活用術</a></li>
  </ul>
</div>

<hr class="my-8 border-blue-950/10" />

<h2 id="benefits">🌟 1. USJオフィシャルホテルに泊まる3つの最強メリット</h2>
<p>USJ周辺には様々なホテルがありますが、公式認定された「オフィシャルホテル」に宿泊すると、以下の特別な恩恵が受けられます。</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div class="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
    <h3 class="text-sm font-bold text-amber-950 flex items-center gap-2">
      <span>🍄</span> <span>① パーク入場確約＆チケット購入</span>
    </h3>
    <p class="text-xs text-blue-950/80 leading-relaxed">
      ホテル内でスタジオ・パス（入場券）が購入できるため、当日の朝、<strong>チケットブースの長蛇の列に並ぶ必要がありません</strong>。スムーズに入園できます。
    </p>
  </div>
  <div class="p-5 rounded-2xl bg-blue-50 border border-blue-200 space-y-3">
    <h3 class="text-sm font-bold text-blue-950 flex items-center gap-2">
      <span>🚶</span> <span>② パークまで徒歩数分の超好立地</span>
    </h3>
    <p class="text-xs text-blue-950/80 leading-relaxed">
      全ホテルがパークから徒歩数分圏内！遊び疲れてもすぐにホテルに帰って休むことができ、子連れ旅行には特に助かります。
    </p>
  </div>
  <div class="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
    <h3 class="text-sm font-bold text-rose-950 flex items-center gap-2">
      <span>🎁</span> <span>③ コラボルーム＆限定グッズ</span>
    </h3>
    <p class="text-xs text-blue-950/80 leading-relaxed">
      ミニオンやセサミストリートなどの可愛いコラボルームに宿泊可能！さらに、オフィシャルホテル宿泊者限定のアメニティやグッズがもらえるホテルもあります。
    </p>
  </div>
</div>

<hr class="my-8 border-blue-950/10" />

<h2 id="nintendo">🍄 2. 「スーパー・ニンテンドー・ワールド」入場確約券付きプランとは？</h2>
<p>現在、USJで最も人気なのがマリオやドンキーコングの世界を体験できる「スーパー・ニンテンドー・ワールド」。あまりの人気で、<strong>入場整理券が朝のうちに発券終了</strong>してしまうことも珍しくありません。</p>

<p>そこで最強の切り札となるのが、オフィシャルホテルが販売している<strong>「エリア入場確約券付き宿泊プラン」</strong>です！</p>
<ul class="list-disc pl-5 space-y-2 text-sm text-blue-950/80 mb-6">
  <li>事前にエリア入場時間が確約されているため、当日の早起き・ダッシュが不要！</li>
  <li>確約券単体での購入はできません（エクスプレス・パスを除く）。ホテル宿泊とセットになったプランを選ぶのが一番確実です。</li>
  <li>ドンキーコング・カントリーへのアクセスも、まずはニンテンドー・ワールドのエリア入場確約が必要です。</li>
</ul>

<hr class="my-8 border-blue-950/10" />

<h2 id="hotels-all">🏨 3. 【写真・価格比較】USJオフィシャルホテル全8棟おすすめ紹介</h2>
<p>全8棟あるUSJオフィシャルホテルを楽天公式APIデータに基づき一挙ご紹介します。写真や特徴を比較して、旅の目的にぴったりの宿を見つけましょう！</p>
'''

for h in usj_hotels_data:
    img_url = f"https://img.travel.rakuten.co.jp/share/HOTEL/{h['hno']}/{h['hno']}.jpg"
    aff_url = f"https://hb.afl.rakuten.co.jp/hgc/{affiliate_id}/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F{h['hno']}%2F{h['hno']}.html"
    
    card_html = f'''
<div class="my-8 p-6 rounded-3xl bg-gradient-to-br {h['badge_color']} shadow-sm space-y-4">
  <div class="flex items-center justify-between border-b border-black/10 pb-3">
    <span class="text-xs font-black {h['badge_text']} px-3 py-1 rounded-full uppercase">{h['rank']}</span>
    <span class="text-[11px] font-bold text-gray-800">{h['star']}</span>
  </div>
  <h3 class="text-lg md:text-xl font-black font-journal-serif text-blue-950">{h['name']}</h3>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
    <div class="aspect-video w-full rounded-2xl overflow-hidden border border-black/10 shadow-inner bg-gray-100">
      <img src="{img_url}" alt="{h['name']} 公式楽天トラベル画像" class="w-full h-full object-cover" loading="lazy" />
    </div>
    <div class="md:col-span-2 space-y-3">
      <p class="text-xs md:text-sm text-blue-950/80 leading-relaxed font-medium">{h['desc']}</p>
      <div class="pt-2 text-right">
        <a href="{aff_url}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r {h['btn_color']} text-white font-extrabold text-xs rounded-xl shadow transition">
          🏨 {h['name']} のプラン・空室を見る（公式 楽天トラベル）
        </a>
      </div>
    </div>
  </div>
</div>
'''
    review_html += card_html

review_html += '''
<hr class="my-8 border-blue-950/10" />

<h2 id="tips">🉐 4. USJ旅行を劇的に安くする裏ワザ・楽天トラベル活用術</h2>
<p>USJ旅行のホテル代を安く抑えるなら、<strong>楽天トラベルのセールやキャンペーン</strong>を活用しない手はありません！</p>
<ul class="list-disc pl-5 space-y-2 text-sm text-blue-950/80 mb-6">
  <li><strong>楽天スーパーSALE / 楽天トラベルスーパーSALE:</strong> 四半期に一度の特大セール！半額プランや高額クーポンが配布されます。</li>
  <li><strong>5と0のつく日:</strong> 毎月5, 10, 15, 20, 25, 30日は高級宿やオフィシャルホテルで使える5%〜10%OFFクーポンが出現。</li>
  <li><strong>スーパー・ニンテンドー・ワールド確約プランの早割:</strong> 確約プランは人気が高いため、2〜3ヶ月前からの「早割プラン」を狙うと最安値で予約できます。</li>
</ul>

<hr class="my-8 border-blue-950/10" />

<h2>まとめ：2026年のUSJはオフィシャルホテル宿泊で完璧に攻略！</h2>
<p>ドンキーコングの登場でますます盛り上がりを見せるUSJ。エリア入場確約や徒歩数分の快適さを手に入れて、最高の思い出を作りましょう！人気のホテルや確約プランは数ヶ月前から埋まってしまうので、日程が決まったらすぐの予約をおすすめします。</p>
'''

post_data = {
  "id": "usj-official-hotels-guide",
  "title": "【2026年最新】USJオフィシャルホテル全8棟おすすめ比較！マリオ＆ドンキーコング入場確約・安く泊まる裏ワザ徹底解説",
  "hotel_name": "USJ（ユニバ）オフィシャルホテル全8棟特集",
  "description": "ユニバーサル・スタジオ・ジャパン（USJ）のオフィシャルホテル全8棟を楽天公式データで徹底比較！「スーパー・ニンテンドー・ワールド（マリオ＆ドンキーコング）」のエリア入場確約券付きプラン、子連れ・カップル向けのおすすめ宿、USJに安く泊まる裏ワザまで完全ガイド。",
  "is_special_feature": True,
  "review": review_html,
  "image": "https://img.travel.rakuten.co.jp/share/HOTEL/38281/38281.jpg",
  "other_images": [
    "https://img.travel.rakuten.co.jp/share/HOTEL/147805/147805.jpg",
    "https://img.travel.rakuten.co.jp/share/HOTEL/182668/182668.jpg",
    "https://img.travel.rakuten.co.jp/share/HOTEL/166138/166138.jpg"
  ],
  "affiliate_url": f"https://hb.afl.rakuten.co.jp/hgc/{affiliate_id}/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38281%2F38281.html",
  "prefecture": "大阪府",
  "area": "関西",
  "categories": [
    "特集・まとめ",
    "お得情報",
    "ファミリー・女子旅"
  ],
  "price": 8500,
  "rating": 4.6,
  "date": "2026-08-06 13:50:00"
}

with open('src/data/posts/usj-official-hotels-guide.json', 'w', encoding='utf-8') as f:
    json.dump(post_data, f, ensure_ascii=False, indent=2)

print('Updated src/data/posts/usj-official-hotels-guide.json successfully!')
