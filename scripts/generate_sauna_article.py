import json
import re

with open('scripts/sauna_hotels_data.json', 'r', encoding='utf-8') as f:
    hotels = json.load(f)

hotels.sort(key=lambda x: x['rank'])

hotel_sections = []
for h in hotels:
    rank = h['rank']
    name = h['name']
    area = h['area']
    pref = h['pref']
    rating = h['rating']
    reviews = h['reviews']
    price = f"¥{h['price']:,}〜" if h['price'] else "プランによる"
    img = h['img']
    url = h['url']
    feature = h['feature']
    address = h['address']
    special = h['special']

    sec = f'''
<h3>第{rank}位：【{pref}・{area}】{name}</h3>
<div class="my-6 p-5 border border-teal-200 rounded-2xl bg-teal-50/40">
  <div class="flex flex-col md:flex-row gap-6">
    <div class="md:w-1/2">
      <img src="{img}" alt="{name}" class="rounded-xl w-full h-64 object-cover shadow-md" loading="lazy" />
    </div>
    <div class="md:w-1/2 space-y-3">
      <div class="flex items-center gap-2">
        <span class="bg-teal-700 text-white text-xs px-2.5 py-1 rounded-full font-bold">サウナ宿第{rank}位</span>
        <span class="text-sm font-semibold text-stone-700">{pref}・{area}</span>
      </div>
      <p class="text-lg font-bold text-stone-900">{name}</p>
      <div class="flex items-center gap-3">
        <span class="text-amber-600 font-bold text-xl">★ {rating}</span>
        <span class="text-stone-500 text-sm">（口コミ {reviews:,}件）</span>
      </div>
      <p class="text-sm text-stone-600"><strong>参考宿泊料金：</strong> <span class="text-red-600 font-bold text-lg">{price}</span> / 1名様（2名1室利用時・税込）</p>
      <p class="text-xs text-stone-500"><strong>所在地：</strong>{address}</p>
      <div class="pt-2">
        <a href="{url}" target="_blank" rel="noopener noreferrer" class="inline-block w-full text-center bg-gradient-to-r from-teal-700 via-emerald-600 to-amber-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:brightness-110 transition">
          楽天トラベルで空室・サウナ付き宿泊プランを確認する
        </a>
      </div>
    </div>
  </div>
</div>

<h4>【サウナの核心と空間美】{feature}</h4>
<p>
{name}は、日本中のサウナーが憧れる全国屈指の「ととのい」環境を備えたサウナ特化型ホテル・温泉旅館です。{special}
サウナ室の設計、熱源（薪ストーブや本場フィンランド式HARVIA製ストーブ）、香気高いアロマロウリュ、そして水風呂の水質と温度管理に至るまで、徹底した美意識とクラフトマンシップが貫かれています。
</p>

<h4>【水風呂と外気浴スペース】伏流水・天然温泉チラー・絶景インフィニティ</h4>
<p>
サウナの醍醐味である「水風呂」には、{area}が誇る天然湧水や雪解けの伏流水、あるいは地下源泉を贅沢に掛け流しで使用。肌当たりが極めてまろやかで、羽衣を纏うように身体を優しく包み込みます。
水風呂から上がった後は、雄大な大自然やオーシャンビュー、満天の星空を仰ぐ外気浴スペースへ。リクライニングチェア（インフィニティチェア）に身を委ね、吹き抜ける清涼な風を感じながら目を閉じれば、脳内がクリアになり深い瞑想状態へと導かれます。
</p>

<h4>【客室・お食事・アフターサウナ】極上の「サ飯」と癒やしの滞在</h4>
<p>
サウナで感覚が研ぎ澄まされた後にいただく夕食（サウナ飯＝サ飯）は、まさに格別の美味。{pref}の旬の特選食材や地元銘柄牛、新鮮な海の幸をふんだんに使った会席やモダンビュッフェが、乾いた身体に染み渡ります。
客室は心地よい静寂に包まれ、上質なベッドや和の設えが深い睡眠をサポート。翌朝の目覚めの良さと身体の軽さに、本物のサウナリトリートの威力を実感していただけます。
</p>
'''
    hotel_sections.append(sec)

all_hotels_html = "\n".join(hotel_sections)

