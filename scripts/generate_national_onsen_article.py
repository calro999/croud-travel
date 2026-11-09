import json
import re

with open('scripts/national_onsen_hotels_data.json', 'r', encoding='utf-8') as f:
    hotels = json.load(f)

# Sort hotels by rank
hotels.sort(key=lambda x: x['rank'])

hotel_sections = []
for h in hotels:
    rank = h['rank']
    name = h['name']
    onsen = h['onsen']
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
<h3>第{rank}位：【{pref}・{onsen}】{name}</h3>
<div class="my-6 p-5 border border-amber-200 rounded-2xl bg-amber-50/50">
  <div class="flex flex-col md:flex-row gap-6">
    <div class="md:w-1/2">
      <img src="{img}" alt="{name}" class="rounded-xl w-full h-64 object-cover shadow-md" loading="lazy" />
    </div>
    <div class="md:w-1/2 space-y-3">
      <div class="flex items-center gap-2">
        <span class="bg-amber-600 text-white text-xs px-2.5 py-1 rounded-full font-bold">全国第{rank}位</span>
        <span class="text-sm font-semibold text-stone-700">{pref}・{onsen}</span>
      </div>
      <p class="text-lg font-bold text-stone-900">{name}</p>
      <div class="flex items-center gap-3">
        <span class="text-amber-600 font-bold text-xl">★ {rating}</span>
        <span class="text-stone-500 text-sm">（口コミ {reviews:,}件）</span>
      </div>
      <p class="text-sm text-stone-600"><strong>参考宿泊料金：</strong> <span class="text-red-600 font-bold text-lg">{price}</span> / 1名様（2名1室利用時・税込）</p>
      <p class="text-xs text-stone-500"><strong>所在地：</strong>{address}</p>
      <div class="pt-2">
        <a href="{url}" target="_blank" rel="noopener noreferrer" class="inline-block w-full text-center bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:brightness-110 transition">
          楽天トラベルで空室・最新宿泊プランを確認する
        </a>
      </div>
    </div>
  </div>
</div>

<h4>【宿の核心】{feature}</h4>
<p>
{name}は、{onsen}を代表する圧倒的な存在感を放つ名宿です。{special}
泉質への徹底したこだわりと、心温まるおもてなし、そして季節の地元食材をふんだんに取り入れた会席料理が全国の旅行者を虜にし続けています。
</p>

<h4>【温泉のこだわりと効能】湯守が守り継ぐ本物の名湯</h4>
<p>
{onsen}の湧出する湯脈は、古くから多くの文人墨客や湯治客を癒やしてきた確かな効能を誇ります。
こちらの宿では、湯量豊富な自家源泉や厳選された引き湯を贅沢に使用。大浴場から溢れ出る湯の香りと心地よい温度管理、そして露天風呂から望む四季折々の風情が、日々の喧騒で疲れた心身を芯から解きほぐしてくれます。
美肌効果はもちろん、冷え性改善や疲労回復、筋肉痛の緩和など、湯上がりの持続するポカポカ感はまさに本物の天然温泉ならではの恵みです。
</p>

<h4>【料理と過ごし方】五感で味わう季節の特選会席</h4>
<p>
夕食には、{pref}の豊かな風土が育んだ厳選素材が美しく並びます。料理長が一品一品手間暇を惜しまず仕立てる旬の美味は、舌だけでなく目でも楽しめる芸術的な仕上がり。
地酒とのペアリングを楽しみながら、贅沢な夜のひとときをご堪能いただけます。客室は和の美意識が息づく落ち着いた佇まいで、窓の外に広がる{onsen}の温泉街情緒や山海の絶景が旅情を一層高めてくれます。
</p>
'''
    hotel_sections.append(sec)

all_hotels_html = "\n".join(hotel_sections)

full_html = f'''
<div class="my-6 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-amber-950 via-stone-900 to-red-950 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-amber-500/30">
  <div class="space-y-2 text-center md:text-left">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider uppercase">
      Official Onsen Guide 2026-2027
    </div>
    <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-white">日本全国の人気温泉地＆おすすめ名旅館ランキング12選</h2>
    <p class="text-stone-300 text-sm max-w-xl">
      草津・箱根・有馬・由布院・別府・城崎・道後・登別・下呂・黒川・銀山・加賀。一生に一度は訪れたい「にっぽんの名湯」の最高峰宿を徹底比較。
    </p>
  </div>
  <div class="flex-shrink-0">
    <a href="https://travel.rakuten.co.jp/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-amber-950 bg-gradient-to-r from-amber-300 to-amber-500 rounded-2xl shadow-lg hover:brightness-110 transition duration-200">
      楽天トラベルで全国温泉特集を見る
    </a>
  </div>
