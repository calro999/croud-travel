const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const pages = [
  {
    slug: 'furusato-tax-three-generation-family-luxury-stay',
    title: '【3世代家族旅行×高額枠一括消化】親孝行＆孫と泊まる客室露天風呂・離れ宿完全ガイド',
    description: '年収1,000万円超のふるさと納税枠を有効活用！熱海・白浜・那須高原の客室露天風呂付き離れやコネクティングルーム宿を厳選。祖父母・親・子ども全員が笑顔になれる3世代プレミアム家族旅。',
    heroTag: 'ふるさと納税×3世代・高額枠一括活用',
    leadTitle: '寄付額20万〜50万円枠を一度で消化！家族全員の思い出になる至高の親孝行ステイへ',
    leadText: '高所得者層ほど直面する「年末に数十万円分のふるさと納税上限枠が余ってしまい、使い道に困る」という贅沢な悩み。細々とした返礼品を大量に頼むよりも、家族みんなで集まる「3世代親孝行旅行」の宿泊代金に一括充当するのが圧倒的に満足度の高い選択肢です。楽天ふるさと納税のトラベルクーポンなら、10万円の寄付で3万円、30万円の寄付なら9万円分の宿泊補助が手に入り、普段は手が届きにくい広々とした数寄屋造りの離れ客室や、客室専用露天風呂付きのスイートルームを気兼ねなく予約できます。おじいちゃん・おばあちゃんから小さなお孫さんまで、周囲に気兼ねなくゆったり寛げる熱海、白浜、那須高原の特選旅館をご紹介します。',
    points: [
      {
        title: 'ポイント①：20万〜50万円以上の高額寄付枠を一発でスマートに活用',
        desc: '年収1,200万円（夫婦・子2人）で約20万円、年収2,000万円なら約50万円以上になるふるさと納税の控除上限額。宿泊代金が高額になりがちな大人数（6〜8名程度）の3世代旅行なら、枠を余らせることなく一括で有意義に消化できます。'
      },
      {
        title: 'ポイント②：周囲に気兼ねしない「離れ・客室露天風呂」を迷わず選べる',
        desc: '小さな子どもが走ったり声を出したりしても安心な戸建ての「離れ」や、大浴場まで歩かずに部屋で名湯に浸かれる「客室露天風呂」。追加料金がかかるハイクラスな客室タイプも、ふるさと納税クーポン（30%割引）を充当すれば実質負担2,000円で驚くほどお得に泊まれます。'
      },
      {
        title: 'ポイント③：有効期限3年間だから「家族全員の日程合わせ」も安心',
        desc: '3世代旅行で一番の難関が「全員のスケジュール調整」。楽天トラベルクーポンは3年間有効なので、年末に寄付だけ先に済ませておき、ゴールデンウィークやお盆、敬老の日など、家族が揃いやすい時期をじっくり選んで予約できます。'
      }
    ],
    sections: [
      {
        key: 'atami_family_luxury',
        badge: '静岡県熱海市・首都圏直通の海辺温泉',
        title: '熱海市ふるさと納税で泊まる、相模湾の絶景と離れ客室露天風呂の名宿',
        intro: '東京駅から新幹線でわずか40〜50分という圧倒的な近さが魅力の熱海温泉。移動の負担が少ないため、高齢の祖父母や小さな子どもを連れた3世代旅行先として不動の人気を誇ります。熱海市のふるさと納税トラベルクーポンを使えば、相模湾の水平線や熱海海上花火大会を望む高台の離れ宿や、全室に源泉露天風呂を備えたラグジュアリー旅館にスマートに宿泊可能。金目鯛の煮付けや伊豆の地魚舟盛りを囲み、家族三世代で笑顔あふれる特別な夜を過ごせます。'
      },
      {
        key: 'shirahama_family_resort',
        badge: '和歌山県白浜町・南紀の海と温泉リゾート',
        title: '白浜町ふるさと納税で泊まる、白良浜の絶景とアドベンチャーワールド近接リゾート',
        intro: '真っ白な白良浜と日本三古湯の歴史を持つ南紀白浜。ジャイアントパンダやイルカショーで全国の子どもたちを魅了する「アドベンチャーワールド」があり、ファミリー旅行には最高のロケーションです。白浜町のふるさと納税クーポンを活用すれば、三世代がゆったり眠れるオーシャンビューの和洋室や、太平洋を一望するインフィニティ露天風呂を備えた名門リゾートホテルをお得にリザーブ。南紀の活アワビや熊野牛に舌鼓を打ちながら、孫の笑顔と祖父母の寛ぎを両立する旅が叶います。'
      },
      {
        key: 'nasu_family_connect',
        badge: '栃木県那須町・ロイヤルリゾートの高原休日',
        title: '那須町ふるさと納税で泊まる、那須連山を望むコネクティングルームと温泉ホテル',
        intro: '皇室の御用邸をはじめ、洗練された別荘地文化が息づく那須高原。サファリパークやりんどう湖ファミリー牧場など世代を超えて楽しめる観光スポットが点在しています。那須町のふるさと納税クーポンを使えば、2世代・3世代が隣り合って行き来できるコネクティングルームや、広大な敷地にコテージが点在する温泉リゾートホテルを賢く予約。爽やかな高原の風を感じながら天然温泉で温まり、栃木県産とちぎ和牛や新鮮な高原野菜をバイキングまたは個室会席で堪能できます。'
      }
    ],
    faq: [
      {
        q: '3世代旅行で複数部屋を予約する場合、クーポンはどう使えますか？',
        a: '楽天トラベルでは1予約につき利用できるふるさと納税クーポンは1枚です。複数部屋を予約する場合は、部屋ごとに予約を分けて寄付・クーポンをそれぞれ適用するか、三世代が同室で泊まれる「大型ファミリールーム」「スイートルーム」「一棟貸し離れ」プランを1つの予約として予約し、そこに高額クーポンを適用するのがスムーズです。'
      },
      {
        q: '寄付上限額が30万円の場合、いくらのクーポンがもらえますか？',
        a: '30万円の寄付で、寄付額の30％にあたる「9万円分」の楽天トラベルクーポンが付与されます。宿泊総額が20万円の高級離れ宿であれば、クーポン適用により手出し11万円で宿泊でき、税金控除（実質自己負担2,000円）を考慮すると圧倒的な節約効果が生まれます。'
      },
      {
        q: '子どもの食事やアレルギー対応は事前に相談できますか？',
        a: '多くの名門旅館やリゾートホテルでは、予約時の備考欄や電話連絡にてアレルギー対応やキッズ用特別プレートへの変更を受け付けています。三世代旅行であることを事前に伝えておくと、部屋の位置や食事処の個室配慮など細やかなホスピタリティを受けられることが多いです。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '草津・伊豆・有馬の極上名湯宿。少人数での贅沢ステイや夫婦のご褒美旅行向けふるさと納税活用術。'
      },
      {
        slug: 'furusato-tax-anniversary-luxury-suite-villa-stay',
        title: '【憧れの最高峰宿】記念日・プロポーズに選ぶ極上スイート＆ヴィラ',
        desc: '一生に一度の記念日を飾る最高峰ラグジュアリーステイ。箱根・京都・沖縄のプライベートヴィラ特集。'
      },
      {
        slug: 'furusato-tax-shinkansen-station-walk-hotspring-stay',
        title: '【車なし・雪道運転不要】新幹線駅直結＆駅徒歩圏内の名湯温泉旅館',
        desc: 'シニアの親御さんも安心！レンタカー不要で新幹線改札からすぐ歩いて行ける名湯宿のふるさと納税旅。'
      }
    ]
  },
  {
    slug: 'furusato-tax-ski-snowboard-slope-resort-stay',
    title: '【ゲレンデ直結×白銀リゾート】スキー・スノボ＆雪見露天風呂をふるさと納税でお得に楽しむ旅',
    description: 'リフト券や用具レンタル込みの高額スキーツアーも実質30％オフ！ニセコ・白馬・越後湯沢のスキー場直結ホテルと雪見温泉宿を厳選。パウダースノーと極上温泉をふるさと納税で賢く満喫する完全攻略法。',
    heroTag: 'ふるさと納税×スキー場直結・スノーリゾート',
    leadTitle: '高騰するリフト券・宿泊代金をカバー！世界水準のパウダースノーと雪見温泉へ',
    leadText: '冬のアウトドアの花形であるスキー＆スノーボード旅行。近年はインバウンド人気や物価高の影響で、リフト1日券やゲレンデサイドホテルの宿泊料金が高騰傾向にあります。家族連れやグループで数泊すると15万〜30万円を超えることも珍しくありません。そこで冬のスキーヤー・スノーボーダーに強くおすすめしたいのが、楽天ふるさと納税のトラベルクーポンです。自治体への寄付で獲得した30％宿泊補助クーポンを使えば、ブーツを履いたまま部屋を出てリフトに直行できる「ゲレンデ直結ホテル」や、滑走後の冷えた身体を芯から温める「雪見露天風呂自慢の温泉宿」にお得にステイできます。パウダースノーの聖地・ニセコ、北アルプスの絶景が広がる白馬、首都圏から新幹線で最速70分の越後湯沢など、白銀の世界へご案内します。',
    points: [
      {
        title: 'ポイント①：冬のスキー旅行総額をふるさと納税で一気に圧縮',
        desc: '宿泊費だけでなく、リフト券付きプランやスキー用具レンタル代が含まれたプランを選べば、旅行全体の費用に対して30％のクーポン割引が適用されます。浮いた予算で美味しいゲレ食や夜の地酒を贅沢に楽しめます。'
      },
      {
        title: 'ポイント②：滑り疲れたら即ベッド＆温泉！「ゲレンデ直結」の圧倒的快適さ',
        desc: '重い板やブーツを持ってシャトルバスを待つストレスから完全解放。ホテルのスキーロッカーからそのままコースへ滑り出し、疲れたら部屋に戻って休憩、夕方は雪見露天風呂へ直行できる夢のようなスノーライフが実現します。'
      },
      {
        title: 'ポイント③：万が一の雪不足でも「3年有効」だから別シーズン・別日程に振替可能',
        desc: '自然相手のスノースポーツでは暖冬や雪不足が心配ですが、ふるさと納税クーポンは3年間の有効期間があります。もし今シーズンに滑りに行けなくなっても、来年や再来年の冬にそのまま使えるため無駄になりません。'
      }
    ],
    sections: [
      {
        key: 'niseko_ski_resort',
        badge: '北海道倶知安町・世界が憧れるJAPOWの聖地',
        title: '倶知安町・ニセコ町ふるさと納税で泊まる、極上パウダースノー直結プレミアムホテル',
        intro: '「JAPOW（ジャパン・パウダー）」として世界中のスキーヤーから絶賛される北海道ニセコエリア。アンヌプリの裾野に広がる広大なゲレンデと、息を呑むほど軽いディープパウダーは世界屈指のクオリティです。倶知安町やニセコ町のふるさと納税トラベルクーポンを使えば、グラン・ヒラフや花園リゾート直結のラグジュアリーホテルをお得に予約可能。羊蹄山を望むインフィニティ温泉で筋肉をほぐし、北海道産食材を使った国際色豊かなディナーに酔いしれる世界水準のスノーステイが叶います。'
      },
      {
        key: 'hakuba_slope_hotel',
        badge: '長野県白馬村・北アルプスの名峰パノラマ',
        title: '白馬村ふるさと納税で泊まる、白馬八方尾根ゲレンデサイド温泉リゾート',
        intro: '長野冬季オリンピックの舞台となった白馬八方尾根をはじめ、個性豊かな10のスキー場が集まるスノーリゾート白馬村。標高差1,000mを超えるロングクルージングと、北アルプス白馬連峰の息を呑む大パノラマが滑り手を迎えます。白馬村のふるさと納税クーポンを活用すれば、ゲレンデまで徒歩0分のスキーイン・スキーアウトホテルや、日本屈指の強アルカリ性美肌温泉「白馬八方温泉」を引く山岳リゾートにスマートに滞在。信州牛や地元野菜を味わいながら冬の山岳美を堪能できます。'
      },
      {
        key: 'echigoyuzawa_ski_hotel',
        badge: '新潟県湯沢町・新幹線直結のスノーパラダイス',
        title: '湯沢町ふるさと納税で泊まる、越後湯沢駅周辺＆ファミリーゲレンデ直結温泉ホテル',
        intro: '東京駅から上越新幹線で最速70分という最高のアクセビリティを誇る新潟県湯沢町。湯沢高原、GALA湯沢、苗場、神立など初心者から上級者、ファミリーまで楽しめるスノーパークが密集しています。湯沢町のふるさと納税クーポンを使えば、駅直結型ホテルやゲレンデ併設の大規模温泉リゾートホテルをお得にリザーブ。滑った後は川端康成の「雪国」の舞台となった名湯・越後湯沢温泉の広い大浴場で寛ぎ、名物の魚沼産コシヒカリと新潟の地酒を心ゆくまで味わえます。'
      }
    ],
    faq: [
      {
        q: 'リフト券付き宿泊パックでもふるさと納税クーポンは適用されますか？',
        a: 'はい、楽天トラベル上で「リフト券付き」「レンタル付き」として販売されている宿泊プランであれば、総額に対してふるさと納税クーポンが適用されます。個別にリフト券を買うよりも大幅にお得になります。'
      },
      {
        q: 'スキー用具の事前配送や乾燥室の利用は可能ですか？',
        a: 'ゲレンデ直結ホテルの多くは、宅急便での事前荷物預かりサービスや、宿泊者専用のスキーロッカー・チューンナップルームを完備しています。手ぶらで新幹線に乗り、宿に到着したらすぐに滑り出すことができます。'
      },
      {
        q: '春スキーの時期（3月・4月）でもクーポンは使えますか？',
        a: 'もちろん利用可能です。ニセコや白馬、越後湯沢の標高の高いスキー場はゴールデンウィーク頃までロングラン営業を行っており、春の暖かな日差しの中で滑走する春スキー旅行にもクーポンをフル活用できます。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-pet-sauna-private-hotspring-stay',
        title: '【愛犬同伴＆プライベートサウナ】贅沢な休日をご褒美ステイ！',
        desc: 'スキーと合わせて楽しみたい白馬・裏磐梯の本格サウナ宿。大自然の外気浴で究極の「ととのい」体験。'
      },
      {
        slug: 'furusato-tax-shinkansen-station-walk-hotspring-stay',
        title: '【車なし・雪道運転不要】新幹線駅直結＆駅徒歩圏内の名湯温泉旅館',
        desc: '雪道の車の運転が不安な方に！新幹線直結の越後湯沢など、ノーマルタイヤでも行ける駅近名湯特集。'
      },
      {
        slug: 'furusato-tax-travel-after-booking-discount-guide',
        title: '【予約済みでも間に合う】「あとから割引」完全攻略ガイド',
        desc: 'ハイシーズンのスキー宿をすでに予約していても大丈夫！チェックイン前日までにクーポンを適用する方法。'
      }
    ]
  },
  {
    slug: 'furusato-tax-anniversary-luxury-suite-villa-stay',
    title: '【一度は泊まりたい憧れの最高峰宿】記念日・プロポーズに選ぶ極上スイート＆ヴィラふるさと納税ガイド',
    description: '一生の記憶に残る記念日・誕生日・プロポーズ旅。箱根・京都・沖縄の客室露天風呂スイートやプライベートプール付きヴィラを楽天ふるさと納税で賢く予約。1泊10万円超えの最高峰リゾート完全ガイド。',
    heroTag: 'ふるさと納税×最高峰スイート・ラグジュアリーヴィラ',
    leadTitle: '普段は躊躇する憧れのハイクラス宿へ。大切な人へ贈る一生モノの宿泊体験',
    leadText: 'パートナーの誕生日、結婚記念日、プロポーズ、あるいは人生の節目を祝う旅。「今回だけは絶対に妥協せず、日本最高峰の素晴らしい宿に泊まりたい」。そう思いながらも、1泊10万〜20万円を超える宿泊費に少し躊躇してしまう方に最適なのが、楽天ふるさと納税のトラベルクーポンです。寄付金額の30％相当が宿泊補助として還元されるため、例えば15万円の寄付で4.5万円、30万円の寄付なら9万円分の値引きが成立。浮いた予算をディナーのシャンパンやケーキ、サプライズ演出へ贅沢に回すことができます。箱根の杜に佇む名門スイート、古都・京都の静寂に抱かれるプライベートリゾート、沖縄・恩納村のエメラルドグリーンの海を独占するプール付きヴィラなど、心震える特別な宿をご紹介します。',
    points: [
      {
        title: 'ポイント①：1泊10万円超のプレミアム宿を「実質2,000円負担」でアップグレード',
        desc: '年収に応じた控除上限額の範囲内であれば、寄付総額から2,000円を除いた全額が税金控除されます。普段はなかなか踏み出せない最高グレードのスイートルームや一棟貸しヴィラが、現実的な選択肢として手の届く距離になります。'
      },
      {
        title: 'ポイント②：専任バトラーや客室インフィニティ風呂など「完全なプライベート空間」',
        desc: '記念日旅行で重視したいのは他人の目を気にせず二人きりで過ごせる静寂。客室専用の源泉かけ流し露天風呂やプライベートプール、お部屋食や個室ダイニングを備えた宿を厳選しているため、ロマンチックな非日常を満喫できます。'
      },
      {
        title: 'ポイント③：記念日のサプライズ対応やケーキ手配もスムーズ',
        desc: '一流のラグジュアリーホテルは記念日のホスピタリティに長けています。楽天トラベル予約後に宿のコンシェルジュと打ち合わせを行うことで、花束の手配やアニバーサリープレート、プロポーズの演出などきめ細やかなサポートを受けられます。'
      }
    ],
    sections: [
      {
        key: 'hakone_anniversary_luxury',
        badge: '神奈川県箱根町・森と名湯のラグジュアリー',
        title: '箱根町ふるさと納税で泊まる、強羅・仙石原の静寂に包まれる露天風呂付き極上スイート',
        intro: '都心からのアクセスが良く、四季折々の自然美と名湯が旅人を魅了する箱根。仙石原のススキ草原や強羅の深い森に囲まれたハイクラス旅館では、全室に自家源泉の客室露天風呂が備えられ、二人だけの静謐な時間が流れます。箱根町のふるさと納税トラベルクーポンを使えば、世界的デザイン賞を受賞したモダン建築旅館や、伝統の数寄屋建築を現代風に昇華させた最高峰スイートをお得に予約可能。厳選された旬の懐石料理と極上のワインに酔いしれる、生涯忘れられない記念日ステイが叶います。'
      },
      {
        key: 'kyoto_anniversary_villa',
        badge: '京都府京都市・古都千年の美意識と静寂',
        title: '京都市ふるさと納税で泊まる、嵐山の大堰川沿いに佇むラグジュアリー隠れ家旅館',
        intro: '平安貴族の別荘地として愛されてきた京都・嵐山。大堰川の翡翠色の水面を望み、風にそよぐ竹林の音を聞きながら過ごす時間は、まさに至高の贅沢です。京都市のふるさと納税クーポンを活用すれば、歴史ある名建築を改装した客室露天風呂付き旅館や、洗練されたラグジュアリーホテルをお得にリザーブ。朝霧に包まれる渡月橋の幻想的な風景や、板前が目の前で仕上げる繊細な京料理を堪能しながら、大切な人との絆を深く確かめ合う特別なひとときを過ごせます。'
      },
      {
        key: 'okinawa_pool_villa',
        badge: '沖縄県恩納村・エメラルドグリーンの楽園',
        title: '恩納村ふるさと納税で泊まる、東シナ海を望むプライベートプール付き絶景ヴィラ',
        intro: '沖縄本島屈指のビーチリゾートエリア・恩納村。海岸線に沿って美しいサンゴ礁の海が広がり、夕暮れ時には息を呑むようなサンセットが空と海を茜色に染め上げます。恩納村のふるさと納税クーポンを使えば、誰にも邪魔されない完全プライベートプールやジャグジーを備えた一棟貸しスイートヴィラをお得に予約可能。波の音をBGMにテラスでシャンパンを傾け、星空を見上げながら語り合う南国のロマンチックリゾートステイをご堪能ください。'
      }
    ],
    faq: [
      {
        q: '記念日のケーキや花束の手配はクーポンの割引対象になりますか？',
        a: '宿泊プランに「アニバーサリーケーキ付き」「シャンパン＆フラワー特典付き」として含まれているプランであれば、その代金も含めてふるさと納税クーポンの30％割引が適用されます。現地で追加注文するオプションは対象外となる場合があるため、特典込みプランの事前予約が最もお得です。'
      },
      {
        q: 'プロポーズの相談や演出サポートはしてもらえますか？',
        a: 'ハイクラス宿やラグジュアリーホテルでは、専任のコンシェルジュがプロポーズのタイミングや部屋のデコレーション、ディナー席の指定などを丁寧にサポートしてくれます。予約完了後に宿へ連絡し、想いを伝えておくのが成功の秘訣です。'
      },
      {
        q: '土日や連休などの特別期間でもクーポンは利用できますか？',
        a: 'はい、ふるさと納税クーポンはゴールデンウィークやお盆、シルバーウィーク、年末年始などの繁忙期でも除外日なく利用可能です（対象宿のプランが販売されている限り）。人気の日程は早く埋まりやすいため、早めの予約をおすすめします。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '草津・有馬・伊豆の老舗名湯宿。歴史と格式あるおもてなしで過ごす大人のご褒美旅行特集。'
      },
      {
        slug: 'furusato-tax-local-gourmet-inn-stay',
        title: '【舌鼓を打つ美食旅】高千穂牛・あなご・伊勢海老！ご当地グルメ宿特集',
        desc: '記念日ディナーに極上の料理を！産地ならではの最高級ブランド牛や伊勢海老を味わう美食ステイ。'
      },
      {
        slug: 'furusato-tax-travel-after-booking-discount-guide',
        title: '【予約済みでも間に合う】「あとから割引」完全攻略ガイド',
        desc: '記念日宿をすでに押さえていても安心！チェックイン前日までにクーポンをあとから適用する裏ワザ。'
      }
    ]
  },
  {
    slug: 'furusato-tax-shinkansen-station-walk-hotspring-stay',
    title: '【車なし・雪道運転不要】新幹線駅直結＆駅徒歩圏内の名湯温泉旅館ふるさと納税ガイド',
    description: 'レンタカー不要・冬の雪道運転が不安なシニアも安心！新幹線改札から徒歩すぐ、または無料送迎付きの越後湯沢・熱海・加賀温泉の名宿を厳選。手ぶらでスマートに行ける名湯ふるさと納税旅。',
    heroTag: 'ふるさと納税×車なし・駅近名湯旅館',
    leadTitle: '新幹線を降りたらそこは温泉街。運転ストレスゼロで極上の湯浴みと美酒を愉しむ旅',
    leadText: '「地方の名湯に泊まりたいけれど、慣れない土地でのレンタカー運転が苦手」「冬の温泉に行きたいけれど、凍結した雪道を運転するのが怖い」「免許を返納した親を温泉に連れて行ってあげたい」。そんな旅行者から絶大な支持を集めているのが、新幹線の駅から徒歩圏内、または駅前から無料送迎が直結している駅近名湯宿です。移動中の渋滞や運転のプレッシャーが一切なく、駅弁をつまみながら地酒を飲み、新幹線を降りたらすぐに旅館の温かいお出迎えを受けられます。さらに楽天ふるさと納税のトラベルクーポンを活用すれば、新幹線停車駅を擁する湯沢町、熱海市、加賀市などの名門温泉旅館に実質30％割引でステイ可能。手軽さと贅沢を両立したスマートな温泉旅をご紹介します。',
    points: [
      {
        title: 'ポイント①：雪道や渋滞の運転ストレスがゼロ！天候に左右されない安心感',
        desc: '冬の豪雪地帯でも、新幹線なら定時運行で安全にアクセス可能。チェーンの脱着やスリップ事故の心配がなく、シニア世代やペーパードライバーでも安心して名湯へ向かうことができます。'
      },
      {
        title: 'ポイント②：行きも帰りもお酒が飲める！地酒列車と駅近宿の極上ループ',
        desc: '車を運転しない最大の特権は、旅行中いつでも気兼ねなくお酒を楽しめること。往復の新幹線車内での晩酌から、宿での利き酒、駅ナカの日本酒利き酒ミュージアム巡りまで、お酒好きにはたまらない休日が叶います。'
      },
      {
        title: 'ポイント③：駅前・駅ナカのお土産街やグルメ散策がすべて徒歩完結',
        desc: '新幹線の主要駅周辺はご当地グルメやお土産処が最も充実しているエリア。チェックイン前やチェックアウト後に荷物を宿に預けたまま、駅前足湯や商店街、名物そば店などを身軽に散策できます。'
      }
    ],
    sections: [
      {
        key: 'yuzawa_walk_onsen',
        badge: '新潟県湯沢町・上越新幹線越後湯沢駅直結',
        title: '湯沢町ふるさと納税で泊まる、越後湯沢駅西口から徒歩すぐの老舗源泉かけ流し宿',
        intro: '東京駅から上越新幹線で最速約70分。改札を出て西口へ降り立つと、そこには風情ある越後湯沢の温泉街が広がります。文豪・川端康成が逗留して名作「雪国」を執筆した歴史ある温泉地で、駅から徒歩数分圏内に源泉かけ流しの大浴場を持つ老舗旅館が点在しています。湯沢町のふるさと納税クーポンを使えば、雪景色を眺める庭園露天風呂自慢の名宿をお得に予約可能。駅ナカの「ぽんしゅ館」で新潟全土の地酒をコイン式サーバーで試飲し、宿で魚沼産コシヒカリと越後牛を味わう至極の駅近ステイが叶います。'
      },
      {
        key: 'atami_walk_onsen',
        badge: '静岡県熱海市・東海道新幹線熱海駅徒歩圏内',
        title: '熱海市ふるさと納税で泊まる、熱海駅平和通り商店街を抜けてすぐの名湯宿',
        intro: '東京駅から東海道新幹線でわずか45分、名古屋からも約80分でアクセスできる熱海駅。駅前には活気あふれる「仲見世商店街」「平和通り商店街」が伸び、温泉まんじゅうや熱海プリン、磯揚げなどの食べ歩き天国が広がります。駅から徒歩5〜10分圏内には、相模湾の青い海を見下ろす露天風呂付き旅館や、良質な自家源泉を引く老舗旅館が多数。熱海市のふるさと納税クーポンを活用して、坂の街・熱海を歩きながら海の恵みと温泉情緒に包まれる快適な手ぶら旅を満喫しましょう。'
      },
      {
        key: 'kaga_shinkansen_onsen',
        badge: '石川県加賀市・北陸新幹線加賀温泉駅直結アクセス',
        title: '加賀市ふるさと納税で泊まる、加賀温泉駅から無料送迎ですぐの名湯・山代温泉と山中温泉',
        intro: '北陸新幹線の延伸開業により、東京からも関西・中京からも劇的にアクセスが向上した加賀温泉駅。駅前からは山代温泉・山中温泉・片山津温泉といった名湯宿への無料送迎バスが運行されており、新幹線を降りてから宿の玄関までシームレスに移動できます。加賀市のふるさと納税クーポンを使えば、北大路魯山人ゆかりの老舗旅館や、名勝・鶴仙渓の渓流露天風呂を誇る山宿にお得にステイ。九谷焼や山中漆器の器で供される加賀懐石と日本海の冬の蟹・のどぐろを味わう、文化薫る大人の贅沢旅へ出かけましょう。'
      }
    ],
    faq: [
      {
        q: '駅からの無料送迎バスは事前予約が必要ですか？',
        a: '多くの宿では新幹線の到着時刻に合わせた送迎バスを運行していますが、宿によって「完全事前予約制」の場合と「駅到着時に電話すれば随時迎えに来てくれる」場合があります。宿泊予約時に送迎の利用条件を確認しておくと安心です。'
      },
      {
        q: 'チェックイン前やチェックアウト後に荷物を預かってもらえますか？',
        a: '駅徒歩圏内の宿や送迎付きの宿のほぼ全てで、フロントでの荷物預かりに対応しています。また、駅の観光案内所と宿の間で荷物を配送してくれる「手荷物配送サービス（キャリーサービス）」を行っている温泉地も多く、手ぶらで身軽に観光できます。'
      },
      {
        q: '新幹線のチケット代もふるさと納税クーポンに含まれますか？',
        a: '楽天トラベルクーポンは「宿泊代金（または新幹線＋宿泊のJR楽パック）」に対して適用されます。楽天トラベルの「JR楽パック」対象プランであれば、新幹線チケット代と宿泊代金のセット総額に対してクーポンが適用できるため、交通費も含めて大幅に節約できます。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-ski-snowboard-slope-resort-stay',
        title: '【ゲレンデ直結×白銀リゾート】スキー・スノボ＆雪見露天風呂',
        desc: '新幹線で行ける越後湯沢や白馬！重い板を持たずにゲレンデへ直行できるスキーステイ特集。'
      },
      {
        slug: 'furusato-tax-three-generation-family-luxury-stay',
        title: '【3世代家族旅行×高額枠一括消化】親孝行＆孫と泊まる客室露天風呂',
        desc: '車を使わずに移動できる熱海など、シニアの親御さんや孫と一緒に安心して行ける3世代温泉旅。'
      },
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '草津・有馬・伊豆の名湯宿。自己負担実質2,000円で泊まるふるさと納税の基礎知識と攻略法。'
      }
    ]
  }
];

