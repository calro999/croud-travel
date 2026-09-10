const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const articles = [
  {
    slug: 'furusato-tax-kinugawa-onsen-valley-luxury-stay',
    title: '【鬼怒川温泉×ふるさと納税】渓谷美と大露天風呂！バイキングの最高峰「あさや」＆高級名旅館ステイ完全ガイド｜あさや・鬼怒川金谷ホテル・鬼怒川プラザホテル',
    desc: '鬼怒川渓谷の壮大な自然と名湯を楽天ふるさと納税でお得に満喫！空中庭園露天風呂と和洋中100種豪華バイキングで不動の人気を誇る「あさや」、ジョン・カナヤの美学息づく最高級リゾート「鬼怒川金谷ホテル」、離れ貸切露天風呂が魅力の「鬼怒川プラザホテル」を徹底比較。日光市クーポン活用術も解説。',
    keywords: '鬼怒川温泉 ふるさと納税,あさや ふるさと納税,鬼怒川金谷ホテル 楽天トラベル,鬼怒川温泉 クーポン 宿泊,日光市 ふるさと納税 旅行',
    targetCity: '栃木県日光市',
    leadTitle: 'ダイナミックな渓谷美と名湯の癒し、バイキングの殿堂——鬼怒川温泉で叶える至高のふるさと納税トリップ',
    leadP1: '鬼怒川の清流が刻んだ深い渓谷美とともに、江戸時代から続く歴史を誇る関東屈指の大型温泉郷・鬼怒川温泉。かつては日光詣での諸大名や僧侶のみに許された格式高い湯であり、肌触りの優しいアルカリ性単純温泉は、長旅の疲れを芯から癒してくれます。渓谷沿いに立ち並ぶ旅館のテラスや露天風呂からは、四季折々の新緑や紅葉、冬の静寂な渓谷パノラマを一望できます。',
    leadP2: '特に注目を集めるのが、楽天トラベルアワード常連の超人気宿「あさや」。吹き抜けのロビーや最上階の空中庭園露天風呂、そしてオープンキッチンで出来立てを提供する100種バイキングは全国屈指のクオリティを誇ります。さらにラグジュアリーな別荘体験を約束する「鬼怒川金谷ホテル」など、旅の目的に合わせた多彩な名宿が揃います。日光市へのふるさと納税を活用すれば、寄付額の30%相当が宿泊クーポンとして即座に還元され、家族旅行やご褒美旅行を驚くほどお得に楽しめます。',
    hotelsKey: 'furusato-tax-kinugawa-onsen-valley-luxury-stay',
    hotelItems: [
      {
        key: 'kinugawa_asaya',
        tagline: '創業百三十年の伝統を誇る名門！最上階の空中庭園露天風呂と和洋中100種が並ぶ豪華ディナーバイキング',
        detailTitle: '鬼怒川温泉 あさや —— 圧倒的な吹き抜け空間と至高のエンターテインメント。満足度No.1の温泉リゾート',
        features: [
          { title: '鬼怒川で最も高い場所に位置する「空中庭園露天風呂」', desc: '秀峰館の屋上に設けられた空中庭園露天風呂「昇龍の湯」。昼は鬼怒川の山並みと青空、夜は満天の星空を眺めながら、湯船に浸かって浮遊感を味わえる究極のパノラマ湯浴みです。' },
          { title: '目の前で焼き上げるステーキ＆揚げたて天ぷらバイキング', desc: '石窯で焼き上げる本格ピッツァ、国産牛ステーキ、新鮮な刺身、蟹、職人が握る寿司、季節のデザートまで100種以上が揃う豪華ビュッフェ。世代を問わず絶賛される食の饗宴です。' },
          { title: 'きぬの宿にふさわしい華やかな吹き抜けロビー', desc: 'パイプオルガンの音色が響くゴールドのきらびやかな吹き抜けロビー。温泉街の情緒とリゾートの華やかさが見事に融合した空間で、非日常の優雅な休日を満喫できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.63点、レビュー5500件超えの怪物的人気宿。「バイキングの品数・味ともに今まで泊まったホテルで最高」「屋上の露天風呂からの景色が最高だった」など、リピーターが後を絶ちません。'
      },
      {
        key: 'kinugawa_kanaya',
        tagline: '日本最古のリゾートホテルの伝統を受け継ぐ渓谷の別荘！全室リバーフロントのテラスと美食「和敬洋讃」',
        detailTitle: '鬼怒川金谷ホテル —— ジョン・カナヤの美学が息づくモダンラグジュアリー。大人のための隠れ家',
        features: [
          { title: '鬼怒川の渓谷美を間近に感じる全室ウッドテラス付き', desc: '全客室が鬼怒川に面したリバーフロント設計。ウッドテラスに出れば、川のせせらぎと豊かな木々の香りを感じながら、贅沢なプライベートタイムを過ごせます。' },
          { title: '伝統の懐石料理と西洋料理の融合「和敬洋讃」', desc: '創業者ジョン・カナヤの哲学を体現した独自のディナーコース。旬の和食の繊細さとフレンチの華やかさ、名物のビーフシチューや特製スイーツが五感を刺激します。' },
          { title: 'ショコラバー「カカオ」と重厚なシガーサロン', desc: '専属ショコラティエが手掛ける極上チョコレートと厳選された銘酒を楽しめる大人のラウンジ。日常の喧騒から完全に解き放たれる上質な時間を約束します。' }
        ],
        reviewPoints: '楽天トラベル評価4.39点。行き届いたバトラーサービス、上質なアメニティ、静けさに包まれた館内、そして洗練された料理の数々に、大人の記念日ステイとしての絶賛が寄せられています。'
      },
      {
        key: 'kinugawa_plazasponge',
        tagline: '渓谷にせり出す絶景の宿！鬼怒川の自然林に佇む離れ貸切露天風呂「鬼燈亭」と地場味覚の贅沢会席',
        detailTitle: '鬼怒川温泉 鬼怒川プラザホテル —— 渓谷パノラマと充実の貸切湯巡り。カップルや家族で楽しむ温泉旅',
        features: [
          { title: '自然林に佇む離れの貸切露天風呂「鬼燈亭」', desc: '宿から専用通路で渡る離れの貸切露天風呂。鬼怒川の自然林に包まれ、川のせせらぎを聞きながら完全なプライベート空間で贅沢な掛け流し湯浴みを堪能できます。' },
          { title: 'ロビーラウンジや客室から望むダイナミックな渓谷美', desc: '渓谷の断崖に沿って建てられているため、客室やラウンジからの見晴らしは抜群。四季折々に色づく木々と清らかな水流のコントラストが心を和ませます。' },
          { title: '日光山里の恵みを味わう会席料理＆バイキングプラン', desc: '栃木県産ゆばや旬の山菜、鮎やイワナなどの川魚、特選牛などを取り入れた料理。宿泊スタイルに合わせて会席スタイルやバイキングを選べる柔軟さも魅力です。' }
        ],
        reviewPoints: '楽天トラベル評価3.71点、口コミ4700件超。離れの貸切露天風呂の風情、広々とした客室、コストパフォーマンスの高さで、気軽に楽しめる温泉旅行先として根強い人気を誇ります。'
      }
    ],
    areaGuide: {
      title: '鬼怒川温泉周辺の絶景アクティビティ＆日光観光ルート',
      points: [
        { name: '鬼怒川ライン下りと鬼怒楯岩大吊橋', text: '船頭の巧みな竿さばきで渓谷を縫うように下る「鬼怒川ライン下り」。春のツツジ、夏の新緑、秋の紅葉とスリル満点の舟旅が楽しめます。また、高さ37メートルの歩道専用吊橋「鬼怒楯岩大吊橋」からのパノラマも必見です。' },
        { name: '東武ワールドスクウェア＆日光江戸村', text: '世界21ヶ国の世界遺産や有名建築物を25分の1スケールで精巧に再現した「東武ワールドスクウェア」や、江戸時代の街並みと忍者ショーが人気の「EDO WONDERLAND 日光江戸村」。大人から子どもまで丸一日楽しめるテーマパークが集結しています。' },
        { name: '日光東照宮・世界遺産エリアへのアクセス', text: '鬼怒川温泉駅から東武鉄道または車で約30分で日光東照宮・輪王寺・二荒山神社の世界遺産エリアへ。温泉リゾートでの宿泊と世界遺産巡りを組み合わせた贅沢な2泊3日コースが定番です。' }
      ]
    },
    furusatoStepTitle: '栃木県日光市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「日光市」のクーポンを獲得', desc: '寄付額の最大30%相当が還元される日光市の楽天トラベルクーポンを返礼品として申し込みます。寄付完了と同時にアカウントへ自動付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で旅行日程を自由に選定', desc: '有効期間はたっぷり3年間。あさやなどの人気宿は予約が埋まりやすいため、早めの予約や平日利用など都合に合わせて日程を組めます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: '宿泊プランの予約確認画面でクーポンを選択するだけで、数万円単位の割引が即座に反映されます。予約済みのプランにも後から適用可能です。' }
    ]
  },
  {
    slug: 'furusato-tax-jozankei-onsen-sapporo-retreat-stay',
    title: '【定山渓温泉×ふるさと納税】札幌の奥座敷！名湯露天風呂と北海道美食バイキング＆隠れ家リゾートガイド｜ぬくもりの宿ふる川・定山渓ビューホテル・翠山亭',
    desc: '札幌中心部から約1時間！国立公園の豊かな渓谷に佇む「定山渓温泉」を楽天ふるさと納税でお得に旅する。民芸と囲炉裏の温もりが愛される「ふる川」、巨大屋内温水プールとビュッフェ自慢の「定山渓ビューホテル」、源泉掛け流しと炭火会席の「翠山亭」を徹底紹介。札幌市トラベルクーポンの使い方も解説。',
    keywords: '定山渓温泉 ふるさと納税,定山渓 旅館 楽天トラベル,ぬくもりの宿ふる川 ふるさと納税,定山渓ビューホテル クーポン,札幌市 ふるさと納税 宿泊',
    targetCity: '北海道札幌市',
    leadTitle: '白樺揺れる渓谷の静寂、湯煙に包まれる札幌の奥座敷——定山渓温泉で味わう極上の北海道ステイ',
    leadP1: '札幌市中心部から車でわずか1時間足らず。豊平川の上流、支笏洞爺国立公園の深い森と渓谷に抱かれた定山渓温泉は、「札幌の奥座敷」として150年以上の歴史を紡いできた北海道屈指の名湯です。慶応2年に修験僧・美泉定山がアイヌの人々の案内で泉源に出会ったことから始まり、ナトリウム塩化物泉の湯は塩分が肌を包んで湯冷めしにくく、体の芯から温まる「熱の湯」として親しまれています。',
    leadP2: '定山渓の魅力は、春の新緑、夏の爽涼、秋の全山紅葉、そして冬の幻想的な雪見露天風呂と、四季折々で劇的に姿を変える圧倒的な自然景観にあります。さらに道産の新鮮な魚介、十勝産和牛、季節の野菜など、北海道の美味をふんだんに味わえる名宿が勢揃い。札幌市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより憧れの高級旅館やリゾートホテルにお得に宿泊でき、札幌観光と組み合わせた最高の北海道旅行が叶います。',
    hotelsKey: 'furusato-tax-jozankei-onsen-sapporo-retreat-stay',
    hotelItems: [
      {
        key: 'jozankei_furukawa',
        tagline: '囲炉裏の炭火と民芸の温もりに包まれる人気湯宿！百松庵の贅沢露天風呂と手作り燻製・北海道会席',
        detailTitle: '定山渓温泉 ぬくもりの宿 ふる川 —— 古民家風の落ち着いた空間と、ふるさとの温もりを感じるおもてなし',
        features: [
          { title: '大浴場と特別フロア専用「百松庵」の極上湯浴み', desc: '石と木をふんだんに使った情緒ある大浴場に加え、高層階フロア宿泊者専用の温泉浴場「百松庵」を完備。四季折々の定山渓の山並みを望みながら、静寂の中で源泉掛け流しを愉しめます。' },
          { title: '囲炉裏ラウンジで味わう温泉卵と甘酒サービス', desc: '館内中央には本物の囲炉裏があり、焼きマシュマロや温泉卵、手作りの甘酒やワインが振る舞われる温かなおもてなし。看板犬とのふれあいも宿泊客の心を和ませます。' },
          { title: '北海道の旬の滋味を凝縮した「山ふかしまごころ会席」', desc: '近郊農家から届く新鮮野菜、近海で揚がる旬魚、自家製の燻製や漬物など、手間ひまかけた手作り料理が並びます。素材本来の旨味を最大限に引き出した優しい味わいが大人気です。' }
        ],
        reviewPoints: '楽天トラベル評価4.64点、口コミ1300件超。「どこか懐かしく温かいサービスに感動」「朝食の手作りお惣菜がどれも絶品」など、ホスピタリティの高さでリピーターが絶えません。'
      },
      {
        key: 'jozankei_view',
        tagline: '総面積4000平米の巨大屋内温水プール「水の王国ラグーン」！絶景展望風呂と豪華北海道ビュッフェ',
        detailTitle: '定山渓ビューホテル（エグゼクティブスイート翠嶺） —— ファミリーから特別な記念日まで。エンターテインメント満載の巨大リゾート',
        features: [
          { title: '北海道最大級の温水アミューズメント「水の王国ラグーン」', desc: '波の出るプールや流れるプール、スプラッシュリバーなど、一年中天候を気にせず楽しめる巨大プール施設。子どもから大人まで大はしゃぎできる北海道屈指の人気施設です。' },
          { title: '地上60mの最上階展望大浴場「星天」', desc: 'ホテル最上階に位置するパノラマ大浴場。定山渓の渓谷と満天の星空を見下ろす圧倒的なスケール感の露天風呂で、開放感に満ちた入浴が楽しめます。' },
          { title: 'エグゼクティブスイート翠嶺でのラグジュアリーステイ', desc: '近年誕生した専用スイートフロア「翠嶺」では、広々とした客室、専用ラウンジ、厳選素材のプレミアムビュッフェや会席を用意。上質な大人旅にも対応しています。' }
        ],
        reviewPoints: '楽天トラベル評価4.43点。プールの圧倒的な楽しさ、ライブ感あふれる豪華ビュッフェ、そしてリニューアルされたスイートルームの上質な快適さに高い支持が集まっています。'
      },
      {
        key: 'jozankei_daiichi',
        tagline: '創業以来守り続ける自家源泉3本のブレンド名湯！全客室に天然温泉展望風呂を備えた極上隠れ家',
        detailTitle: '定山渓第一寶亭留 翠山亭 —— 湯と食の贅を極める伝統旅館。プライベートな展望風呂と炭火会席',
        features: [
          { title: '濃厚な自家源泉を惜しみなく注ぐ多彩な湯処', desc: '温度の異なる3本の自家源泉を巧みにブレンドし、濃厚な成分を肌で実感できる名湯。大浴場「湯の蔵」のほか、森に佇む貸切露天風呂など、温泉好きを唸らせる設備が充実。' },
          { title: '客室で心ゆくまで源泉を独占できる展望風呂付き客室', desc: '多くの客室に源泉掛け流しの展望風呂や檜風呂を設置。誰にも気兼ねなく、好きな時に何度でも定山渓の名湯に浸かる贅沢が味わえます。' },
          { title: '北海道の極上素材を目の前で焼き上げる炭火会席「桑乃木」', desc: '白老牛やタラバガニ、エゾアワビなど、北海道が誇る最高峰の食材を炭火で香ばしく焼き上げる贅沢会席。器や盛り付けにも職人の技が光ります。' }
        ],
        reviewPoints: '楽天トラベル評価4.42点、口コミ1400件超。客室温泉風呂の素晴らしさ、炭火会席の美味しさと丁寧なサービス、静かで落ち着いた大人の雰囲気が高く評価されています。'
      }
    ],
    areaGuide: {
      title: '定山渓温泉街の散策・自然アクティビティ＆札幌観光モデルコース',
      points: [
        { name: '二見吊橋・定山渓自然の村と紅葉・雪灯路', text: '豊平川にかかる真っ赤な「二見吊橋」は定山渓随一のビュースポット。秋には全山が黄金色と紅に染まり、冬には無数のスノーキャンドルが灯る「雪灯路（ゆきとうろ）」が開催され、幻想的な銀世界を楽しめます。' },
        { name: '足湯めぐりと定山渓名物「温泉まんじゅう」', text: '温泉街のあちこちに無料の足湯や手湯が点在。元祖かっぱ焼きや、大黒屋商店の蒸したて温泉まんじゅうを食べ歩きながら、のんびりと川沿いを散策するのが定番の楽しみ方です。' },
        { name: '豊平峡ダムと札幌市内観光（すすきの・大通公園）', text: '定山渓から電気バスで行く「豊平峡ダム」は、日本屈指の紅葉名所として名高い大パノラマ。また、車で1時間の札幌市内へ移動して時計台やすすきのグルメ、大通公園のイベントと組み合わせるのもおすすめです。' }
      ]
    },
    furusatoStepTitle: '札幌市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「札幌市」のクーポンを獲得', desc: '楽天ふるさと納税で「北海道札幌市」のトラベルクーポン（寄付額の30%相当補助）を申し込みます。寄付完了後、即座に楽天アカウントへ付与されます。' },
      { step: 'Step 2: 3年間の有効期間内でベストシーズンを予約', desc: 'クーポンの有効期限は3年間。秋の紅葉シーズンや冬の雪まつり・雪見露天の時期、夏の避暑など、お好みの季節に合わせてじっくりプランを選べます。' },
      { step: 'Step 3: 楽天トラベルで定山渓の宿を予約しクーポン割引を適用', desc: 'ふる川、定山渓ビューホテル、翠山亭などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  },
  {
    slug: 'furusato-tax-tamatsukuri-onsen-izumo-beauty-stay',
    title: '【玉造温泉×ふるさと納税】出雲大社参拝と神の湯美肌ステイ！化粧水いらずの名湯＆山陰味覚会席ガイド｜佳翠苑皆美・長楽園・白石家',
    desc: '『出雲国風土記』に「一度洗えば容姿端麗、再び浴びれば万病治癒」と記された日本最古の美肌温泉・玉造温泉を楽天ふるさと納税で満喫！出雲大社への良縁祈願とセットで訪れたい老舗旅館「佳翠苑 皆美」、日本一の混浴大露天風呂を誇る「長楽園」、花あふれる純和風宿「白石家」を徹底解説。',
    keywords: '玉造温泉 ふるさと納税,出雲大社 温泉 旅館,佳翠苑皆美 ふるさと納税,長楽園 玉造温泉 クーポン,松江市 ふるさと納税 宿泊',
    targetCity: '島根県松江市',
    leadTitle: '神話の国・出雲で巡る美肌の湯、縁結びの祈りと山陰の至福会席——玉造温泉で過ごす潤いのふるさと納税旅',
    leadP1: '島根県松江市に位置し、奈良時代の『出雲国風土記』にも「ひとたび濯げば形容端正しく、再び浴すれば万の病ことごとく癒ゆ」と記された日本最古の美肌温泉・玉造温泉。その泉質は硫酸塩・塩化物泉で、保湿成分であるメタケイ酸やカルシウムイオンが豊富に含まれ、天然の化粧水と称されるほど高い美肌作用を誇ります。玉湯川沿いには風情ある旅館が建ち並び、桜並木や足湯、勾玉橋など、歩くだけで心が洗われる温泉街が広がっています。',
    leadP2: '玉造温泉は、日本屈指のパワースポットである「出雲大社」へのアクセスも抜群。出雲大社で良縁を祈願し、玉作湯神社で「願い石・叶い石」を授かり、美肌の湯に浸かるコースは、女子旅や夫婦・カップル旅行に絶大な人気を誇ります。さらに夕食には、日本海で獲れたのどぐろ、松葉ガニ、しまね和牛、宍道湖の七道など山陰の美食が勢揃い。松江市へのふるさと納税を活用すれば、30%相当のトラベルクーポンにより憧れの名門老舗旅館へお得に滞在できます。',
    hotelsKey: 'furusato-tax-tamatsukuri-onsen-izumo-beauty-stay',
    hotelItems: [
      {
        key: 'tamatsukuri_minami',
        tagline: '創業百三十余年の歴史を誇る名門！手入れの行き届いた日本庭園と展望大浴場「天遊の湯」・秘伝の皆美鯛めし',
        detailTitle: '玉造温泉 佳翠苑 皆美 —— 数寄屋の風情と名園の静寂。プロが選ぶ日本のホテル・旅館100選常連の格式宿',
        features: [
          { title: '最上階から玉造温泉街を見晴らす展望露天風呂「天遊の湯」', desc: '最上階に位置する展望露天風呂からは、玉造の山並みと街並みを一望。天然の化粧水と称される自家源泉が注がれ、朝夕で表情を変える絶景パノラマ湯浴みを楽しめます。' },
          { title: '松江藩主・松平不昧公ゆかりの秘伝「皆美家伝鯛めし」', desc: '皆美館の歴史とともに受け継がれてきた名物料理。そぼろ状にした鯛の身、裏漉しした卵、出汁をかけて味わう伝統の鯛めしは、ここでしか味わえない至高の逸品です。' },
          { title: 'うるおい手湯足湯と四季の移ろいを映す日本庭園', desc: '館内ロビーから眺める枯山水の美しい日本庭園。足湯や手湯処も整備され、温泉街の散策前後にもゆったりと癒しの時間を過ごせます。' }
        ],
        reviewPoints: '楽天トラベル評価4.67点、口コミ1400件超。「おもてなし、お部屋、温泉、食事、すべてがパーフェクト」「朝食の鯛めしが忘れられない美味しさ」と絶賛の声が寄せられています。'
      },
      {
        key: 'tamatsukuri_chourakuen',
        tagline: '日本一の広さを誇る百二十坪の混浴大露天風呂！一万坪の壮大な廻遊式日本庭園と湧き出る美肌源泉',
        detailTitle: '玉造温泉 湯之助の宿 長楽園 —— 明治元年創業・玉造の湯守の歴史。大自然の湯船に抱かれる至極の湯浴み',
        features: [
          { title: '日本一の広さを誇る混浴大露天風呂「龍宮の湯」', desc: '120坪という驚異的な広さを誇る源泉掛け流し露天風呂。湯浴み着を着用して入浴するため、家族やカップルで気兼ねなく広大な湯船を満喫できます。' },
          { title: '一万坪の広大な敷地に広がる廻遊式日本庭園', desc: '四季折々の花々や池、小橋が配された名園。昭和天皇をはじめ多くの皇族や要人が宿泊された歴史があり、静かな散策路を歩くだけで心が整います。' },
          { title: 'しまね和牛と日本海の旬魚を味わう季節会席', desc: '料理長が選び抜いた山陰の山海の幸。のどぐろの塩焼きやしまね和牛のステーキなど、素材の鮮度と職人技が光る贅沢なディナーを堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.36点、口コミ1900件超。圧倒的な広さを誇る大露天風呂の開放感、手入れの行き届いた1万坪の庭園の美しさに深い感動の声が集まっています。'
      },
      {
        key: 'tamatsukuri_shirasure',
        tagline: '創業三百年・花と音楽でお迎えする老舗宿！総檜大浴場と毎夜開催される伝統芸能「安来節ショー」',
        detailTitle: '出雲・玉造温泉 白石家 —— 女性に優しいおもてなしの宿。総檜風呂の木の温もりと山陰美食の饗宴',
        features: [
          { title: '古代檜の香りに包まれる総檜大浴場「白露の湯」', desc: '樹齢二千年の古代檜を贅沢に使用した大浴場。檜の清々しい香りと弱アルカリ性の美肌温泉が融合し、極上のリフレッシュ効果をもたらします。' },
          { title: '毎夜ロビーで開催される迫力の安来節生ライブ', desc: '島根の伝統芸能「安来節（どじょうすくい）」の生演奏と踊りを毎晩ロビーで上演。観客も参加できる楽しい演出で、旅の夜を笑顔で締めくくれます。' },
          { title: '選べる色浴衣と細やかな女性向けアメニティ', desc: '数十種類から選べる色浴衣の無料貸出や、こだわりのスキンケアアメニティを用意。女子旅や母娘旅行に嬉しい細やかな気配りが随所に施されています。' }
        ],
        reviewPoints: '楽天トラベル評価4.69点、口コミ約4000件という圧倒的支持。「スタッフの皆様が本当に親切で温かい」「安来節ショーがとても楽しく良い思い出になった」と高いリピート率を誇ります。'
      }
    ],
    areaGuide: {
      title: '玉造温泉街のパワースポットめぐり＆出雲大社観光ガイド',
      points: [
        { name: '玉作湯神社の「願い石・叶い石」と恋叶い橋', text: '玉造温泉街の奥に鎮座する「玉作湯神社」。社務所で授かる「叶い石」を境内の「願い石」に触れさせて祈願するオリジナルの願掛けが全国から女性参拝者を集めています。宮橋（恋叶い橋）から鳥居を背景に写真を撮ると良縁に恵まれるというジンクスも有名です。' },
        { name: '美肌温泉ボトルのテイクアウトと足湯散策', text: '玉湯川沿いには「湯薬師広場」があり、備え付けのボトル（200円）に湧き出たばかりの新鮮な源泉を詰めて持ち帰ることができます。防腐剤無添加の天然化粧水として自宅でも美肌ケアが楽しめます。' },
        { name: '出雲大社（いづもおおやしろ）と日御碕灯台', text: '玉造温泉から車または電車で約1時間。大国主大神を祀る縁結びの聖地・出雲大社へ。神楽殿の大注連縄や本殿参拝の後は、門前の神門通りで出雲そばやぜんざいを味わい、日本一の高さを誇る白亜の「日御碕灯台」へ足を延ばすのが王道ルートです。' }
      ]
    },
    furusatoStepTitle: '島根県松江市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「島根県松江市」のクーポンを獲得', desc: '楽天ふるさと納税で「松江市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で出雲大社参拝旅行を計画', desc: 'クーポンの有効期限は発行から3年間。神在月（旧暦10月・11月頃）の出雲大社参拝や、春の桜シーズン、秋の味覚シーズンなど希望の日程に合わせて予約できます。' },
      { step: 'Step 3: 楽天トラベルで玉造の宿を予約しクーポン割引を適用', desc: '皆美、長楽園、白石家などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  },
  {
    slug: 'furusato-tax-shirahama-ocean-resort-luxury-stay',
    title: '【南紀白浜温泉×ふるさと納税】白良浜オーシャンビュー＆アドベンチャーワールド！名門宮殿リゾート＆極上クエ会席ガイド｜ホテル川久・むさし・白浜マリオット',
    desc: '日本三古湯の一つ・南紀白浜温泉を楽天ふるさと納税でお得にリゾートステイ！総工費400億円の芸術宮殿ホテル「ホテル川久」の王様のビュッフェ、白良浜徒歩1分で2種の源泉を誇る「紀州・白浜温泉 むさし」、太平洋の絶景を望む「南紀白浜マリオットホテル」を徹底比較。和歌山県白浜町クーポン活用術を網羅。',
    keywords: '白浜温泉 ふるさと納税,ホテル川久 ふるさと納税,白良浜 ホテル クーポン,アドベンチャーワールド 宿泊,白浜町 ふるさと納税 楽天トラベル',
    targetCity: '和歌山県白浜町',
    leadTitle: 'エメラルドグリーンの海と白砂ビーチ、悠久の古湯、世界屈指の建築美——南紀白浜で叶える贅沢リゾートステイ',
    leadP1: '和歌山県・紀伊半島の南西部に位置し、万葉集や日本書紀にも「牟婁の湯」として記録が残る日本屈指の古湯・南紀白浜温泉。どこまでも透き通るエメラルドグリーンの海と、サラサラの真っ白な珪砂が広がる「白良浜（しららはま）」は、本州屈指のビーチリゾートとして年間を通じて多くの旅人を魅了します。海を間近に感じるナトリウム塩化物泉や炭酸水素塩泉は、疲れた体を癒すとともにしっとりとした肌触りをもたらします。',
    leadP2: 'さらに南紀白浜には、パンダファミリーに出会える「アドベンチャーワールド」や、夕陽の名所「円月島」「三段壁」など見どころが満載。そして冬には幻の高級魚「クエ」の鍋や刺身、伊勢海老、熊野牛といった和歌山最高峰の美食が並びます。海辺にそびえる芸術宮殿「ホテル川久」をはじめとする名門ホテルへの宿泊は、和歌山県白浜町へのふるさと納税トラベルクーポンを利用することで、実質負担を大幅に抑えながらワンランク上のラグジュアリー体験を手に入れられます。',
    hotelsKey: 'furusato-tax-shirahama-ocean-resort-luxury-stay',
    hotelItems: [
      {
        key: 'shirahama_kawayu',
        tagline: '総工費四百億円・海に浮かぶ夢の芸術宮殿！全室スイートルームと豪華食材が舞い踊る「王様のビュッフェ」',
        detailTitle: '白浜温泉 ホテル川久 —— 世界の一流職人が技を競った建築博物館。非日常の極みを味わうキャッスルステイ',
        features: [
          { title: '金箔22.5金が輝く天井とヨーロッパ古城のような建築美', desc: 'ロビーに入ると広がる圧巻のドーム天井（ギネス記録認定の金箔天井）や、ローマンモザイクタイルの床、ダリやシャガールらの名画。館内全体がひとつの壮大な美術館です。' },
          { title: '贅を尽くした美食の祭典「王様のビュッフェ」', desc: '黒毛和牛ステーキ、十勝産十勝牛、旬の高級魚介、パティシエ特製の華やかなスイーツなど、最高峰の食材をオープンキッチンで仕上げる豪華ディナー。贅沢を極めた食の体験です。' },
          { title: '田辺湾を見渡す温泉サロン「ロイヤルスパ」', desc: '邸宅リビングのような優雅な温泉サロン。オープンテラスデッキやシルキーバス、サウナなどを備え、穏やかな海のパノラマを眺めながら優雅な湯浴みを愉しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.56点、口コミ3700件超。「建物の重厚さと美しさに圧倒された」「王様のビュッフェは名前負けしない人生最高のバイキング」と熱狂的なファンを抱えています。'
      },
      {
        key: 'shirahama_musashi',
        tagline: '白良浜まで徒歩一分の絶好ロケーション！二種類の源泉掛け流しと紀州の美味が並ぶ贅沢バイキング',
        detailTitle: '紀州・白浜温泉 むさし —— 温泉情緒とビーチアクセスの両立。本格純和風旅館の温かなおもてなし',
        features: [
          { title: '白浜の名湯「生絹湯」と「斎明湯」の2つの自家源泉', desc: '敷地内から湧き出る2種類の源泉。重層泉と食塩泉の異なる泉質を館内大浴場や中庭露天風呂で入り比べることができ、本格的な湯治体験が味わえます。' },
          { title: '白良浜まで水着のまま歩いて行ける抜群の立地', desc: '白浜のメインビーチ「白良浜」まで徒歩わずか1分。夏場の海水浴はもちろん、夕暮れ時の浜辺散歩や朝の爽やかなウォーキングにも最高の環境です。' },
          { title: '勝浦産マグロ解体ショーと紀州郷土バイキング', desc: 'オープンキッチンで捌かれる新鮮なマグロの刺身や握り、揚げたて天ぷら、和歌山ラーメンなど、地元の郷土色豊かな料理が並ぶ人気のディナービュッフェです。' }
        ],
        reviewPoints: '楽天トラベル評価4.30点、口コミ2500件超。ビーチへの近さ、2つの異なる泉質の温泉、子ども連れでも安心の充実したバイキング料理とスタッフの親切な対応が高く評価されています。'
      },
      {
        key: 'shirahama_nanki',
        tagline: '太平洋を見下ろす高台に建つインターナショナルリゾート！最上階展望露天風呂と和歌山の山海グリル',
        detailTitle: '南紀白浜マリオットホテル —— 洗練されたグローバルスタンダード。海と空が溶け合うインフィニティパノラマ',
        features: [
          { title: '最上階11階の展望露天風呂から望む夕陽パノラマ', desc: '太平洋を一望する高台の最上階に位置する大浴場＆露天風呂。「日本の夕陽百選」に選ばれた白浜のサンセットを湯船から望む時間は息をのむ美しさです。' },
          { title: '広々とした客室とオーシャンビュー温泉付きルーム', desc: 'ゆとりある客室設計。プライベートな温泉展望風呂を備えた客室タイプでは、24時間いつでも好きな時に海を眺めながら白浜の名湯を満喫できます。' },
          { title: '和歌山の新鮮素材を味わうモダンセミビュッフェ＆グリル', desc: '開放的なダイニングで供されるディナー。熊野牛や紀州うめぶた、近海魚介のグリル料理をメインに、前菜やデザートが並ぶ洗練されたリゾートディナーです。' }
        ],
        reviewPoints: '楽天トラベル評価4.40点、口コミ1900件超。最上階露天風呂からの夕景の美しさ、客室の清潔感と広さ、マリオットブランドならではのスマートな接客が高く評価されています。'
      }
    ],
    areaGuide: {
      title: '南紀白浜の絶景スポット＆アドベンチャーワールド観光ガイド',
      points: [
        { name: 'アドベンチャーワールドでジャイアントパンダと出会う', text: '日本屈指の動物ふれあいテーマパーク「アドベンチャーワールド」。ジャイアントパンダファミリーをはじめ、広大なサファリワールドやダイナミックなイルカライブなど、一日中家族で楽しめます。' },
        { name: '円月島の夕陽・三段壁洞窟・千畳敷の海岸美', text: '中央に丸い海蝕洞が開いた「円月島」の夕景、波が打ち寄せる雄大な畳状の岩盤「千畳敷」、そしてエレベーターで地下36mへ降りる迫力の「三段壁洞窟」。自然の神秘を感じる海岸美は見逃せません。' },
        { name: 'とれとれ市場で海鮮丼＆紀州梅干しのお土産探し', text: '西日本最大級の海鮮マーケット「とれとれ市場 南紀白浜」。新鮮な魚介類の浜焼きや名物の海鮮丼をランチで味わい、紀州南高梅や和歌山地酒のお土産探しに最適です。' }
      ]
    },
    furusatoStepTitle: '和歌山県白浜町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「白浜町」のクーポンを獲得', desc: '楽天ふるさと納税で「和歌山県白浜町」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了後、即座に楽天アカウントへ付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で夏の海や冬のクエ旅行を計画', desc: 'クーポンの有効期限は発行から3年間。夏の海水浴シーズンはもちろん、冬の高級魚クエ料理シーズン、春秋の気候の良い季節など都合に合わせて使えます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: 'ホテル川久、むさし、白浜マリオットなどの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  }
];

function generateArticlePage(art) {
  const hotelObj = allHotels[art.hotelsKey] || {};

  const hotelCardsCode = art.hotelItems.map((h, idx) => {
    const data = hotelObj[h.key] || {};
    const hotelName = data.hotelName || '名門温泉旅館';
    const imgUrl = data.hotelImageUrl || 'https://placehold.co/800x500/e2e8f0/1e293b?text=Hotel+Photo';
    const rating = data.reviewAverage || 4.5;
    const revCount = data.reviewCount || 100;
    const chargeStr = data.hotelMinCharge ? ('¥' + Number(data.hotelMinCharge).toLocaleString() + '〜') : '要問い合わせ';
    const address = (data.address1 || '') + ' ' + (data.address2 || '');
    const affiliateUrl = data.affiliateUrl || 'https://travel.rakuten.co.jp/';
    const hotelNo = data.hotelNo || '';

    const featuresCode = h.features.map(f => {
      return `
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ${f.title}
                    </h5>
                    <p className="text-stone-600 leading-relaxed">${f.desc}</p>
                  </div>`;
    }).join('');

    return `
          {/* ホテル ${idx + 1} */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="${imgUrl}"
                alt="${hotelName}"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第${idx + 1}選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ ${rating}（口コミ ${revCount}件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">${art.targetCity}</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ${hotelName}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  ${h.tagline}
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ${h.detailTitle}
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  ${featuresCode}
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">${h.reviewPoints}</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: ${address}</div>
                <div>最寄り駅・アクセス: ${data.access || data.nearestStation || '最寄り駅より送迎あり'}</div>
                <div>参考料金: <span className="font-bold text-stone-800">${chargeStr}</span></div>
                <div>ホテル番号: No.${hotelNo}</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="${affiliateUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>`;
  }).join('\n');

  const areaPointsCode = art.areaGuide.points.map(pt => {
    return `
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> ${pt.name}
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">${pt.text}</p>
            </div>`;
  }).join('\n');

  const stepsCode = art.furusatoSteps.map(st => {
    return `
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">${st.step}</div>
              <p className="text-stone-200 leading-relaxed">${st.desc}</p>
            </div>`;
  }).join('\n');

  return `import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${art.title}',
  description: '${art.desc}',
  keywords: '${art.keywords}',
  openGraph: {
    title: '${art.title}',
    description: '${art.desc}',
    type: 'article',
    url: 'https://croud-travel.pages.dev/${art.slug}',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${art.slug}',
  },
};

export default function FurusatoTaxArticle() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-amber-50 py-16 px-4 md:px-8 border-b border-amber-900/50 shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30 mb-2">
            <span>楽天ふるさと納税 宿泊クーポン完全攻略</span>
            <span>•</span>
            <span>自治体公認 宿泊割引</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
            ${art.title}
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            ${art.desc}
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">${art.targetCity}</strong></span>
            <span>•</span>
            <span>還元率: 寄付額の最大30%</span>
            <span>•</span>
            <span>有効期限: クーポン獲得から3年間</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            ${art.leadTitle}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP1}
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP2}
          </p>
          <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-2">
            <h3 className="font-bold text-amber-900 flex items-center gap-2">
              <span>💡</span> この記事でわかること
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-stone-800 list-disc list-inside">
              <li>ふるさと納税で泊まれる名門宿のリアルな魅力と特徴</li>
              <li>楽天トラベルクーポンを使った最大割引予約の手順</li>
              <li>失敗しない現地観光モデルルート＆名物グルメ</li>
              <li>予約済みでも間に合う「クーポンあとから適用」のやり方</li>
            </ul>
          </div>
        </section>

        {/* 楽天トラベル クーポン獲得バナー導線 */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest font-bold text-amber-200">Rakuten Travel Furusato Tax</p>
            <h3 className="text-lg sm:text-xl font-bold font-serif">${art.targetCity}のふるさと納税クーポンをチェック</h3>
            <p className="text-xs text-rose-100">寄付額の最大30%オフ！3年間有効・予約済み日程にも適用可能</p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-rose-700 font-extrabold px-6 py-3 rounded-xl shadow hover:bg-stone-100 transition text-sm flex items-center gap-1.5"
          >
            <span>クーポン一覧を見る</span>
            <span>→</span>
          </a>
        </div>

        {/* 厳選ホテル徹底解剖 */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              ふるさと納税で泊まる厳選名宿3選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              実際に楽天トラベルで圧倒的な高評価を獲得している名門ホテル・老舗旅館をピックアップ
            </p>
          </div>

${hotelCardsCode}
        </section>

        {/* 周辺観光・グルメガイド */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            ${art.areaGuide.title}
          </h2>
          <div className="grid gap-4">
${areaPointsCode}
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              ${art.furusatoStepTitle}
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">
${stepsCode}
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-kinosaki-onsen-sotoyu-crab-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 城崎温泉 外湯めぐり＆松葉ガニ・但馬牛ステイ特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
`;
}

for (const art of articles) {
  const dir = path.join(__dirname, 'src/app', art.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const content = generateArticlePage(art);
  const filePath = path.join(dir, 'page.tsx');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated: ${filePath} (${content.length} chars)`);
}