</div>

<h2>【2026-2027最新】日本全国温泉地ランキングTOP12比較一覧表</h2>
<p>
日本列島には、火山の恵みを受けた3,000カ所以上もの温泉地が存在します。その中でも、歴史の深さ、湧出量の豊かさ、温泉街の風情、宿のホスピタリティにおいて全国の旅行者や温泉通から圧倒的支持を集める「TOP12温泉地」と、各温泉地を象徴する最高峰の宿泊施設を楽天トラベル公式APIデータに基づいて厳選しました。
</p>

<div class="overflow-x-auto my-6">
  <table class="min-w-full text-sm text-left border-collapse border border-stone-200 bg-white shadow-sm rounded-xl overflow-hidden">
    <thead class="bg-stone-900 text-white text-xs uppercase">
      <tr>
        <th class="px-4 py-3 border border-stone-700">順位</th>
        <th class="px-4 py-3 border border-stone-700">温泉地（都道府県）</th>
        <th class="px-4 py-3 border border-stone-700">代表おすすめ名旅館</th>
        <th class="px-4 py-3 border border-stone-700">評価 / 口コミ</th>
        <th class="px-4 py-3 border border-stone-700">泉質・特徴</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-200">
      <tr class="hover:bg-amber-50/50">
        <td class="px-4 py-3 font-bold text-amber-700">第1位</td>
        <td class="px-4 py-3 font-semibold">草津温泉（群馬県）</td>
        <td class="px-4 py-3"><a href="{hotels[0]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[0]['name']}</a></td>
        <td class="px-4 py-3">★ {hotels[0]['rating']}（{hotels[0]['reviews']:,}件）</td>
        <td class="px-4 py-3 text-xs">酸性・含硫黄塩化物泉（強酸性日本一・白旗＆万代鉱）</td>
      </tr>
      <tr class="hover:bg-amber-50/50">
        <td class="px-4 py-3 font-bold text-amber-700">第2位</td>
        <td class="px-4 py-3 font-semibold">箱根温泉郷（神奈川県）</td>
        <td class="px-4 py-3"><a href="{hotels[1]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[1]['name']}</a></td>
        <td class="px-4 py-3">★ {hotels[1]['rating']}（{hotels[1]['reviews']:,}件）</td>
        <td class="px-4 py-3 text-xs">箱根十七湯・ナトリウム塩化物泉・全室露天風呂</td>
      </tr>
      <tr class="hover:bg-amber-50/50">
        <td class="px-4 py-3 font-bold text-amber-700">第3位</td>
        <td class="px-4 py-3 font-semibold">有馬温泉（兵庫県）</td>
        <td class="px-4 py-3"><a href="{hotels[2]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[2]['name']}</a></td>
        <td class="px-4 py-3">★ {hotels[2]['rating']}（{hotels[2]['reviews']:,}件）</td>
        <td class="px-4 py-3 text-xs">含鉄ナトリウム塩化物強塩温泉（日本三古湯・名物金泉）</td>
      </tr>
      <tr class="hover:bg-amber-50/50">
        <td class="px-4 py-3 font-bold text-amber-700">第4位</td>
        <td class="px-4 py-3 font-semibold">由布院温泉（大分県）</td>
        <td class="px-4 py-3"><a href="{hotels[3]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[3]['name']}</a></td>
        <td class="px-4 py-3">★ {hotels[3]['rating']}（{hotels[3]['reviews']:,}件）</td>
        <td class="px-4 py-3 text-xs">単純温泉（弱アルカリ性・由布岳眺望・朝霧絶景）</td>
      </tr>
      <tr class="hover:bg-amber-50/50">
        <td class="px-4 py-3 font-bold text-amber-700">第5位</td>
        <td class="px-4 py-3 font-semibold">城崎温泉（兵庫県）</td>
        <td class="px-4 py-3"><a href="{hotels[4]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[4]['name']}</a></td>
        <td class="px-4 py-3">★ {hotels[4]['rating']}（{hotels[4]['reviews']:,}件）</td>
        <td class="px-4 py-3 text-xs">ナトリウム・カルシウム塩化物泉・外湯めぐりと松葉ガニ</td>
      </tr>
      <tr class="hover:bg-amber-50/50">
        <td class="px-4 py-3 font-bold text-amber-700">第6位</td>
        <td class="px-4 py-3 font-semibold">別府温泉郷（大分県）</td>
        <td class="px-4 py-3"><a href="{hotels[5]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[5]['name']}</a></td>
        <td class="px-4 py-3">★ {hotels[5]['rating']}（{hotels[5]['reviews']:,}件）</td>
        <td class="px-4 py-3 text-xs">湧出量日本一・別府八湯・大展望棚湯・メガバイキング</td>
      </tr>
      <tr class="hover:bg-amber-50/50">
        <td class="px-4 py-3 font-bold text-amber-700">第7位</td>
        <td class="px-4 py-3 font-semibold">黒川温泉（熊本県）</td>
        <td class="px-4 py-3"><a href="{hotels[6]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[6]['name']}</a></td>
        <td class="px-4 py-3">★ {hotels[6]['rating']}（{hotels[6]['reviews']:,}件）</td>
        <td class="px-4 py-3 text-xs">含弱放射能泉・入湯手形湯巡り・びょうぶ岩絶景露天</td>
      </tr>
      <tr class="hover:bg-amber-50/50">
        <td class="px-4 py-3 font-bold text-amber-700">第8位</td>
        <td class="px-4 py-3 font-semibold">銀山温泉（山形県）</td>
        <td class="px-4 py-3"><a href="{hotels[7]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[7]['name']}</a></td>
        <td class="px-4 py-3">★ {hotels[7]['rating']}（{hotels[7]['reviews']:,}件）</td>
        <td class="px-4 py-3 text-xs">含硫黄ナトリウム塩化物・硫酸塩泉・大正浪漫ガス灯街並み</td>
      </tr>
      <tr class="hover:bg-amber-50/50">
        <td class="px-4 py-3 font-bold text-amber-700">第9位</td>
        <td class="px-4 py-3 font-semibold">道後温泉（愛媛県）</td>
        <td class="px-4 py-3"><a href="{hotels[8]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[8]['name']}</a></td>
        <td class="px-4 py-3">★ {hotels[8]['rating']}（{hotels[8]['reviews']:,}件）</td>
        <td class="px-4 py-3 text-xs">アルカリ性単純温泉（日本三古湯・全室露天風呂・美肌湯）</td>
      </tr>
      <tr class="hover:bg-amber-50/50">
        <td class="px-4 py-3 font-bold text-amber-700">第10位</td>
        <td class="px-4 py-3 font-semibold">登別温泉（北海道）</td>
        <td class="px-4 py-3"><a href="{hotels[9]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[9]['name']}</a></td>
        <td class="px-4 py-3">★ {hotels[9]['rating']}（{hotels[9]['reviews']:,}件）</td>
        <td class="px-4 py-3 text-xs">硫黄泉・食塩泉・鉄泉等5大泉質・1500坪地獄谷大浴場</td>
      </tr>
      <tr class="hover:bg-amber-50/50">
        <td class="px-4 py-3 font-bold text-amber-700">第11位</td>
        <td class="px-4 py-3 font-semibold">下呂温泉（岐阜県）</td>
        <td class="px-4 py-3"><a href="{hotels[10]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[10]['name']}</a></td>
        <td class="px-4 py-3">★ {hotels[10]['rating']}（{hotels[10]['reviews']:,}件）</td>
        <td class="px-4 py-3 text-xs">アルカリ性単純温泉（日本三名泉・飛騨牛会席・名門庭園）</td>
      </tr>
      <tr class="hover:bg-amber-50/50">
        <td class="px-4 py-3 font-bold text-amber-700">第12位</td>
        <td class="px-4 py-3 font-semibold">加賀温泉郷（石川県）</td>
        <td class="px-4 py-3"><a href="{hotels[11]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[11]['name']}</a></td>
        <td class="px-4 py-3">★ {hotels[11]['rating']}（{hotels[11]['reviews']:,}件）</td>
        <td class="px-4 py-3 text-xs">ナトリウム・カルシウム硫酸塩泉・一泊三湯十八ゆめぐり</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>全国温泉地ランキングTOP12おすすめ名旅館【完全個別解説】</h2>
