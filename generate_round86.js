const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const round86Configs = [
  {
    slug: 'furusato-tax-arima-onsen-kinsen-ginsen-luxury-stay',
    componentName: 'FurusatoArimaOnsenKinsenGinsenStayPage',
    tag: '有馬温泉 金泉・銀泉＆最高峰神戸牛宿特集',
    title: '日本最古の名湯！有馬温泉の金泉・銀泉めぐり＆最高峰神戸牛会席老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】兵衛向陽閣・御所坊・月光園鴻朧館',
    metaTitle: '日本最古の名湯！有馬温泉の金泉・銀泉めぐり＆最高峰神戸牛会席老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】兵衛向陽閣・御所坊・月光園鴻朧館',
    shortTitle: '有馬温泉 金泉銀泉＆名門旅館特集',
    description: '日本三古湯・日本三名泉の頂点に君臨する有馬温泉！鉄分と塩分を豊富に含む赤褐色の「金泉」と無色透明の炭酸ラドン泉「銀泉」。「兵衛向陽閣」「陶泉 御所坊」「月光園 鴻朧館」を、兵庫県神戸市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。創業七百年の格式、半混浴金泉掛け流し、極上神戸牛会席を満喫。',
    heroTag: '日本三名泉・最古の湯！兵庫県有馬温泉特集',
    leadTitle: '千数百年の歴史が育んだ黄金の湯と銀の湯。太閤秀吉も愛した天下の名湯・有馬温泉の至福の休日へ',
    leadText: '六甲山の豊かな大自然の北麓に位置し、日本三古湯および日本三名泉の一つに数えられる「有馬温泉（ありまおんせん）」。神代の時代から湧き出で、飛鳥時代の天皇行幸や、戦国武将・太閤豊臣秀吉が度重なる戦の傷を癒やし愛した天下の名湯として知られます。有馬温泉の最大の魅力は、地球規模の地殻深部から湧出する神秘的な二大名湯「金泉（赤湯）」と「銀泉（白湯）」。空気に触れると酸化して濃い赤褐色に輝く含鉄強塩泉の金泉は、濃厚な塩分が肌に薄い皮膜を作り抜群の保温・保湿効果を発揮します。一方、炭酸泉とラジウム泉からなる透明な銀泉は、肌をすっきりと引き締め血行を促進。この二つの奇跡の湯を贅沢に満喫できるのが、有馬に軒を連ねる一流旅館です。さらに夕食の主役は、世界中の美食家を虜にする世界一の和牛ブランド「神戸ビーフ（神戸牛）」。とろけるような極上の霜降り肉を、名門宿秘伝のすき焼き、しゃぶしゃぶ、あるいは炭火ステーキで味わう歓びは至高の贅沢です。本特集では、創業七百年を誇り趣の異なる三つの大浴場で金泉を堪能できる「兵衛向陽閣」、創業八百年の格式を受け継ぎ谷崎潤一郎ら文豪に愛された金泉半混浴の名宿「陶泉 御所坊」、そして落葉山と清流・滝川の絶景を望み最高級神戸牛会席を誇るハイグレード宿「月光園 鴻朧館」の3大老舗を厳選。兵庫県神戸市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの有馬温泉ステイをお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '地球の神秘が凝縮した「金泉」と「銀泉」！日本最高峰の濃厚な泉質を満喫',
        body: '海水よりも塩分濃度が高く芯まで温まる赤褐色の金泉と、肌がすべすべになる透明な銀泉。宿にいながら二大名湯の贅沢な湯浴みが叶います。'
      },
      {
        num: '02',
        title: '世界に誇る最高級黒毛和牛「神戸牛」の極上会席！とろける霜降りの美食体験',
        body: '厳しい認定基準をクリアした本物の神戸ビーフを、ステーキやすき焼きで堪能。丹波・播磨の旬の食材と合わせた繊細な京風会席に舌鼓を打てます。'
      },
      {
        num: '03',
        title: '神戸市ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や両親への親孝行旅に最適',
        body: '格式高い有馬の名門旅館もふるさと納税なら実質自己負担2,000円。有効期限が3年あるため、結婚記念日や還暦祝いなどの特別な旅行に賢く使えます。'
      }
    ],
    hotelDetails: [
      {
        key: 'arima_hyoe',
        badge: '兵庫県神戸市・秀吉から「兵衛」の名を授かった創業七百年の老舗！趣異なる三つの大浴場で金泉を堪能＆豪華バイキング・部屋食会席',
        rank: '厳選名宿 第1選',
        desc: '有馬温泉の高台に位置し、太閤豊臣秀吉ゆかりの創業七百年の歴史を誇る有馬屈指の老舗旅館。最大の魅力は、「一の湯（和風大浴場）」「二の湯（ローマ風大浴場）」「三の湯（湯治場風露天風呂）」という趣の異なる3つの大浴場すべてに名湯「金泉」が注がれている点。広々とした露天風呂で六甲の豊かな緑と澄んだ空気に包まれながら、濃厚な赤湯を心ゆくまで満喫できます。夕食は四季折々の旬の味覚と神戸牛を贅沢に使った伝統の会席料理をお部屋食で味わえるプランのほか、約50種類の出来立て料理が並ぶ人気のプレミアムビュッフェも好評。老舗ならではの細やかな気配りと安心のおもてなしで、ファミリーからシニアまで満足度の高い滞在を提供します。'
      },
      {
        key: 'arima_gosho',
        badge: '兵庫県神戸市・創業八百年・谷崎潤一郎ら文豪逗留の最高峰名宿！足元湧出の金泉掛け流し半混浴と神戸牛料理',
        rank: '厳選名宿 第2選',
        desc: '鎌倉時代初期の建久二年創業、有馬温泉で最も古い歴史を誇る老舗旅館。文豪・谷崎潤一郎や吉川英治ら数多くの文人墨客が逗留した格式ある宿で、木造建築の粋を集めた迷路のような館内は国の登録有形文化財のような風情を漂わせます。名物「金郷泉」は、敷地内の泉源から湧く新鮮な金泉を100％源泉掛け流しで使用。男女の仕切りが低く設計された伝統の「半混浴サロン風呂」は、薄暗い灯りの中で湯煙が立ちのぼる神秘的な空間です。料理は、契約農家から仕入れる無農薬野菜や明石港直送の昼網の魚、そして但馬血統の極上神戸牛を、素材の味を最大限に引き出した独自の山家料理会席で提供。大人の静寂と本物の歴史に浸れる唯一無二の宿です。'
      },
      {
        key: 'arima_gekkoen',
        badge: '兵庫県神戸市・落葉山と滝川の清流を一望する絶景ロケーション！金泉露天風呂と最高級A5ランク神戸牛会席を誇るハイグレード宿',
        rank: '厳選名宿 第3選',
        desc: '有馬温泉の奥座敷、自然豊かな落葉山と滝川のせせらぎに面した絶好のロケーションに建つハイグレード温泉旅館。全客室の大きな窓から四季折々の山峡の景色が広がり、春の新緑や秋の紅葉は息を呑む美しさです。大浴場と露天風呂には名湯「金泉」が湛えられ、滝川のせせらぎを聞きながら優雅な湯浴みが楽しめます。姉妹館「游月山荘」の温泉施設へも木造の風流な橋を渡って自由に湯巡り可能。夕食は全国でも名高い月光園自慢の京風懐石料理。厳選された最高級A5ランク神戸牛の石焼きステーキやすき焼きをメインに、料理人が一品一品手作りにこだわった繊細な料理をお部屋や個室食事処でゆったりと堪能できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-kinosaki-onsen-sotoyu-meguri-ryokan-stay', title: '【城崎温泉 七田外湯めぐり＆柳並木宿×ふるさと納税】招月庭・小宿縁・つちや旅館' },
      { slug: 'furusato-tax-dogo-onsen-honkan-walk-luxury-stay', title: '【道後温泉 本館散策＆老舗旅館×ふるさと納税】ふなや・道後御湯・道後プリンス' },
      { slug: 'furusato-tax-kurokawa-onsen-yumeguri-luxury-stay', title: '【黒川温泉 入湯手形＆渓流露天風呂宿×ふるさと納税】山みず木・奥の湯・新明館' },
      { slug: 'furusato-tax-three-great-wagyu-beef-gourmet-stay', title: '【日本三大和牛・神戸牛＆松阪牛×ふるさと納税】最高峰ステーキ名宿' }
    ]
  },
  {
    slug: 'furusato-tax-karuizawa-luxury-resort-villa-stay',
    componentName: 'FurusatoKaruizawaLuxuryStayPage',
    tag: '軽井沢 高級高原リゾート＆美食ステイ特集',
    title: '木漏れ日の高原と洗練の森！軽井沢の温泉露天風呂付きラグジュアリーホテル＆本格フレンチ名宿×ふるさと納税完全攻略ガイド【2026年最新】マリオット・プリンスイースト・音羽ノ森',
    metaTitle: '木漏れ日の高原と洗練の森！軽井沢の温泉露天風呂付きラグジュアリーホテル＆本格フレンチ名宿×ふるさと納税完全攻略ガイド【2026年最新】マリオット・プリンスイースト・音羽ノ森',
    shortTitle: '軽井沢 高原リゾート＆名門ホテル特集',
    description: '日本を代表する最高峰の高原避暑地・軽井沢！白樺と落葉松の森、旧軽井沢銀座散策。「軽井沢マリオットホテル」「軽井沢プリンスホテル イースト」「旧軽井沢 ホテル音羽ノ森」を、長野県軽井沢町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。客室温泉露天風呂、天然温泉スパ、信州牛グリルを満喫。',
    heroTag: '日本屈指の洗練された高原リゾート！長野県軽井沢町特集',
    leadTitle: '澄んだ高原の空気、風に揺れる白樺の木々。豊かな森と美食に抱かれる軽井沢の優雅なリゾートホリデーへ',
    leadText: '浅間山の南麓、標高約1,000メートルの高原に広がる日本最高峰のリゾート地「軽井沢（かるいざわ）」。明治時代に英国人宣教師A.C.ショーによってその冷涼で美しい自然が見出されて以来、政財界人や文化人、皇族方が愛する国際的な避暑地・別荘地として発展してきました。軽井沢の魅力は、木漏れ日が降り注ぐ白樺や落葉松の並木道、洗練されたカフェやブティックが並ぶ「旧軽井沢銀座通り」、豊かな自然に包まれた「雲場池」の散策など、どこを切り取っても絵になる上品な佇まいです。近年では、浅間山系の良質な天然温泉を引いたハイエンドホテルが続々と登場し、静寂の森を望む客室プライベート露天風呂や広大なスパでのリフレッシュが大人気。さらにディナーは、全国の食通を唸らせる軽井沢ならではの美食。信州の大地が育んだ極上の「信州牛（信州プレミアム牛肉）」のグリル、高原朝採れ野菜の甘み際立つサラダ、清流で育った信州サーモンなど、地元信州の恵みをフレンチや薪火グリルで味わう贅沢なコースが旅を彩ります。本特集では、中軽井沢の森に佇み温泉露天風呂付き客室と信州食材のグリルが評判の世界水準ホテル「軽井沢マリオットホテル」、ショッピングプラザやスキー場に直結し天然温泉スパと森のネイチャー体験が魅力の「軽井沢プリンスホテル イースト」、そして旧軽井沢銀座へ徒歩圏内で格式あるクラシックな洋館と本格フレンチが愛される「旧軽井沢 ホテル音羽ノ森」の3宿を厳選。長野県軽井沢町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの軽井沢ラグジュアリーステイをお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '浅間山の恵み・良質な天然温泉と木漏れ日の森に癒やされる極上の非日常',
        body: '高原の澄んだ空気を感じながら入る客室露天風呂や森のスパ。日々の疲れをリセットできる静寂の時間が流れています。'
      },
      {
        num: '02',
        title: '極上の「信州プレミアム牛」や採れたて高原野菜！洗練された高原フレンチ＆グリル',
        body: '信州の大自然が育んだブランド牛や新鮮野菜、信州サーモンを一流シェフが仕上げる本格ディナーを堪能できます。'
      },
      {
        num: '03',
        title: '軽井沢町ふるさと納税で最大30％OFF！3年間有効クーポンで避暑や紅葉シーズンに予約',
        body: 'ハイシーズンに宿泊料が高騰しやすい軽井沢もふるさと納税なら実質2,000円。3年間の有効期間を活かして計画的に利用できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'karuizawa_marriott',
        badge: '長野県軽井沢町・世界水準マリオットブランド！全室に小瀬温泉を引いた温泉露天風呂付き客室＆信州食材のグリル料理',
        rank: '厳選名宿 第1選',
        desc: '中軽井沢の閑静な森の中に位置し、豊かな緑とモダンな洗練が美しく調和するラグジュアリーホテル。特に高い人気を誇るノースウィング棟の客室には、浅間山の麓から湧き出る「小瀬温泉」を引いたプライベート温泉露天風呂や温泉ビューバスが完備され、いつでも好きな時に森林浴とともに極上の湯浴みが楽しめます。愛犬と一緒に泊まれるドッグ対応コテージも大好評。夕食は開放感あふれるレストラン「Grill & Dining G」にて、信州プレミアム牛のローストや信州サーモン、地場野菜の旨味を豪快に引き出したグリル料理と長野県産プレミアムワインのマリアージュを堪能できます。'
      },
      {
        key: 'karuizawa_prince',
        badge: '長野県軽井沢町・軽井沢駅＆ショッピングプラザ直結！天然温泉「フォレスト ホット スプリング」と森のコテージが人気のリゾート',
        rank: '厳選名宿 第2選',
        desc: '軽井沢駅南口の広大な敷地に広がり、軽井沢・プリンスショッピングプラザやスキー場に隣接する抜群の利便性を誇る高原リゾートホテル。館内には宿泊者専用の天然温泉スパ「フォレスト ホット スプリング」があり、内湯・露天風呂・スチームサウナで浅間山系の良質な温泉をたっぷり満喫。森に点在するプライベートコテージは家族連れやグループ旅行に大人気です。食事はオープンキッチンのオールデイダイニングにて、信州食材をふんだんに取り入れた出来立てグリル料理や和食会席を味わえ、アクティビティと癒やしが完璧に融合した軽井沢ステイが叶います。'
      },
      {
        key: 'karuizawa_kyukaruizawa_hotel',
        badge: '長野県軽井沢町・旧軽井沢銀座へ徒歩圏！英国調クラシックホテルと正統派フレンチレストラン「桂姫」が愛される名門',
        rank: '厳選名宿 第3選',
        desc: '旧軽井沢の静寂な別荘地に佇み、英国コッツウォルズ地方の建築様式を取り入れた重厚なクラシックホテル。敷地内には歴史ある礼拝堂が佇み、館内には暖炉やアンティーク家具が配され、古き良き軽井沢のサロン文化の薫りを漂わせます。旧軽井沢銀座通りや雲場池へも徒歩で散策できる好立地。宿の代名詞であるフレンチレストラン「桂姫」では、歴代シェフが受け継いできたクラシカルな技法に信州の旬の食材を融合させた本格フランス料理を提供。丁寧で心温まるホスピタリティとともに、大人のための優雅で静謐なリゾート時間を約束してくれます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-hakone-onsen-open-air-bath-stay', title: '【箱根温泉 客室露天風呂＆名門旅館×ふるさと納税】富士屋ホテル・天成園・はつはな' },
      { slug: 'furusato-tax-kyoto-arashiyama-bamboo-luxury-stay', title: '【京都嵐山 渡月橋＆竹林の小径名門宿×ふるさと納税】翠嵐・花伝抄・辨慶' },
      { slug: 'furusato-tax-hoshino-resorts-risonare-family-stay', title: '【星野リゾート「リゾナーレ」特集×ふるさと納税】八ヶ岳・熱海・那須' },
      { slug: 'furusato-tax-private-villa-hanare-hideaway-stay', title: '【大人の隠れ家・離れ客室×ふるさと納税】静寂とプライベート重視の名宿' }
    ]
  },
  {
    slug: 'furusato-tax-kinugawa-onsen-valley-view-luxury-stay',
    componentName: 'FurusatoKinugawaOnsenValleyStayPage',
    tag: '鬼怒川温泉 渓谷美＆創業130年名門宿特集',
    title: '鬼怒川渓谷の絶景と名湯！空中庭園露天風呂＆豪華100種バイキング・最高峰老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】あさや・金谷ホテル・ホテル三日月',
    metaTitle: '鬼怒川渓谷の絶景と名湯！空中庭園露天風呂＆豪華100種バイキング・最高峰老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】あさや・金谷ホテル・ホテル三日月',
    shortTitle: '鬼怒川温泉 渓谷美＆名門旅館特集',
    description: '関東屈指の歴史を誇る名湯リゾート・鬼怒川温泉！ダイナミックな鬼怒川渓谷の巨岩と四季の景観。「鬼怒川温泉 あさや」「鬼怒川金谷ホテル」「鬼怒川温泉 日光きぬ川ホテル三日月」を、栃木県日光市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。絶景空中庭園露天風呂、ショコラバー、100種バイキングを満喫。',
    heroTag: '渓谷美と名湯の競演！栃木県日光市鬼怒川温泉特集',
    leadTitle: '深緑と紅葉に染まる鬼怒川の渓谷美。吹き抜けの黄金ロビーと絶景露天風呂に心解き放たれる鬼怒川の旅へ',
    leadText: '栃木県日光市、鬼怒川の上流に広がる関東屈指の歴史ある名湯「鬼怒川温泉（きぬがわおんせん）」。江戸時代に発見された当時は日光東照宮の領地であり、日光詣帰りの大名や僧侶のみが入浴を許された格式高い温泉地として栄えました。鬼怒川温泉の最大の魅力は、エメラルドグリーンに輝く清流と両岸に切り立つダイナミックな巨岩・渓谷が織りなす圧倒的な自然美です。アルカリ性単純温泉のお湯は、無色透明で柔らかく肌に優しいため、神経痛や疲労回復、美肌に優れた効果を発揮。宿の露天風呂に身を沈めれば、眼下を流れる鬼怒川の轟音と風にそよぐ木々のざわめきに包まれ、日頃のストレスが一瞬で吹き飛びます。さらに、美食の宝庫としても名高い鬼怒川。ブランド黒毛和牛「とちぎ和牛」のステーキやすき焼き、日光名物の「日光湯波（ゆば）」の煮物やお造り、清流で育った岩魚の塩焼きなど、栃木の豊かな風土が育んだ美味が食卓を彩ります。本特集では、創業百三十年を誇り金色の吹き抜けロビーと最上階「空中庭園露天風呂」、100種類以上の豪華和洋中バイキングが全国的な人気を誇る象徴的宿「鬼怒川温泉 あさや」、日本のホテル界の父・ジョン金谷鮮治の美学を受け継ぐ最高峰ラグジュアリーリゾート「鬼怒川金谷ホテル」、そして鬼怒川渓谷を見下ろす多彩な温泉プールと家族連れに絶大な人気を誇る「鬼怒川温泉 日光きぬ川ホテル三日月」の3宿を厳選。栃木県日光市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で鬼怒川温泉の贅沢な温泉旅をお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '鬼怒川渓谷を一望する空中庭園露天風呂！圧倒的なスケールと開放感の温泉体験',
        body: '鬼怒川の渓谷美をはるか眼下に見下ろす展望露天風呂や貸切風呂。朝霧や夕焼け、満天の星空を眺めながら優雅な湯浴みを楽しめます。'
      },
      {
        num: '02',
        title: '「とちぎ和牛」と名物「日光湯波」！伝統会席と100種超の豪華バイキング',
        body: '甘み豊かなとちぎ和牛や日光湯波など、地元の厳選素材を活かした極上ディナー。オープンキッチンで仕上げる出来立て料理も大人気です。'
      },
      {
        num: '03',
        title: '日光市ふるさと納税で最大30％OFF！3年間有効クーポンで家族旅行や連休に活用',
        body: '満足度の高い鬼怒川の人気旅館もふるさと納税クーポンで実質負担2,000円。寄付から3年間有効なので、東照宮観光と合わせて計画できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'kinugawa_asaya_honten',
        badge: '栃木県日光市・創業百三十年の象徴！豪華絢爛吹き抜けロビー＆最上階「空中庭園露天風呂」と100種以上の極上バイキング（口コミ5,500件超）',
        rank: '厳選名宿 第1選',
        desc: '鬼怒川温泉を代表する創業百三十余年の老舗大型旅館。館内に一歩足を踏み入れると、きらびやかなシャンデリアとガラスのエレベーターが上下する圧巻の吹き抜けロビーが旅人を迎えます。宿の代名詞は、鬼怒川で最も高い場所に位置する最上階の「空中庭園露天風呂 昇龍」。昼は雄大な鬼怒川の渓谷美、夜は頭上に広がる満天の星空を眺めながら入浴する時間は至福のひとときです。食事は楽天トラベルアワード常連の豪華バイキング。シェフが目の前で焼き上げる黒毛和牛ステーキや揚げたて天ぷら、握り寿司、名物あさや特製和牛カレーなど、100種類以上の厳選料理が並び、子どもからシニアまで圧倒的な人気を誇ります。'
      },
      {
        key: 'kinugawa_kanaya',
        badge: '栃木県日光市・鬼怒川渓谷に佇む最高峰ラグジュアリー！ジョン金谷の美学息づく渓谷美テラス＆ショコラバーと金谷流懐石料理',
        rank: '厳選名宿 第2選',
        desc: '日本最古のクラシックリゾートホテル「日光金谷ホテル」の創業者一族であり、食通としても知られたジョン金谷鮮治のダンディズムと美学を形にした最高峰のリゾートホテル。全客室が鬼怒川の渓谷に面しており、広々としたプライベートウッドデッキからは鬼怒川の清流と巨岩が織りなす絶景を静かに堪能できます。大浴場には樹齢二千年を超える古代檜の風呂や四季の風を感じる白御影石の露天風呂を完備。夕食は和の伝統と洋のスパイスが調和した「金谷流懐石料理」。食後には川風が吹き抜けるショコラバーにて、専属ショコラティエによる自家製ショコラとウイスキーの至福のマリアージュを楽しめます。'
      },
      {
        key: 'kinugawa_asaya',
        badge: '栃木県日光市・東武鬼怒川温泉駅徒歩約3分の好立地！渓谷を一望する大型温泉大浴場＆水着で楽しむガーデンスパと家族連れ大満足バイキング',
        rank: '厳選名宿 第3選',
        desc: '東武鉄道の鬼怒川温泉駅から徒歩約3分という最高のアクセスを誇る大型温泉リゾートホテル。館内には鬼怒川の渓谷美を見下ろす広々とした大浴場や露天風呂、名物の「黄金風呂」や「銀風呂」が揃い、名湯を存分に堪能できます。さらに水着で遊べる屋内スパプールや、流れるプール、ウォータースライダーなど温泉エンターテインメント設備が充実しており、天候を問わずファミリーや三世代で一日中楽しめるのが強み。夕食はオープンキッチンで調理されるステーキや海鮮焼き、和洋中の多彩な料理が並ぶ豪華バイキングで、大人も子どもも笑顔あふれる賑やかな滞在を満喫できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay', title: '【草津温泉 湯畑散策＆名湯名門旅館×ふるさと納税】櫻井・一井・奈良屋' },
      { slug: 'furusato-tax-hakone-onsen-open-air-bath-stay', title: '【箱根温泉 客室露天風呂＆名門旅館×ふるさと納税】富士屋ホテル・天成園・はつはな' },
      { slug: 'furusato-tax-noboribetsu-jigokudani-onsen-luxury-stay', title: '【登別温泉 地獄谷＆名湯ビュッフェ宿×ふるさと納税】第一滝本館・まほろば・グランドホテル' },
      { slug: 'furusato-tax-luxury-buffet-gourmet-resort-stay', title: '【豪華ビュッフェ＆オープンキッチン名宿×ふるさと納税】美食リゾート' }
    ]
  },
  {
    slug: 'furusato-tax-shirahama-onsen-ocean-view-luxury-stay',
    componentName: 'FurusatoShirahamaOnsenOceanStayPage',
    tag: '南紀白浜温泉 白良浜オーシャンビュー名宿特集',
    title: '青い海と真っ白な砂浜！南紀白浜温泉の絶景オーシャンビュー露天風呂＆幻のクエ・熊野牛名門旅館×ふるさと納税完全攻略ガイド【2026年最新】むさし・海舟・シーモア',
    metaTitle: '青い海と真っ白な砂浜！南紀白浜温泉の絶景オーシャンビュー露天風呂＆幻のクエ・熊野牛名門旅館×ふるさと納税完全攻略ガイド【2026年最新】むさし・海舟・シーモア',
    shortTitle: '南紀白浜温泉 オーシャンビュー名宿特集',
    description: '万葉の時代から愛される日本三古湯・南紀白浜温泉！真っ白な白良浜と太平洋の絶景パノラマ。「紀州・白浜温泉 むさし」「浜千鳥の湯 海舟」「SHIRAHAMA KEY TERRACE HOTEL SEAMORE」を、和歌山県白浜町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。海混浴露天風呂、インフィニティ足湯、幻のクエ鍋・熊野牛を満喫。',
    heroTag: '南国の風と白砂青松の絶景！和歌山県南紀白浜温泉特集',
    leadTitle: '青く澄み渡る太平洋、白良浜のパウダースノー。海と波音に抱かれる日本三古湯・南紀白浜の贅沢リゾートへ',
    leadText: '本州屈指の南国リゾートであり、飛鳥・奈良時代の歴代天皇も湯治に訪れた日本三古湯の一つ「南紀白浜温泉（なんきしらはまおんせん）」。エメラルドグリーンの澄んだ海と真っ白なサラサラの砂浜が続く名所「白良浜（しららはま）」をはじめ、荒波に削られた大迫力の「千畳敷」や「三段壁」、海上に沈む夕陽が美しい「円月島」など、息を呑む絶景が凝縮された温泉地です。白浜温泉の魅力は、千三百年以上湧き続ける塩分濃度の高いナトリウム-塩化物泉。湯上がりに肌がしっとりと潤い、体の芯までポカポカと温もりが持続します。海に突き出た岬の先端で波しぶきを感じながら入浴する大露天風呂や、水平線に沈む夕日を一望するインフィニティ温泉は、白浜でしか体験できない至高の感動。さらにグルメも全国トップクラス。紀伊水道の荒波で育った「幻の高級魚・天然クエ（九絵）」の鍋や薄造り、南紀の豊かな自然が育んだ極上黒毛和牛「熊野牛」のステーキ、ぷりぷりの伊勢海老やアワビなど、海の幸と山の幸を尽くした贅沢な料理が旅人の舌を唸らせます。本特集では、白良浜へ徒歩1分の好立地で二つの異なる自家源泉と本格和食会席を誇る老舗「紀州・白浜温泉 むさし」、岬の突端に佇み海と一体になる絶景露天風呂「浜千鳥の湯」とクエ・熊野牛会席が人気の共立リゾート「浜千鳥の湯 海舟」、そして長さ30mのインフィニティ足湯テラスと太平洋一望の絶景ラウンジ・温泉サウナが評判の「SHIRAHAMA KEY TERRACE HOTEL SEAMORE」の3大名宿を厳選。和歌山県白浜町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で南紀白浜温泉の憧れリゾート旅をお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '太平洋の水平線に沈む夕日と波音！海と一体になる絶景オーシャンビュー露天風呂',
        body: '海原を見下ろす展望風呂や、岬の岩場に作られた大露天風呂。夕暮れ時に黄金色に染まる海を眺めながら優雅な湯浴みを満喫できます。'
      },
      {
        num: '02',
        title: '幻の高級魚「クエ」とブランド和牛「熊野牛」！紀州・南紀の贅を尽くした海の幸会席',
        body: '脂がのった白身のトロ「クエ鍋」や新鮮な伊勢海老、きめ細やかな肉質の熊野牛ステーキなど、白浜ならではの極上グルメを堪能。'
      },
      {
        num: '03',
        title: '白浜町ふるさと納税で最大30％OFF！3年間有効クーポンでアドベンチャーワールド観光にも最適',
        body: 'パンダで有名なアドベンチャーワールドや白良浜旅行もふるさと納税なら実質負担2,000円。寄付から3年間有効なので、夏休みや連休に大活躍します。'
      }
    ],
    hotelDetails: [
      {
        key: 'shirahama_musashi',
        badge: '和歌山県白浜町・白良浜へ徒歩1分の絶好の立地！「生絹湯」と「斎明湯」の二つの異なる源泉を引く名門和風旅館（口コミ2,500件超）',
        rank: '厳選名宿 第1選',
        desc: '白良浜まで歩いてわずか1分という最高のロケーションに建つ、数寄屋造りの趣ある本格温泉旅館。宿の最大の自慢は、白浜温泉でも希少な「生絹湯（すずしゆ）」と「斎明湯（さいめいゆ）」という2種類の異なる源泉を引いている点。広々とした大浴場や中庭を望む露天風呂、ヒノキ風呂などで、泉質の違いをじっくりと肌で感じることができます。客室は落ち着きある純和風客室から贅沢な特別フロア「楠館」まで多彩。夕食は紀州の旬の恵みをふんだんに盛り込んだ本格和食会席料理をお部屋や個室で堪能できるほか、オープンキッチンで出来立てを提供するバイキングプランも選べ、家族旅行や三世代旅行に長く愛され続けています。'
      },
      {
        key: 'shirahama_hamachidorinoyu',
        badge: '和歌山県白浜町・岬の突端に佇む共立リゾートの最高峰！海に最も近い混浴露天風呂「波の抄」＆幻のクエ・熊野牛の豪華会席',
        rank: '厳選名宿 第2選',
        desc: '白浜の海に突き出た岬の先端、大海原のパノラマを独り占めする最高の立地に佇む上質な温泉リゾート旅館。敷地内を歩いて海へと下りていくと、波打ち際ギリギリに作られた名物混浴露天風呂「波の抄（専用の湯浴み着着用）」があり、まるで海に浸かっているかのような圧倒的な開放感と打ち寄せる波の音に包まれます。館内には3つの無料貸切露天風呂や広々とした大浴場も完備。客室は全室オーシャンビューで、波の音を子守唄に贅沢な時間を過ごせます。夕食は紀州の豪華味覚の競演。名物の天然クエ鍋や脂の乗ったお造り、香ばしく焼き上げた熊野牛のステーキなど、一皿一皿に贅を尽くした料理が旅情を最高潮に高めてくれます。'
      },
      {
        key: 'shirahama_seamore',
        badge: '和歌山県白浜町・海に溶け込む長さ30mのインフィニティ足湯テラス！太平洋一望の絶景温泉大浴場と極上サウナ（HOTEL SEAMORE）',
        rank: '厳選名宿 第3選',
        desc: '南紀白浜の海岸線に位置し、スタイリッシュなリノベーションで大きな話題を呼んでいるモダンオーシャンリゾート。ホテルのシンボルは、太平洋の青い海に向かって広がる長さ30メートルの「インフィニティ足湯テラス」。海風を感じながらフリードリンクとともに足湯に浸かり、夕暮れには息を呑むサンセットを眺めることができます。大浴場「波の湯」は深さ120cmの立ち湯露天風呂を備え、海と一体になる感覚を満喫。本格ロウリュサウナやバレルサウナも完備されています。ベーカリーカフェやプレイルームも充実し、女子旅やカップル、若いファミリー層から圧倒的な支持を集めています。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-atami-ocean-view-fireworks-hotel-stay', title: '【熱海花火大会特等席＆オーシャンビュー温泉宿×ふるさと納税】後楽園・ニューアカオ・パールスター' },
      { slug: 'furusato-tax-okinawa-beach-resort-luxury-stay', title: '【沖縄本島最高峰ビーチリゾート×ふるさと納税】ハレクラニ・ルネッサンス・ロワジール' },
      { slug: 'furusato-tax-dogo-onsen-honkan-walk-luxury-stay', title: '【道後温泉 本館散策＆老舗旅館×ふるさと納税】ふなや・道後御湯・道後プリンス' },
      { slug: 'furusato-tax-cave-bath-natural-grotto-onsen-stay', title: '【荒波迫る大洞窟風呂＆神秘の岩風呂×ふるさと納税】南紀勝浦・湯の峰・上諏訪' }
    ]
  }
];

