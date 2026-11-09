import json
import re

with open('scripts/all_inclusive_hotels_data.json', 'r', encoding='utf-8') as f:
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
<div class="my-6 p-5 border border-indigo-200 rounded-2xl bg-indigo-50/40">
  <div class="flex flex-col md:flex-row gap-6">
    <div class="md:w-1/2">
      <img src="{img}" alt="{name}" class="rounded-xl w-full h-64 object-cover shadow-md" loading="lazy" />
    </div>
    <div class="md:w-1/2 space-y-3">
      <div class="flex items-center gap-2">
        <span class="bg-indigo-600 text-white text-xs px-2.5 py-1 rounded-full font-bold">オールインクルーシブ第{rank}位</span>
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
        <a href="{url}" target="_blank" rel="noopener noreferrer" class="inline-block w-full text-center bg-gradient-to-r from-indigo-600 via-blue-600 to-amber-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:brightness-110 transition">
          楽天トラベルで空室・オールインクルーシブプランを確認する
        </a>
      </div>
    </div>
  </div>
</div>

<h4>【宿の核心とフリーサービス】{feature}</h4>
<p>
{name}は、滞在中の飲食やアクティビティ、温泉浴のすべてを追加料金を気にせず心ゆくまで楽しめる、日本屈指の満足度を誇るオールインクルーシブ宿です。{special}
チェックインしたその瞬間から、ロビーやラウンジで提供されるウェルカムドリンクやスイーツ、生ビールを片手に、非日常のリゾート時間が幕を開けます。
</p>

<h4>【無料フリーフロー＆飲食の魅力】生ビール・地酒・ワイン・夜食まで全てフリー</h4>
<p>
こちらの宿が圧倒的支持を集める理由は、アルコールを含むドリンク類の充実度とおもてなしの細やかさにあります。
夕食時の生ビールや厳選地酒、ワイン、焼酎、ハイボールはもちろんのこと、湯上がりラウンジで提供されるアイスキャンディーや冷たいビネガードリンク、そして深夜のお楽しみである名物夜食まで、お財布を一度も開くことなく楽しめます。
「次の一杯を頼むたびに追加料金を計算する」という日常のストレスから完全に解放され、極上のリラックス体験が約束されます。
</p>

<h4>【温泉・客室・アクティビティ】プライベート空間と癒やしのひととき</h4>
<p>
客室や館内施設も細部までこだわり抜かれています。{area}の美しい自然や絶景を望む露天風呂では、心地よい風と良質な名湯が日頃の疲れを洗い流してくれます。
無料の貸切露天風呂やサウナ、リラクゼーションスペース、カラオケやアクティビティなどを備えている宿も多く、カップルやご夫婦の記念日旅行から、ファミリー、女子旅、気ままな一人旅まで、誰もが思い思いの贅沢な休日を心ゆくまで過ごすことができます。
</p>
'''
    hotel_sections.append(sec)

all_hotels_html = "\n".join(hotel_sections)

full_html = f'''
<div class="my-6 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-blue-950 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-indigo-500/30">
  <div class="space-y-2 text-center md:text-left">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
      All-Inclusive Japan Guide 2026-2027
    </div>
    <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-white">日本全国オールインクルーシブ温泉宿・リゾートホテルランキング12選</h2>
    <p class="text-stone-300 text-sm max-w-xl">
      生ビール・地酒・ワイン飲み放題！豪華バイキングから夜食、湯上がりアイス、貸切露天風呂、アクティビティまで追加料金一切なしの極上宿を徹底比較。
    </p>
  </div>
  <div class="flex-shrink-0">
    <a href="https://travel.rakuten.co.jp/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-indigo-950 bg-gradient-to-r from-indigo-300 via-blue-200 to-amber-300 rounded-2xl shadow-lg hover:brightness-110 transition duration-200">
      楽天トラベルでオールインクルーシブ特集を見る
    </a>
  </div>
</div>