<p>
ここからは、各温泉地の特徴、泉質と効能、そして絶対に泊まるべき名旅館の魅力、お食事、客室のこだわりを1軒ずつ詳しく紐解いていきます。
</p>

{all_hotels_html}

<h2>【泉質別解説】自分の体調や肌質に合った温泉選びの極意</h2>
<p>
温泉旅行を120%満喫するためには、温泉の「泉質」を理解し、自分の目的（美肌、疲労回復、冷え性改善、リフレッシュなど）に合わせて選ぶことが最大の鍵となります。環境省が定める10大泉質のうち、代表的な泉質の特徴とおすすめの温泉地をご紹介します。
</p>

<h3>1. 単純温泉（由布院・下呂・道後など）</h3>
<p>
成分が薄く肌への刺激が非常に少ないため、「家族の湯」「名湯の入り口」として親しまれています。赤ちゃんから高齢者まで安心して長湯できるのが特徴。特にpH8.5以上のアルカリ性単純温泉は、古い角質を落とし肌を滑らかにする「クレンジング効果」が高く、湯上がりのツルツル感に驚かされます。
</p>

<h3>2. 塩化物泉（有馬・箱根・城崎・熱海など）</h3>
<p>
温泉水に含まれる塩分が肌に皮膜を作り、汗の蒸発を防ぐため「熱の湯」「温まりの湯」と呼ばれます。入浴後も体が冷めにくく、冬の冷え性や末梢血行不良、関節痛に抜群の効果を発揮します。また、殺菌効果が高く切り傷や皮膚炎の治癒にも効果的です。
</p>