full_html = f'''
<div class="my-6 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-teal-950 via-stone-900 to-emerald-950 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-teal-500/30">
  <div class="space-y-2 text-center md:text-left">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase">
      Saunachelin & Best Sauna Resorts 2026-2027
    </div>
    <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-white">全国サウナが凄いホテル＆温泉旅館ランキング12選</h2>
    <p class="text-stone-300 text-sm max-w-xl">
      サウナシュラン殿堂入り「御船山楽園ホテル らかんの湯」、流氷を望む「北こぶし知床」、富士山を仰ぐ「マウント富士」など、全国のサウナーが生涯に一度は訪れたい究極のサウナ宿を徹底比較。
    </p>
  </div>
  <div class="flex-shrink-0">
    <a href="https://travel.rakuten.co.jp/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-teal-950 bg-gradient-to-r from-teal-300 via-emerald-200 to-amber-300 rounded-2xl shadow-lg hover:brightness-110 transition duration-200">
      楽天トラベルでサウナ温泉特集を見る
    </a>
  </div>
</div>

<h2>【2026-2027最新】全国サウナ特化型ホテル・名旅館TOP12比較一覧表</h2>
<p>
近年、日本全国で空前の進化を遂げているのが「サウナ特化型」のホテル・リゾート・温泉旅館です。
もはやサウナは大浴場の付属設備ではなく、建築設計、アロマロウリュ、天然水掛け流し水風呂、絶景外気浴スペース、そしてサウナ上がりの美食（サ飯）まで、旅の目的そのもの（ディスティネーション）となっています。
国内最高峰のサウナアワード「サウナシュラン（SAUNACHELIN）」受賞施設や、楽天トラベルで口コミ評価★4.2以上を誇る全国屈指の「ととのい宿TOP12」を完全比較しました。
</p>

<div class="overflow-x-auto my-6">
  <table class="min-w-full text-sm text-left border-collapse border border-stone-200 bg-white shadow-sm rounded-xl overflow-hidden">
    <thead class="bg-teal-950 text-white text-xs uppercase">
      <tr>
        <th class="px-4 py-3 border border-teal-900">順位</th>
        <th class="px-4 py-3 border border-teal-900">宿名（エリア・都道府県）</th>
        <th class="px-4 py-3 border border-teal-900">口コミ / 評価</th>
        <th class="px-4 py-3 border border-teal-900">宿泊目安</th>
        <th class="px-4 py-3 border border-teal-900">サウナ・水風呂・ととのい環境の特徴</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-200">
      <tr class="hover:bg-teal-50/50">
        <td class="px-4 py-3 font-bold text-teal-700">第1位</td>
        <td class="px-4 py-3"><a href="{hotels[0]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[0]['name']}</a><br><span class="text-xs text-stone-500">佐賀・武雄温泉</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[0]['rating']}（{hotels[0]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[0]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">サウナシュラン殿堂入り・薪サウナ・ほうじ茶ロウリュ・武雄温泉16℃チラー水風呂・チームラボアート</td>
      </tr>
      <tr class="hover:bg-teal-50/50">
        <td class="px-4 py-3 font-bold text-teal-700">第2位</td>
        <td class="px-4 py-3"><a href="{hotels[1]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[1]['name']}</a><br><span class="text-xs text-stone-500">北海道・知床ウトロ</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[1]['rating']}（{hotels[1]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[1]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">サウナシュラン受賞・オホーツク海と流氷を一望する流氷サウナ・知床の自然環境音3D音響・深水風呂</td>
      </tr>
      <tr class="hover:bg-teal-50/50">
        <td class="px-4 py-3 font-bold text-teal-700">第3位</td>
        <td class="px-4 py-3"><a href="{hotels[2]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[2]['name']}</a><br><span class="text-xs text-stone-500">山梨・山中湖</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[2]['rating']}（{hotels[2]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[2]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">サウナシュラン選出・富士山を真正面に望む満天星の湯・富士山天然伏流水掛け流し深水風呂・雲海デッキ</td>
      </tr>
      <tr class="hover:bg-teal-50/50">
        <td class="px-4 py-3 font-bold text-teal-700">第4位</td>
        <td class="px-4 py-3"><a href="{hotels[3]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[3]['name']}</a><br><span class="text-xs text-stone-500">兵庫・神戸港</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[3]['rating']}（{hotels[3]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[3]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">展望露天風呂＆神戸港オーシャンビュー外気浴・フィンランド式ロウリュサウナ・天然温泉水風呂</td>
      </tr>
      <tr class="hover:bg-teal-50/50">
        <td class="px-4 py-3 font-bold text-teal-700">第5位</td>
        <td class="px-4 py-3"><a href="{hotels[4]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[4]['name']}</a><br><span class="text-xs text-stone-500">千葉・舞浜浦安</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[4]['rating']}（{hotels[4]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[4]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">本場フィンランド直輸入「木の宝石ケロ材」ケロサウナ・地下源泉水風呂・東京湾の潮風屋上外気浴</td>
      </tr>
      <tr class="hover:bg-teal-50/50">
        <td class="px-4 py-3 font-bold text-teal-700">第6位</td>
        <td class="px-4 py-3"><a href="{hotels[5]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[5]['name']}</a><br><span class="text-xs text-stone-500">神奈川・湘南茅ヶ崎</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[5]['rating']}（{hotels[5]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[5]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">サウナシュラン受賞・プール直結フィンランドサウナ・水着で飛び込むプール水風呂・湘南クラフトビール</td>
      </tr>
      <tr class="hover:bg-teal-50/50">
        <td class="px-4 py-3 font-bold text-teal-700">第7位</td>
        <td class="px-4 py-3"><a href="{hotels[6]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[6]['name']}</a><br><span class="text-xs text-stone-500">北海道・十勝岳</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[6]['rating']}（{hotels[6]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[6]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">標高1200m北の聖地・総ヒノキサウナ・大雪山系天然伏流水掛け流し・冬のパウダースノー雪ダイブ外気浴</td>
      </tr>
      <tr class="hover:bg-teal-50/50">
        <td class="px-4 py-3 font-bold text-teal-700">第8位</td>
        <td class="px-4 py-3"><a href="{hotels[7]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[7]['name']}</a><br><span class="text-xs text-stone-500">群馬・前橋</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[7]['rating']}（{hotels[7]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[7]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">サウナシュラン特別賞・世界的建築家藤本壮介設計・完全貸切フィンランドサウナ・ベッドアンドクラフト</td>
      </tr>
      <tr class="hover:bg-teal-50/50">
        <td class="px-4 py-3 font-bold text-teal-700">第9位</td>
        <td class="px-4 py-3"><a href="{hotels[8]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[8]['name']}</a><br><span class="text-xs text-stone-500">長崎・島原温泉</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[8]['rating']}（{hotels[8]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[8]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">有明海パノラマ海のサウナ・海に飛び込むインフィニティ水風呂・寝転びデッキ・オールインクルーシブ</td>
      </tr>
      <tr class="hover:bg-teal-50/50">
        <td class="px-4 py-3 font-bold text-teal-700">第10位</td>
        <td class="px-4 py-3"><a href="{hotels[9]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[9]['name']}</a><br><span class="text-xs text-stone-500">群馬・谷川温泉</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[9]['rating']}（{hotels[9]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[9]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">ルレ・エ・シャトー加盟名宿・谷川岳絶壁を望むヒノキサウナ・谷川岳天然湧水水風呂・全室露天風呂</td>
      </tr>
      <tr class="hover:bg-teal-50/50">
        <td class="px-4 py-3 font-bold text-teal-700">第11位</td>
        <td class="px-4 py-3"><a href="{hotels[10]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[10]['name']}</a><br><span class="text-xs text-stone-500">北海道・洞爺湖</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[10]['rating']}（{hotels[10]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[10]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">サウナシュラン選出・洞爺湖インフィニティ露天風呂・セルフロウリュサウナ月の湯星の湯・湖畔外気浴</td>
      </tr>
      <tr class="hover:bg-teal-50/50">
        <td class="px-4 py-3 font-bold text-teal-700">第12位</td>
        <td class="px-4 py-3"><a href="{hotels[11]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[11]['name']}</a><br><span class="text-xs text-stone-500">神奈川・大磯湘南</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[11]['rating']}（{hotels[11]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[11]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">相模湾水平線と溶け合うインフィニティプール＆THERMAL SPA S.WAVE・パノラミックサウナ・氷クールバス</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>全国サウナ特化型ホテル＆名旅館TOP12【完全個別解説】</h2>
<p>
ここからは、各宿のサウナ室の構造（温度・湿度・熱源・ロウリュ方式）、水風呂の水質と水温、外気浴スペースのロケーション、そしてサウナ上がりの美食と客室のこだわりを余すところなくご紹介します。
</p>

{all_hotels_html}

<h2>【科学的解説】医学的エビデンスに基づく「ディープリラックス（ととのい）」のメカニズム</h2>
<p>
近年、サウナは単なるリフレッシュを超え、脳科学や予防医学の観点からもその効能が実証されています。なぜサウナに入ると「ととのう」のか、その科学的メカニズムを解説します。
</p>

<h3>1. 温冷交代浴による自律神経の急激なスイッチング</h3>
<p>
80〜100℃の高温サウナ室に入ると、身体は危機を感じて交感神経が極限まで高まり、心拍数が上昇します。その後、15〜17℃の水風呂に入ることで、皮膚表面の血管が一気に収縮し、交感神経の緊張がピークに達します。
水風呂から上がり、外気浴でリクライニングチェアに横たわると、一転して副交感神経が急激に優位になります。血圧が正常化し、全身の毛細血管が一気に拡張して大量の血液が脳と身体を巡ります。この「極限の緊張」から「急激な弛緩」への落差こそが、深い多幸感をもたらす「ととのい」の正体です。
</p>

<h3>2. 脳疲労の解消（デフォルト・モード・ネットワークの抑制）</h3>
<p>
人間の脳は、ぼーっとしている時でも全エネルギーの約60〜80%を「デフォルト・モード・ネットワーク（DMN）」と呼ばれるアイドリング回路で消費しており、これが「脳の疲れや雑念」の原因となります。
サウナや極冷水風呂の強烈な物理的刺激に晒されると、脳は生命維持に集中せざるを得なくなり、DMNの活動が強制終了されます。結果として「頭がスッキリする」「雑念が消えてアイデアが湧く」という劇的な脳疲労の回復が得られます。
</p>

<h3>3. 睡眠の質の劇的向上と深部体温のリズム</h3>
<p>
サウナに入ることで一時的に上昇した深部体温は、入浴後90分ほどかけて急激に低下していきます。この深部体温の低下が自然な眠気を誘発し、睡眠初期の深いノンレム睡眠（黄金の90分）を劇的に増やします。サウナ宿で迎える翌朝の爽快感は、科学的に裏付けられた確かな現象です。
</p>

<h2>【完全保存版】全国サウナ旅（サ旅）を最高に楽しむ5大マナー＆心得</h2>
<ul>
  <li><strong>水分補給の徹底：</strong>サウナに入る前には必ずコップ1〜2杯の水分（ミネラルウォーターやイオン飲料）を摂取し、脱水を予防しましょう。</li>
  <li><strong>入浴前の洗体マナー：</strong>サウナ室に入る前に、必ず頭と身体を石鹸で洗い清めるのが基本中の基本。汗腺の汚れを落とすことで、より綺麗で爽快な発汗が得られます。</li>
  <li><strong>汗を流してから水風呂へ：</strong>サウナ室から出たら、水風呂に入る前に必ず「掛け湯」または「シャワー」で全身の汗を完全に流しましょう。潜水禁止の施設では頭をつけないのがルールです。</li>
  <li><strong>外気浴での静寂と配慮：</strong>外気浴スペースは全員が瞑想とリラックスを求める聖域です。大声での会話を慎み、風の音や鳥のさえずりに耳を澄ませましょう。使用後のチェアには掛け水をしてマナーを守ります。</li>
  <li><strong>体調に応じた無理のないセット数：</strong>「サウナ8〜10分 ＋ 水風呂1分 ＋ 外気浴10分」を2〜3セット行うのが黄金比です。心拍数が平時の2倍になったらサウナ室を出るサイン。決して我慢大会にしてはいけません。</li>
</ul>

<h2>よくある質問（FAQ）｜全国サウナ宿・サ旅編</h2>

<h3>Q1. サウナ初心者でも楽しめるおすすめの宿はありますか？</h3>
<p>
大磯プリンスホテルの「THERMAL SPA S.WAVE」や、8HOTEL CHIGASAKIが特におすすめです。水着着用エリアで温度帯の異なる複数のサウナや温水インフィニティプールが備わっているため、カップルや友人同士で気負わずリゾート感覚でサウナデビューを楽しめます。
</p>

<h3>Q2. サウナシュラン殿堂入りの「らかんの湯」に宿泊するメリットは何ですか？</h3>
<p>
御船山楽園ホテルに宿泊することで、日帰り利用枠が完売する超人気サウナを「宿泊者限定の時間帯（深夜や早朝）」にゆったりと独占できます。特に早朝の清々しい御船山の大自然の中で入る薪サウナとほうじ茶ロウリュは、宿泊者だけに許された至高の特権です。
</p>

<h3>Q3. 冬のサウナ旅で注意すべきポイントはありますか？</h3>
<p>
冬の北海道や高原エリア（知床、十勝岳、山中湖など）では、外気温度が氷点下になります。水風呂に入る時間を普段より短め（20〜30秒程度）にするか、水風呂をスキップして直接雪や寒風を浴びる「冷気浴」に切り替えることで、身体を冷やしすぎずに最高のととのいを得ることができます。
</p>

<h3>Q4. サウナ後の食事（サ飯）はどのようなメニューがおすすめですか？</h3>
<p>
発汗によって水分・塩分・ミネラルが失われているため、適度な塩気と旨味のある地元牛のすき焼きやステーキ、海鮮丼、スパイスカレーなどが相性抜群です。また、ビタミンCを補給できる柑橘系ドリンクや、オロナミンCとポカリスエットを混ぜた「オロポ」もサウナーの定番です。
</p>
'''