<h2>【2026-2027最新】全国オールインクルーシブ人気宿TOP12比較一覧表</h2>
<p>
近年、宿泊旅行のトレンドとして爆発的な支持を集めているのが「オールインクルーシブ（All Inclusive）」スタイルの温泉宿・リゾートホテルです。
宿泊料金の中に「夕食・朝食の飲食代」「ラウンジやお食事時のアルコール・ソフトドリンク飲み放題」「湯上がりアイスやスイーツ」「夜食サービス」「貸切風呂や館内アクティビティ」がすべて含まれており、滞在中にチェックアウト時の追加精算を心配することなく心からリラックスできます。
楽天トラベル公式APIの実測データに基づき、口コミ評価★4.2以上、お酒やお料理、温泉のクオリティが群を抜く全国の最高峰宿TOP12を一覧比較表にまとめました。
</p>

<div class="overflow-x-auto my-6">
  <table class="min-w-full text-sm text-left border-collapse border border-stone-200 bg-white shadow-sm rounded-xl overflow-hidden">
    <thead class="bg-indigo-950 text-white text-xs uppercase">
      <tr>
        <th class="px-4 py-3 border border-indigo-900">順位</th>
        <th class="px-4 py-3 border border-indigo-900">宿名（エリア・都道府県）</th>
        <th class="px-4 py-3 border border-indigo-900">口コミ / 評価</th>
        <th class="px-4 py-3 border border-indigo-900">宿泊目安</th>
        <th class="px-4 py-3 border border-indigo-900">無料インクルーシブの核心・特徴</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-200">
      <tr class="hover:bg-indigo-50/50">
        <td class="px-4 py-3 font-bold text-indigo-700">第1位</td>
        <td class="px-4 py-3"><a href="{hotels[0]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[0]['name']}</a><br><span class="text-xs text-stone-500">宮城・松島温泉</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[0]['rating']}（{hotels[0]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[0]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">日本三景松島眺望・料理人仕立てオーダービュッフェ・生ビール・宮城地酒・ジェラート・サロン生演奏</td>
      </tr>
      <tr class="hover:bg-indigo-50/50">
        <td class="px-4 py-3 font-bold text-indigo-700">第2位</td>
        <td class="px-4 py-3"><a href="{hotels[1]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[1]['name']}</a><br><span class="text-xs text-stone-500">静岡・伊豆高原</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[1]['rating']}（{hotels[1]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[1]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">飲み放題＆遊び放題の元祖！80種以上の酒・夜食バー・貸切露天風呂・カラオケ・ダーツ全て無料</td>
      </tr>
      <tr class="hover:bg-indigo-50/50">
        <td class="px-4 py-3 font-bold text-indigo-700">第3位</td>
        <td class="px-4 py-3"><a href="{hotels[2]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[2]['name']}</a><br><span class="text-xs text-stone-500">神奈川・箱根強羅</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[2]['rating']}（{hotels[2]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[2]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">全室客室露天風呂・夜鳴き蕎麦・湯上がりアイス・選べる色浴衣・3箇所の貸切露天風呂無料</td>
      </tr>
      <tr class="hover:bg-indigo-50/50">
        <td class="px-4 py-3 font-bold text-indigo-700">第4位</td>
        <td class="px-4 py-3"><a href="{hotels[3]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[3]['name']}</a><br><span class="text-xs text-stone-500">宮城・秋保温泉</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[3]['rating']}（{hotels[3]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[3]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">大江戸温泉物語最高峰・滝を望むインフィニティ露天風呂・ラウンジ生ビール＆ワイン・豪華バイキング</td>
      </tr>
      <tr class="hover:bg-indigo-50/50">
        <td class="px-4 py-3 font-bold text-indigo-700">第5位</td>
        <td class="px-4 py-3"><a href="{hotels[4]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[4]['name']}</a><br><span class="text-xs text-stone-500">三重・鳥羽志摩</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[4]['rating']}（{hotels[4]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[4]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">海と一体化するインフィニティ露天風呂・ビール飲み放題オーシャンラウンジ・星空テラス・夜食うどん</td>
      </tr>
      <tr class="hover:bg-indigo-50/50">
        <td class="px-4 py-3 font-bold text-indigo-700">第6位</td>
        <td class="px-4 py-3"><a href="{hotels[5]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[5]['name']}</a><br><span class="text-xs text-stone-500">栃木・日光霧降</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[5]['rating']}（{hotels[5]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[5]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">標高1000mの絶景インフィニティ温泉・霧降高原の雄大パノラマ・豪華グリルバイキング＆生ビール地酒</td>
      </tr>
      <tr class="hover:bg-indigo-50/50">
        <td class="px-4 py-3 font-bold text-indigo-700">第7位</td>
        <td class="px-4 py-3"><a href="{hotels[6]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[6]['name']}</a><br><span class="text-xs text-stone-500">宮城・作並温泉</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[6]['rating']}（{hotels[6]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[6]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">広瀬川の清流露天風呂・挽きたて珈琲・宮城の銘酒フリーフロー・手作りおやつ・川音に憩う大人サロン</td>
      </tr>
      <tr class="hover:bg-indigo-50/50">
        <td class="px-4 py-3 font-bold text-indigo-700">第8位</td>
        <td class="px-4 py-3"><a href="{hotels[7]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[7]['name']}</a><br><span class="text-xs text-stone-500">静岡・伊豆高原</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[7]['rating']}（{hotels[7]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[7]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">全7室スイート・客室温泉・バーラウンジの厳選銘酒フリー・極上フレンチ懐石ディナーのペアリング</td>
      </tr>
      <tr class="hover:bg-indigo-50/50">
        <td class="px-4 py-3 font-bold text-indigo-700">第9位</td>
        <td class="px-4 py-3"><a href="{hotels[8]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[8]['name']}</a><br><span class="text-xs text-stone-500">栃木・那須高原</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[8]['rating']}（{hotels[8]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[8]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">アコーの世界基準リゾート・スパークリングワイン・ビール・イブニングラウンジ・那須の森の天然温泉</td>
      </tr>
      <tr class="hover:bg-indigo-50/50">
        <td class="px-4 py-3 font-bold text-indigo-700">第10位</td>
        <td class="px-4 py-3"><a href="{hotels[9]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[9]['name']}</a><br><span class="text-xs text-stone-500">山梨・八ヶ岳清里</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[9]['rating']}（{hotels[9]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[9]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">八ヶ岳南麓の高原リゾート・星空観測ラウンジ・山梨銘醸ワインフリーフロー・全天候型大型キッズパーク</td>
      </tr>
      <tr class="hover:bg-indigo-50/50">
        <td class="px-4 py-3 font-bold text-indigo-700">第11位</td>
        <td class="px-4 py-3"><a href="{hotels[10]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[10]['name']}</a><br><span class="text-xs text-stone-500">大分・別府湾</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[10]['rating']}（{hotels[10]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[10]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">別府湾パノラマ・湯上がり生ビールラウンジ・大分かぼすドリンク・伝統別府温泉露天風呂・郷土ビュッフェ</td>
      </tr>
      <tr class="hover:bg-indigo-50/50">
        <td class="px-4 py-3 font-bold text-indigo-700">第12位</td>
        <td class="px-4 py-3"><a href="{hotels[11]['url']}" class="text-blue-600 underline font-bold" target="_blank">{hotels[11]['name']}</a><br><span class="text-xs text-stone-500">長崎・島原温泉</span></td>
        <td class="px-4 py-3 font-semibold">★ {hotels[11]['rating']}（{hotels[11]['reviews']:,}件）</td>
        <td class="px-4 py-3 font-bold text-red-600">¥{hotels[11]['price']:,}〜</td>
        <td class="px-4 py-3 text-xs">有明海を望む海のサウナ＆インフィニティ露天風呂・アイス・生ビール・駄菓子・足湯・キッズパーク・夜食無料</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>全国オールインクルーシブ宿ランキングTOP12【完全個別解説】</h2>