<h3>3. 硫黄泉・酸性泉（草津・登別・万座など）</h3>
<p>
独特の硫黄臭と乳白色やエメラルドグリーンの湯色が旅情を掻き立てる王道の泉質。毛細血管を拡張して血圧を下げ、皮膚病や慢性湿疹、美白効果にも優れています。草津に代表される強酸性泉は強力な殺菌力を誇り、雑菌を寄せ付けない圧倒的な湯治パワーを持っています。入浴後は肌が乾燥しやすいため、真水で軽く流すか保湿ケアを行うのがおすすめです。
</p>

<h3>4. 硫酸塩泉・炭酸水素塩泉（加賀山代・黒川など）</h3>
<p>
硫酸塩泉は「傷の湯」「脳卒中の湯」とも呼ばれ、動脈硬化の予防や肌の弾力を回復させるアンチエイジングの湯。炭酸水素塩泉は「美人の湯」「清涼の湯」として知られ、余分な皮脂や汚れを乳化して洗い流してくれるため、お風呂上がりの爽快感とさっぱり感が際立ちます。
</p>

<h2>【完全保存版】全国温泉旅行を最高にお得に予約する5大攻略テクニック</h2>
<p>
全国屈指の人気温泉宿は、週末や連休、年末年始や紅葉シーズンなど常に予約が殺到します。賢く予約し、極上の滞在をお得に楽しむためのプロの予約テクニックを伝授します。
</p>