function generatePage(page) {
  const dir = path.join(__dirname, 'src/app', page.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const pointsCode = page.points.map((pt, idx) => `
          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                ${idx + 1}
              </span>
              <span>${pt.title}</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              ${pt.desc}
            </p>
          </div>
  `).join('\n');

  const sectionsCode = page.sections.map(sec => {
    return `
        {/* セクション: ${sec.key} */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              ${sec.badge}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            ${sec.title}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ${sec.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['${sec.key}']?.hotels && secData['${sec.key}'].hotels.length > 0 ? (
              secData['${sec.key}'].hotels.map((hotel: any) => (
                <div
                  key={hotel.hotelNo}
                  className="group bg-stone-50/70 border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-stone-200">
                    <img
                      src={hotel.hotelImageUrl || hotel.roomImageUrl || '/images/no-image.jpg'}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/85 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full shadow">
                      ★ {hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : '好評'}
                    </div>
                    {hotel.reviewCount > 0 && (
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-stone-800 text-[11px] font-medium px-2.5 py-0.5 rounded shadow">
                        クチコミ {hotel.reviewCount}件
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg md:text-xl mb-2 line-clamp-2 font-serif group-hover:text-amber-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '家族旅行や特別な休日にぴったりの、ふるさと納税トラベルクーポン対象宿です。'}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between gap-2">
                      <div className="text-xs text-stone-500">
                        {hotel.hotelMinCharge ? (
                          <div>
                            <span className="text-[11px] text-stone-400 block">参考宿泊目安</span>
                            <span className="text-stone-900 text-base font-bold">{hotel.hotelMinCharge.toLocaleString()}</span>円〜
                          </div>
                        ) : (
                          <span className="text-stone-500 font-medium">プラン一覧で確認</span>
                        )}
                      </div>
                      <a
                        href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition shadow-sm hover:shadow"
                      >
                        ふるさと納税対象プラン
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-8 bg-stone-100 rounded-2xl text-center text-stone-600 text-sm">
                現在、該当自治体のおすすめ宿泊施設データを更新中です。
              </div>
            )}
          </div>
        </section>`;
  }).join('\n');

  const faqsCode = page.faq.map(f => {
    return `
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>${f.q}</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                ${f.a}
              </p>
            </div>`;
  }).join('\n');

  const relatedLinksCode = page.relatedLinks.map(rel => `
            <Link
              href="/${rel.slug}"
              className="group block bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  あわせて読みたい
                </span>
                <span className="text-xs text-stone-400 group-hover:text-amber-700 transition">記事を読む →</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base md:text-lg mb-2 group-hover:text-amber-800 transition font-serif">
                ${rel.title}
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                ${rel.desc}
              </p>
            </Link>
  `).join('\n');

  const content = `import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '${page.title} | クラウドトラベル',
  description: '${page.description}',
  openGraph: {
    title: '${page.title} | クラウドトラベル',
    description: '${page.description}',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['${page.slug}'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">${page.heroTag}</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ${page.heroTag}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            ${page.title}
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
            ${page.leadText}
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当を宿泊クーポン還元</span>
            <span>✓ クーポンの有効期限はゆとりの3年間</span>
            <span>✓ 予約済みでも「あとから割引」対応</span>
          </div>
        </header>

        {/* 制度解説・攻略ポイントセクション */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="mb-8">
            <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
              STRATEGY GUIDE
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mt-3 font-serif">
              ${page.leadTitle}
            </h2>
          </div>
          <div className="space-y-6">
            ${pointsCode}
          </div>
        </section>

        {/* メインコンテンツセクション */}
        ${sectionsCode}

        {/* よくある質問 FAQ */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-2">
            <span className="w-2.5 h-7 bg-amber-700 rounded-full inline-block"></span>
            よくある質問・ふるさと納税トラベルクーポンの疑問を解消
          </h2>
          <div className="space-y-4">
            ${faqsCode}
          </div>
        </section>

        {/* 相互回遊リンク */}
        <section className="bg-stone-200/80 rounded-3xl p-6 md:p-10 border border-stone-300">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-stone-600 bg-white/70 px-3 py-1 rounded-full uppercase tracking-wider">
              RELATED GUIDES
            </span>
            <h3 className="text-2xl font-bold text-stone-900 mt-2 mb-3 font-serif">
              ふるさと納税トラベルをもっと使いこなす
            </h3>
            <p className="text-stone-600 text-sm">
              お得な「あとから割引」の裏ワザから、ご当地グルメ特化宿、愛犬同伴・個室サウナ宿まで、旅のスタイルに合わせた完全ガイドをチェック！
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${relatedLinksCode}
          </div>
        </section>
      </div>
    </main>
  );
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf8');
  console.log(`Generated page: ${page.slug}/page.tsx`);
}

for (const p of pages) {
  generatePage(p);
}
console.log('All 4 round 2 furusato pages generated successfully!');