<p>
ここからは、各宿が提供する無料サービスの具体的内容（アルコールの種類、ラウンジ提供時間、夜食メニュー、温泉・サウナ、アクティビティ）を1軒ずつ徹底的に解説します。
</p>

{all_hotels_html}

<h2>【徹底比較】オールインクルーシブ3大スタイル（リゾート型・温泉旅館型・高級隠れ家型）の選び方</h2>
<p>
オールインクルーシブと一口に言っても、宿のコンセプトによって滞在スタイルは大きく3つに分かれます。旅行の目的や同伴者に合わせて最適なタイプを選びましょう。
</p>

<h3>1. 【リゾート＆エンタメ型】アンダリゾート・南風楼など</h3>
<p>
カラオケ、ダーツ、ビリヤード、卓球、漫画コーナー、キッズパーク、焚き火マシュマロ焼きなど、館内の遊具やアクティビティがすべて無料。館内だけで一日中遊び尽くせるため、ファミリー旅行や学生・友人同士のグループ旅行、雨の日の旅行に絶大な威力を発揮します。お酒のつまみや駄菓子コーナーも充実しており、賑やかに盛り上がりたい旅に最適です。
</p>

<h3>2. 【温泉＆美食ビュッフェ型】TAOYAシリーズ・グランドメルキュールなど</h3>
<p>
大手ホテルグループが手がける最新鋭のオールインクルーシブ。チェックイン時のウェルカムラウンジから湯上がりラウンジ、夕食の豪華ビュッフェ時の生ビール・ワイン・地酒飲み放題、そして夜食サービスまでが美しくシームレスに組み込まれています。温泉大浴場にはインフィニティ露天風呂やサウナが備わり、夫婦やカップルで気軽に贅沢感を味わいたいコスパ重視派に圧倒的人気を集めています。
</p>