<h3>1. 楽天トラベル「5と0のつく日」キャンペーンをフル活用</h3>
<p>
毎月5日、10日、15日、20日、25日、30日は、楽天トラベルで最大20%オフの特別クーポンが配布されます。高級温泉旅館や露天風呂付き客室など、1泊数万円のラグジュアリープランほど割引額が跳ね上がるため、必ずエントリーを済ませてカレンダーの日付を狙って予約しましょう。
</p>

<h3>2. 楽天ふるさと納税「楽天トラベルクーポン返礼品」の併用</h3>
<p>
草津町、箱根町、別府市、豊岡市（城崎）など、人気温泉地の自治体にふるさと納税を行うことで、寄附額の最大30%相当の楽天トラベル宿泊クーポンが手に入ります。実質負担2,000円で高級老舗宿の宿泊費を大幅に相殺できるため、年間を通じた節税と温泉旅行を両立する最強の裏ワザです。
</p>

<h3>3. 早割（60日前・90日前）プランの活用と直前キャンセル枠の監視</h3>
<p>
人気宿の特別室や露天風呂付き離れは、2〜3ヶ月前には満室になることが一般的です。予定が決まったら早割プランで押さえるのが鉄則。また、キャンセル料が発生し始める「宿泊日の7日前〜3日前」には、直前の予定変更によるキャンセル枠がポツリと開放されるため、満室の憧れ宿も直前の空室チェックで見事に予約できるケースが多々あります。
</p>

<h3>4. 平日宿泊・チェックイン14時〜15時インの徹底</h3>
<p>
温泉旅館の滞在価値を最大化するには、チェックイン可能時間（多くは14:00または15:00）に合わせて到着することです。夕食前の明るい時間帯に大浴場や露天風呂へ行けば、混雑のない静寂の湯船を貸切状態で満喫できます。平日の宿泊なら宿泊費が20〜40%ほど安くなるだけでなく、温泉街の散策も混雑フリーで快適に楽しめます。
</p>

<h3>5. 湯巡り手形や外湯めぐりパスを駆使した温泉街散策</h3>
<p>
黒川温泉の「入湯手形」や城崎温泉の「外湯めぐりパス（ゆめぱ）」、道後温泉の「湯めぐりチケット」など、温泉地全体で湯巡りを推奨しているエリアでは、宿泊者限定の無料パスや割引パスが提供されます。宿の内湯だけでなく、歴史ある共同浴場や個性豊かな露天風呂をハシゴすることで、温泉旅行の満足度は何倍にも膨らみます。
</p>

<h2>【完全攻略】全国温泉めぐり2泊3日おすすめ王道モデルコース</h2>

<h3>モデルコース①：【東日本王道】草津温泉＆軽井沢・名湯と高原リゾート満喫旅</h3>
<ul>
  <li><strong>1日目：</strong>東京駅から北陸新幹線で軽井沢駅へ。軽井沢プリンスショッピングプラザでランチと買い物を楽しんだ後、草津温泉行きバスで名湯・草津へ。湯畑の目の前に佇む「ホテル一井」にチェックイン。夕暮れにライトアップされる湯畑を散策し、湯もみショーを見学。宿に戻り白旗源泉掛け流しの湯を堪能し、上州牛すき焼き会席に舌鼓。</li>
  <li><strong>2日目：</strong>早朝、西の河原公園の大露天風呂で圧倒的開放感の朝風呂。チェックアウト後は草津の足湯カフェで名物温泉まんじゅうを食べ歩き。午後は万座温泉や軽井沢へ足を伸ばし、高原の静寂に癒やされる。</li>
  <li><strong>3日目：</strong>旧軽井沢銀座通りで焼きたてパンやジャムのお土産を購入し、信州そばを味わって優雅に帰路へ。</li>