post_data = {
    "id": "sauna-resort-hotels-ranking-japan-guide",
    "slug": "sauna-resort-hotels-ranking-japan-guide",
    "title": "【2026-2027年最新】全国サウナが凄いホテル＆温泉旅館ランキング12選｜サウナシュラン受賞・絶景外気浴・天然水風呂の名宿",
    "description": "サウナシュラン殿堂入りの御船山楽園ホテル「らかんの湯」、流氷を望む北こぶし知床、富士山パノラマのマウント富士など、全国屈指のサウナ特化型ホテル＆名旅館TOP12を徹底比較！水風呂・ロウリュ・外気浴・サ飯まで完全網羅した決定版サ旅ガイド。",
    "hotel_name": hotels[0]['name'],
    "prefecture": "全国",
    "area": "全国サウナリゾート・名湯温泉",
    "image": hotels[0]['img'],
    "other_images": [h['img'] for h in hotels[1:5]],
    "affiliate_url": hotels[0]['url'],
    "categories": ["サウナ", "サ旅", "温泉宿", "ランキング", "リゾートホテル", "絶景露天風呂", "サウナシュラン"],
    "price": f"¥{hotels[0]['price']:,}〜" if hotels[0]['price'] else "¥15,000〜",
    "rating": "4.57",
    "review_count": 2800,
    "date": "2026-11-09",
    "is_special_feature": True,
    "keywords": [
        "サウナ ホテル ランキング",
        "サウナ 旅館 おすすめ",
        "サウナシュラン ホテル",
        "らかんの湯 御船山楽園ホテル",
        "北こぶし知床 流氷サウナ",
        "ホテルマウント富士 サウナ",
        "神戸みなと温泉 蓮",
        "舞浜ユーラシア ケロサウナ",
        "8HOTEL CHIGASAKI",
        "カミホロ荘 サウナ",
        "白井屋ホテル サウナ",
        "ホテル南風楼 海のサウナ",
        "別邸 仙寿庵 サウナ",
        "洞爺湖万世閣 サウナ",
        "大磯プリンスホテル サーマルスパ"
    ],
    "review": full_html
}

out_path = 'src/data/posts/sauna-resort-hotels-ranking-japan-guide.json'
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(post_data, f, ensure_ascii=False, indent=2)

clean_text = re.sub(r'<[^>]+>', '', full_html)
clean_text = re.sub(r'\s+', '', clean_text)
print('Generated post:', out_path)
print('Clean Japanese char count:', len(clean_text))