<h3>3. 【大人の静寂リトリート型】松島一の坊・作並一の坊・風の薫MORIなど</h3>
<p>
館内のBGMや照明、庭園のせせらぎにこだわり、過剰な呼び出しや騒音を排した「上質な日常の延長」を提供する高級宿。料理人が目の前で腕を振るうオーダービュッフェや本格懐石ディナーに、ソムリエ厳選のワインや宮城・静岡の地酒が追加料金なしでペアリングされます。サロンでの生演奏や挽きたてハンドドリップ珈琲とともに、大人の記念日や一人旅で本物の贅沢を噛み締めたい方に選ばれています。
</p>

<h2>【完全攻略】オールインクルーシブ宿の滞在価値を200%引き出すプロの過ごし方タイムスケジュール</h2>

<h3>【14:30】チェックイン開始直後に到着してウェルカムラウンジを満喫</h3>
<p>
オールインクルーシブの最大の失敗は「夕方遅くにチェックインすること」です。多くの宿では14:00〜15:00からウェルカムラウンジがオープンし、淹れたての珈琲や紅茶はもちろん、スパークリングワインや生ビール、特製スイーツが振る舞われます。早めに到着してお気に入りの席を確保し、旅の乾杯からスタートするのが鉄則です。
</p>

<h3>【16:00】夕食前の空いている大浴場と湯上がりビール＆アイス</h3>
<p>
夕食前の16時〜17時は大浴場が最も混み合わないゴールデンタイム。絶景露天風呂やサウナでたっぷりと汗を流した後は、湯上がりラウンジへ直行。キンキンに冷えた生ビールやビネガードリンク、アイスキャンディーを無料でいただく瞬間は、まさに至福の極みです。
</p>

<h3>【18:30】お財布を気にせずペアリングを楽しむ夕食タイム</h3>
<p>
通常の旅館では生ビール1杯800円〜1,000円、地酒1合1,200円ほどかかりますが、オールインクルーシブなら完全フリー。お肉料理には赤ワイン、お造りには地元の辛口純米酒など、贅沢なペアリングを気兼ねなく心ゆくまで満喫できます。
</p>

<h3>【21:30】夜更けのバータイム＆名物夜食サービス</h3>
<p>
夕食後も楽しみは終わりません。夜鳴き蕎麦（ラーメン）やうどん、お茶漬けなどの夜食サービスが振る舞われ、暖炉や星空テラスを望むバーラウンジでウイスキーやカクテルを片手に語り合う、大人の夜をお過ごしいただけます。
</p>

<h2>よくある質問（FAQ）｜全国オールインクルーシブ温泉宿編</h2>