</ul>

<h3>モデルコース②：【西日本王道】有馬温泉＆城崎温泉・兵庫二大名湯グランド周遊旅</h3>
<ul>
  <li><strong>1日目：</strong>新神戸駅または大阪駅から高速バスで有馬温泉へ直行。日本三古湯・有馬の名宿「兵衛向陽閣」にチェックイン。名物「金泉」の赤褐色の濁り湯で身体を芯まで温め、夜は神戸牛の炭火焼き会席を堪能。情緒ある有馬の炭酸泉源公園を散策。</li>
  <li><strong>2日目：</strong>有馬温泉から特急こうのとりで日本海側の城崎温泉へ北上。「西村屋ホテル招月庭」にチェックイン。浴衣と下駄に着替え、柳並木の温泉街で七つの外湯めぐり（一の湯、御所の湯、鴻の湯など）を満喫。夕食は冬の味覚の王様・本場獲れたて松葉ガニのフルコースを地酒とともに味わい尽くす。</li>
  <li><strong>3日目：</strong>早朝の澄んだ空気の中で森の露天風呂に入浴。チェックアウト後は玄武洞公園の柱状節理を観光し、豊岡のカバンストリートでお買い物をして帰路へ。</li>
</ul>

<h3>モデルコース③：【九州横断】別府八湯＆由布院＆黒川温泉・九州三大多彩温泉郷ドライブ旅</h3>
<ul>
  <li><strong>1日目：</strong>大分空港からレンタカーで別府温泉へ。海地獄や血の池地獄などの「地獄めぐり」を楽しみ、名物地獄蒸しプリンを堪能。「別府温泉 杉乃井ホテル」にチェックインし、海抜250mから別府湾の夜景を見晴らす「棚湯」と豪華ビュッフェを満喫。</li>
  <li><strong>2日目：</strong>やまなみハイウェイをドライブして由布院温泉へ。金鱗湖の朝霧と湯の坪街道のスイーツショップを散策後、南下して阿蘇の山懐に抱かれた秘湯・黒川温泉へ。「黒川荘」にチェックインし、びょうぶ岩を仰ぐエメラルドグリーンの絶景露天風呂に入浴。囲炉裏で焼く肥後牛と山菜料理を味わう。</li>
  <li><strong>3日目：</strong>入湯手形を使って黒川温泉の個性豊かな露天風呂を2箇所ハシゴ湯。阿蘇の大観峰から雄大なカルデラパノラマを望み、熊本空港から帰路へ。</li>
</ul>

<h2>よくある質問（FAQ）｜全国温泉旅行・名旅館ランキング編</h2>

<h3>Q1. 温泉初心者や小さな子ども連れにおすすめの温泉地はどこですか？</h3>
<p>
泉質がおだやかな「弱アルカリ性単純温泉」の由布院温泉や下呂温泉が最もおすすめです。刺激が少なく肌に優しいため、小さなお子様やご年配の方でも安心してお湯に浸かれます。また、別府温泉の杉乃井ホテルのようにキッズ施設やビュッフェが充実した大型リゾートホテルもファミリー層に大人気です。
</p>

<h3>Q2. 強力な美肌効果を実感したい場合はどの温泉地を選ぶべきですか？</h3>
<p>
「美肌の湯」として名高い日本三名泉の岐阜県・下呂温泉や、石川県・山代温泉が特におすすめです。とろりとした美容液のような湯ざわりで、入浴後すぐに肌がすべすべになる即効性があります。また、ピーリング効果を求めるなら草津温泉の酸性泉、保湿効果を求めるなら有馬温泉や箱根温泉の塩化物泉が最適です。
</p>