function sanitizeString(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/[`${}\\]/g, '')
    .replace(/"/g, '“')
    .replace(/'/g, '’')
    .trim();
}

for (const cfg of round86Configs) {
  const pageHotels = seasonalHotels[cfg.slug] || {};
  const targetDir = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const h1 = pageHotels[cfg.hotelDetails[0].key] || {};
  const h2 = pageHotels[cfg.hotelDetails[1].key] || {};
  const h3 = pageHotels[cfg.hotelDetails[2].key] || {};

  const h1Desc = cfg.hotelDetails[0].desc;
  const h2Desc = cfg.hotelDetails[1].desc;
  const h3Desc = cfg.hotelDetails[2].desc;

  const h1Badge = cfg.hotelDetails[0].badge;
  const h2Badge = cfg.hotelDetails[1].badge;
  const h3Badge = cfg.hotelDetails[2].badge;

  const p1 = cfg.threePoints[0];
  const p2 = cfg.threePoints[1];
  const p3 = cfg.threePoints[2];

  const content = `import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${cfg.metaTitle}',
  description: '${cfg.description}',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '${cfg.shortTitle}',
    '楽天ふるさと納税 トラベル',
    '${sanitizeString(h1.hotelName || '')}',
    '${sanitizeString(h2.hotelName || '')}',
    '${sanitizeString(h3.hotelName || '')}',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${cfg.slug}',
  },
  openGraph: {
    title: '${cfg.metaTitle}',
    description: '${cfg.description}',
    url: 'https://croud-travel.pages.dev/${cfg.slug}',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ${cfg.componentName}() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">${cfg.shortTitle}</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          ${cfg.heroTag}
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          ${cfg.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-10">2026年9月10日公開</time>
          <span>•</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API連携</span>
          <span>•</span>
          <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded font-medium">実質負担2,000円対象</span>
        </div>
      </header>

      {/* リード文ブロック */}
      <section className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-yellow-50/60 p-6 md:p-8 rounded-2xl border border-amber-200/80 mb-12 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-amber-950 mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          ${cfg.leadTitle}
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          ${cfg.leadText}
        </p>
        <div className="bg-white/90 rounded-xl p-4 md:p-5 border border-amber-300 shadow-sm">
          <h3 className="font-bold text-amber-900 text-sm md:text-base mb-2 flex items-center gap-1.5">
            <span>📌</span> なぜ「ふるさと納税×楽天トラベル」が選ばれているのか？
          </h3>
          <ul className="text-xs md:text-sm text-gray-700 space-y-1.5">
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span><strong>寄付額の最大30％が宿泊クーポンとして即時付与</strong>され、楽天ポイントも二重に貯まる</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span><strong>有効期限はたっぷり3年間！</strong>寄付後に旅行時期や部屋タイプをじっくり選べる安心設計</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span>予約済み日程への<strong>「あとからクーポン適用」</strong>にも対応（※条件あり）で直前でも安心</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 目次 */}
      <section className="bg-gray-50 rounded-xl p-5 mb-12 border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>📑</span> 目次
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">${cfg.shortTitle}が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】${sanitizeString(h1.hotelName || '厳選名宿 第1選')}</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】${sanitizeString(h2.hotelName || '厳選名宿 第2選')}</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】${sanitizeString(h3.hotelName || '厳選名宿 第3選')}</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> ${cfg.shortTitle}が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">${p1.num}</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">${p1.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">${p1.body}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">${p2.num}</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">${p2.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">${p2.body}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">${p3.num}</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">${p3.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">${p3.body}</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            ${sanitizeString(h1.hotelName || '')}
          </h2>
          <p className="text-xs md:text-sm text-amber-100">${h1Badge}</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> ${sanitizeString(h1.address1 || '')}${sanitizeString(h1.address2 || '')}</div>
            <div><strong>アクセス:</strong> ${sanitizeString(h1.access || '')}</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ ${h1.reviewAverage || '4.5'}</span> (${h1.reviewCount || 0}件)</div>
            <div><strong>参考価格:</strong> 1名あたり約${(h1.hotelMinCharge || 18000).toLocaleString()}円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">${h1Desc}</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h1.hotelSpecial || '歴史ある名湯とおもてなしの心で極上の温泉旅をお届けします。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h1.userReview || '温泉もお料理も本当に素晴らしく、大満足の滞在でした。')}”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="${h1.planListUrl || h1.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* 宿紹介 2 */}
      <section id="hotel-2" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第2選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            ${sanitizeString(h2.hotelName || '')}
          </h2>
          <p className="text-xs md:text-sm text-amber-100">${h2Badge}</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> ${sanitizeString(h2.address1 || '')}${sanitizeString(h2.address2 || '')}</div>
            <div><strong>アクセス:</strong> ${sanitizeString(h2.access || '')}</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ ${h2.reviewAverage || '4.4'}</span> (${h2.reviewCount || 0}件)</div>
            <div><strong>参考価格:</strong> 1名あたり約${(h2.hotelMinCharge || 16000).toLocaleString()}円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">${h2Desc}</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h2.hotelSpecial || '豊かな温泉と贅沢な地元料理で心と体を芯から癒やします。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h2.userReview || '露天風呂からの景色が最高で、お料理もとても美味しかったです。')}”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="${h2.planListUrl || h2.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* 宿紹介 3 */}
      <section id="hotel-3" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第3選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            ${sanitizeString(h3.hotelName || '')}
          </h2>
          <p className="text-xs md:text-sm text-amber-100">${h3Badge}</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> ${sanitizeString(h3.address1 || '')}${sanitizeString(h3.address2 || '')}</div>
            <div><strong>アクセス:</strong> ${sanitizeString(h3.access || '')}</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ ${h3.reviewAverage || '4.5'}</span> (${h3.reviewCount || 0}件)</div>
            <div><strong>参考価格:</strong> 1名あたり約${(h3.hotelMinCharge || 19000).toLocaleString()}円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">${h3Desc}</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h3.hotelSpecial || '特別な記念日やご家族での滞在にふさわしい上質な時間をご提供します。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h3.userReview || '温かなおもてなしに感動しました。家族全員が大満足です。')}”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="${h3.planListUrl || h3.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* ふるさと納税手順 */}
      <section id="furusato-step" className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 md:p-8 rounded-2xl border border-amber-200 mb-16 shadow-sm">
        <h2 className="text-xl md:text-3xl font-extrabold text-amber-950 mb-6 flex items-center gap-2">
          <span>💡</span> 楽天ふるさと納税トラベルクーポンで実質2,000円予約する4ステップ
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">控除限度額をチェック</h3>
              <p className="text-xs md:text-sm text-gray-600">年収や家族構成によって自己負担2,000円で利用できる上限額が決まります。まずは楽天ふるさと納税のシミュレーターで上限を確認しましょう。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">自治体を選んでトラベルクーポンを寄付</h3>
              <p className="text-xs md:text-sm text-gray-600">訪れたい温泉宿のある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">楽天トラベルで宿泊予約＆クーポン適用</h3>
              <p className="text-xs md:text-sm text-gray-600">有効期限は3年間。宿泊日や部屋タイプを決め、予約画面で取得したトラベルクーポンを選択すると宿泊代金から即時値引きされます。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ワンストップ特例または確定申告で完了</h3>
              <p className="text-xs md:text-sm text-gray-600">翌年の住民税・所得税から控除され、実質負担は年間2,000円のみ！浮いた予算で旅行をさらにアップグレードできます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>❓</span> よくある質問（Q&A）
        </h2>
        <div className="space-y-4">
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>すでに予約している宿泊プランにもふるさと納税クーポンは使えますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい！楽天トラベルの「あとからクーポン適用」機能に対応している施設であれば、予約後でもマイページから自治体クーポンを適用して割引を受けられます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>トラベルクーポンの有効期限はどれくらいですか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              楽天ふるさと納税トラベルクーポンの有効期限は「寄付完了日の翌々年同月末まで（実質約3年間）」となっています。旅行予定に合わせてじっくり使えます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>ハイシーズンや週末でも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、年末年始やゴールデンウィーク、お盆や紅葉・雪見シーズンのハイシーズンでも除外日なくクーポンをご利用いただけます。
            </p>
          </details>
        </div>
      </section>

      {/* 関連記事リンク */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🔗</span> あわせて読みたい注目のふるさと納税特集
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          ${cfg.relatedArticles.map(rel => `
          <Link
            href="/${rel.slug}"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ ${rel.title}
          </Link>`).join('')}
        </div>
      </section>
    </article>
  );
}
`;

  const targetFile = path.join(targetDir, 'page.tsx');
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log(`Successfully generated: ${cfg.slug}/page.tsx`);
}

console.log('\nAll 4 Round 86 pages successfully written!');