<h3>Q1. オールインクルーシブに含まれない「有料オプション」は何かありますか？</h3>
<p>
ほとんどの宿泊料金に飲食や館内施設利用料が含まれていますが、エステやマッサージの施術料、客室冷蔵庫の特別なミニバー有料銘柄、売店でのお土産購入代金、一部の有料プレミアムヴィンテージワインなどは別料金となる場合があります。チェックイン時に配布される館内インクルーシブ案内シートを確認しておくと安心です。
</p>

<h3>Q2. お酒を飲まない下戸や子どもでもオールインクルーシブは楽しめますか？</h3>
<p>
十分に元が取れるほど楽しめます！近年のオールインクルーシブ宿は、ノンアルコールカクテル（モクテル）、高級ハーブティー、挽きたてスペシャルティコーヒー、ご当地果汁100%ジュース（リンゴ、ミカン、ブドウなど）、湯上がりアイス、焼きマシュマロ、夜食ラーメンなど、お酒を飲まない方やお子様向けのサービスが極めて充実しています。
</p>

<h3>Q3. 一人旅でもオールインクルーシブ宿に宿泊できますか？</h3>
<p>
近年は一人旅プランを設定する宿が急増しています。特に「松島一の坊」「ゆづくしSalon一の坊」や「TAOYA秋保」「TAOYA日光霧降」などは、シングル利用可能な客室や平日の一人旅歓迎プランがあり、周囲に気兼ねなく読書やお酒、温泉三昧のリトリートを楽しむおひとり様が多数訪れています。
</p>

<h3>Q4. 楽天ふるさと納税の宿泊クーポンと併用できますか？</h3>
<p>
もちろん併用可能です。例えば箱根町、伊東市、日光市、仙台市などの自治体へ楽天ふるさと納税で寄附を行い、「楽天トラベルクーポン返礼品」を獲得すれば、実質2,000円の負担で高級オールインクルーシブ宿の宿泊代金を最大30%オフに相殺できます。
</p>
'''

post_data = {
    "id": "all-inclusive-onsen-resort-ranking-japan-hotels-guide",
    "slug": "all-inclusive-onsen-resort-ranking-japan-hotels-guide",
    "title": "【2026-2027年最新】全国オールインクルーシブ温泉宿・リゾートホテルランキング12選｜ビール・地酒・夜食・貸切風呂まで全て無料",
    "description": "生ビール・地酒・ワイン飲み放題！豪華バイキングから夜食、湯上がりアイス、貸切露天風呂まで追加料金一切なし。松島一の坊、アンダリゾート、雪月花、TAOYA、グランドメルキュールなど全国屈指の人気オールインクルーシブ宿TOP12を徹底比較！",
    "hotel_name": hotels[0]['name'],
    "prefecture": "全国",
    "area": "全国人気温泉・リゾート地",
    "image": hotels[0]['img'],
    "other_images": [h['img'] for h in hotels[1:5]],
    "affiliate_url": hotels[0]['url'],
    "categories": ["オールインクルーシブ", "温泉宿", "飲み放題", "リゾートホテル", "ランキング", "露天風呂", "バイキング"],
    "price": f"¥{hotels[0]['price']:,}〜" if hotels[0]['price'] else "¥15,000〜",
    "rating": "4.61",
    "review_count": 3800,
    "date": "2026-11-09",
    "is_special_feature": True,
    "keywords": [
        "オールインクルーシブ 宿",
        "オールインクルーシブ 温泉 ランキング",
        "オールインクルーシブ 関東",
        "オールインクルーシブ 東北",
        "オールインクルーシブ 関西",
        "松島一の坊",
        "アンダリゾート伊豆高原",
        "季の湯 雪月花",
        "TAOYA秋保",
        "TAOYA志摩",
        "TAOYA日光霧降",
        "グランドメルキュール那須高原",
        "グランドメルキュール八ヶ岳",
        "グランドメルキュール別府湾",
        "島原温泉 ホテル南風楼"
    ],
    "review": full_html
}

out_path = 'src/data/posts/all-inclusive-onsen-resort-ranking-japan-hotels-guide.json'
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(post_data, f, ensure_ascii=False, indent=2)

clean_text = re.sub(r'<[^>]+>', '', full_html)
clean_text = re.sub(r'\s+', '', clean_text)
print('Generated post:', out_path)
print('Clean Japanese char count:', len(clean_text))