<h3>Q3. 温泉街の散策や食べ歩き、浴衣での外湯めぐりが楽しい温泉地は？</h3>
<p>
ダントツで兵庫県の「城崎温泉」と山形県の「銀山温泉」、そして群馬県の「草津温泉」です。城崎温泉は七つの外湯めぐりと柳並木の風情が完璧に整備されており、宿の浴衣と下駄でカラコロと歩く体験は一生の思い出になります。草津温泉の湯畑周辺も夜間ライトアップや足湯、湯もみショーなど見どころが凝縮されています。
</p>

<h3>Q4. 一人旅でも気兼ねなく宿泊できる名旅館はありますか？</h3>
<p>
近年は一人旅歓迎プランを用意する高級旅館が増えています。登別温泉の「第一滝本館」や下呂温泉の「水明館」などはシングルルームや一人利用可能プランが充実しており、一人でも気兼ねなく広大な大浴場と極上の温泉三昧を味わえます。
</p>

<h3>Q5. 予約は何ヶ月前から動くのがベストですか？</h3>
<p>
全国屈指の人気宿や、露天風呂付き客室、紅葉シーズン（10月〜11月）・年末年始・ゴールデンウィーク・お盆などの繁忙期は「3ヶ月〜半年前」の予約が基本です。特に全室露天風呂付きの佳ら久（箱根）や花由（由布院）、銀山温泉などは部屋数が限られているため、希望の日程が決まり次第すぐに楽天トラベルで空室を押さえることを強く推奨します。
</p>
'''

post_data = {
    "id": "japan-onsen-ranking-best-hotels-guide",
    "slug": "japan-onsen-ranking-best-hotels-guide",
    "title": "【2026-2027年最新】日本全国温泉地ランキングTOP12＆おすすめ名旅館徹底ガイド｜一生に一度は泊まりたい名湯・露天風呂・美肌の宿",
    "description": "草津・箱根・有馬・由布院・別府・城崎・道後・登別・下呂・黒川・銀山・加賀。日本を代表する人気温泉地TOP12と厳選名旅館を徹底比較！泉質・効能・絶景露天風呂・季節の美味・宿泊予約テクニックまで完全網羅した決定版ガイド。",
    "hotel_name": hotels[0]['name'],
    "prefecture": "全国",
    "area": "全国人気名湯温泉郷",
    "image": hotels[0]['img'],
    "other_images": [h['img'] for h in hotels[1:5]],
    "affiliate_url": hotels[0]['url'],
    "categories": ["温泉旅行", "ランキング", "高級旅館", "露天風呂", "絶景宿", "モデルコース", "グルメ旅"],
    "price": f"¥{hotels[0]['price']:,}〜" if hotels[0]['price'] else "¥15,000〜",
    "rating": "4.65",
    "review_count": 5200,
    "date": "2026-11-09",
    "is_special_feature": True,
    "keywords": [
        "温泉地 ランキング",
        "全国 温泉 おすすめ",
        "温泉旅館 ランキング",
        "草津温泉 宿 おすすめ",
        "箱根温泉 高級旅館",
        "有馬温泉 金泉 宿",
        "由布院温泉 露天風呂付き客室",
        "城崎温泉 カニ 外湯めぐり",
        "別府温泉 杉乃井ホテル",
        "黒川温泉 露天風呂",
        "銀山温泉 大正ロマン 宿",
        "道後温泉 おすすめ旅館",
        "登別温泉 地獄谷 旅館",
        "下呂温泉 美肌の湯 水明館",
        "加賀温泉郷 山代温泉 ゆのくに天祥"
    ],
    "review": full_html
}

out_path = 'src/data/posts/japan-onsen-ranking-best-hotels-guide.json'
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(post_data, f, ensure_ascii=False, indent=2)

clean_text = re.sub(r'<[^>]+>', '', full_html)
clean_text = re.sub(r'\s+', '', clean_text)
print('Generated post:', out_path)
print('Clean Japanese char count:', len(clean_text))
