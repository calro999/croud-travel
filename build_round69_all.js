const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// 4記事の詳細データ定義
const articleConfigs = [
  {
    slug: 'furusato-tax-all-inclusive-luxury-onsen-stay',
    componentName: 'FurusatoAllInclusiveLuxuryStayPage',
    tag: 'オールインクルーシブ＆フリーフロー極上温泉宿特集',
    title: 'オールインクルーシブで財布を気にせず寛ぐ極上温泉宿×ふるさと納税完全ガイド【2026年最新】作並・箱根宮ノ下・磐梯熱海',
    metaTitle: 'オールインクルーシブで財布を気にせず寛ぐ極上温泉宿×ふるさと納税完全ガイド【2026年最新】作並・箱根宮ノ下・磐梯熱海',
    shortTitle: 'オールインクルーシブ温泉名宿特集',
    description: 'チェックインからチェックアウトまで追加料金ゼロ！生ビール・ワイン・地酒のフリーフローや湯上がりアイス、上質なサロンでのカフェタイムを心ゆくまで堪能。広瀬川の渓流露天風呂と暖炉ラウンジが魅力の仙台作並「ゆづくしSalon一の坊」、全室露天風呂付き離れで極上のプライベートステイを提供する「Nazuna箱根宮ノ下」、福島の銘酒と美肌湯に酔いしれる磐梯熱海「浅香荘」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: 'オールインクルーシブ＆フリーフロー極上温泉宿特集',
    leadTitle: '生ビールもワインもラウンジスイーツも全て宿泊代金込み。お財布を部屋の金庫に預けて過ごす大人の休日へ',
    leadText: '「滞在中にドリンク代やアクティビティ代を気にせず、心の底からリラックスしたい」――そんな大人の旅人から圧倒的な支持を集めているのが「オールインクルーシブスタイルの温泉宿」です。チェックインした瞬間からウェルカムドリンクと特製スイーツが振る舞われ、湯上がり処では冷えた生ビールやアイスキャンディーが自由に楽しめ、夕食時のアルコールペアリングはもちろん、夜のバータイムやお夜食まで全てが無料。追加精算の煩わしさから完全に解放される快適さは一度体験すると病みつきになります。渓流沿いの露天風呂と広大なサロンで思い思いの時間を過ごせる仙台作並温泉の「ゆづくしSalon一の坊」、全室に専用露天風呂を備え上質な和モダン空間でフリーフローを満喫できる「Nazuna箱根宮ノ下」、そして福島の誇る美酒と源泉かけ流しを味わい尽くす磐梯熱海温泉の「浅香荘」。プレミアムなサービスが充実している分、通常料金は高めに設定されていますが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を活用すれば、実質自己負担2,000円で驚くほどお得に滞在可能です。何もしない贅沢に身を委ねる、最高峰のオールインクルーシブ温泉旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '滞在中の飲食・ラウンジ利用が全て無料！お財布いらずのストレスフリー滞在',
        body: '館内のラウンジやカフェ、食事処でのドリンクや軽食がすべて宿泊代金に含まれているため、会計のたびに財布を取り出したり明細を気にするストレスが一切ありません。チェックイン直後の生ビールから、読書のお供の挽きたてコーヒー、夕食時の地酒飲み比べまで、好きな時に好きなだけ自由に楽しめる究極の解放感を味わえます。'
      },
      {
        num: '02',
        title: '生ビール、スパークリングワイン、地酒、湯上がりスイーツまで贅沢フリーフロー',
        body: '多くの宿では、夕食時だけでなく湯上がり処や暖炉ラウンジでもアルコールやスイーツが提供されます。温泉で火照った身体に染み渡る冷たい生ビールやスパークリングワイン、地元蔵元自慢の銘酒、さらには濃厚なご当地アイスクリームや焼きマシュマロまで、五感を満たす多彩なサービスが旅の満足度を何倍にも引き上げます。'
      },
      {
        num: '03',
        title: '温泉街を散策しなくても宿の中だけで1日中満喫できる充実の館内アクティビティ',
        body: '暖炉を囲むライブラリーラウンジ、レコードの音色に浸るミュージックルーム、温泉卓球やボードゲーム、ヨガや朝の自然散策ツアーなど、館内だけで充実した1日を過ごせる仕掛けが満載。天候に左右されることなく、チェックインからチェックアウトまで館内のお気に入りスポットで思い思いの贅沢な時間を過ごせます。'
      }
    ],
    hotelDetails: [
      {
        key: 'sakunami_all_inclusive',
        badge: '宮城県仙台市・広瀬川渓流の絶景と暖炉サロンで寛ぐ名門温泉宿',
        rank: '厳選名宿 第1選',
        desc: '仙台の奥座敷・作並温泉の豊かな自然の中に佇む、「理想の日常の休息」をテーマにしたオールインクルーシブ温泉リゾート。広瀬川の清流に面した3つの異なる露天風呂では、せせらぎを聞きながら四季折々の渓谷美を堪能。広々とした「くつろぎSalon」では、挽きたて珈琲や生ビール、ワイン、手作りスイーツ、夜には特製おつまみやウィスキーが自由に楽しめます。夕食は料理人が目の前で焼き上げる宮城牛や旬の三陸魚介を出来たてで味わうオーダービュッフェスタイルで、心ゆくまで美食に浸れます。'
      },
      {
        key: 'hakone_all_inclusive',
        badge: '神奈川県箱根町・全室露天風呂付き離れと和モダンサロンの上質ステイ',
        rank: '厳選名宿 第2選',
        desc: '箱根登山鉄道・宮ノ下駅から徒歩すぐの好立地に佇み、全室に自家源泉の客室露天風呂を備えた大人の隠れ宿。宿泊者専用ラウンジでは、厳選されたワインや日本酒、クラフトビール、こだわりのソフトドリンクとフィンガーフードが常時フリーフロー。お部屋の温泉露天風呂で宮ノ下の豊かな自然を眺めながらプライベートに癒やされた後は、ラウンジで静かにグラスを傾ける優雅な時間が流れます。細部までこだわり抜かれた上質なホスピタリティが記念日やご褒美旅行に最適です。'
      },
      {
        key: 'bandai_all_inclusive',
        badge: '福島県郡山市・磐梯熱海温泉の美肌湯と銘酒ペアリングを愛でる宿',
        rank: '厳選名宿 第3選',
        desc: '「萩姫伝説」が残る名湯・磐梯熱海温泉に位置し、五感で楽しむおもてなしが評判の純和風旅館。館内では日本屈指の酒処・福島の銘酒やワイン、湯上がりビールが自由に楽しめるオールインクルーシブスタイルを導入。天然保湿成分メタケイ酸を豊富に含むトロリとした美肌の湯に浸かった後は、ラウンジで地酒とおつまみを片手にゆったりと休息。夕食には福島牛や地元契約農家の旬野菜を使った本格会席が並び、料理一品一品に合わせた地酒との極上マリアージュをご堪能いただけます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-luxury-hotspring-ryokan-stay', title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド' },
      { slug: 'furusato-tax-anniversary-luxury-suite-villa-stay', title: '【記念日・最高峰ヴィラ×ふるさと納税】特別な日を彩るプライベートプール＆温泉スイート' },
      { slug: 'furusato-tax-private-room-sauna-totonoi-villa-stay', title: '【客室専用サウナ＆ととのいヴィラ×ふるさと納税】セルフロウリュ＆天然水風呂宿' },
      { slug: 'furusato-tax-winery-craft-beer-auberge-stay', title: '【ワイナリー＆クラフトビールオーベルジュ×ふるさと納税】美酒と美肌温泉の極上ペアリング宿' }
    ]
  },
  {
    slug: 'furusato-tax-luxury-buffet-gourmet-resort-stay',
    componentName: 'FurusatoLuxuryBuffetGourmetStayPage',
    tag: '豪華バイキング＆ディナービュッフェ名門宿特集',
    title: '豪華ディナービュッフェ＆出来たてライブキッチン極上温泉宿×ふるさと納税完全ガイド【2026年最新】鬼怒川あさや・別府杉乃井・登別グランド',
    metaTitle: '豪華ディナービュッフェ＆出来たてライブキッチン極上温泉宿×ふるさと納税完全ガイド【2026年最新】鬼怒川あさや・別府杉乃井・登別グランド',
    shortTitle: '豪華ビュッフェ＆バイキング名門温泉宿特集',
    description: 'カニ・黒毛和牛ステーキ・握り寿司・旬スイーツが食べ放題！全国のバイキングランキングで常に頂点に君臨する名門ホテルを厳選。和洋中100種超の料理と空中庭園露天風呂を誇る日光鬼怒川「あさや」、別府湾を一望する棚湯と圧巻のワールドダイニング「別府温泉 杉乃井ホテル」、北海道の海の幸と庭園露天風呂を満喫する「登別グランドホテル」。家族旅行やグループ旅に最高の美食エンタメ温泉を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '豪華バイキング＆ディナービュッフェ名門宿特集',
    leadTitle: '目の前で焼き上がる極上ステーキ、揚げたて天ぷら、獲れたて海の幸。好きなものを好きなだけ味わう至福のビュッフェへ',
    leadText: '旅行の醍醐味といえば何と言っても美味しい食事。しかし、家族や仲間で好みが分かれたり、決まった献立の会席料理だと子どもが食べきれなかったりすることも。そんな悩みを一瞬で解決し、大人から子どもまで全員が満面の笑顔になれるのが「圧倒的なクオリティを誇る豪華ディナービュッフェ宿」です。職人が目の前で握る新鮮なお寿司、シェフがフランベして焼き上げる熱々の黒毛和牛ステーキ、サクサクの揚げたて天ぷら、そして季節のタルトやジェラートが並ぶ華やかなデザートコーナー――出来たての美味しさを五感で楽しむライブキッチンは、まさに食のエンターテインメント。全国バイキング宿ランキングで殿堂入りを果たす日光鬼怒川の老舗「あさや」、別府湾のパノラマ絶景風呂「棚湯」と巨大リゾート空間を擁する大分・別府の「杉乃井ホテル」、そして鬼の棲む名湯・登別温泉で北海道産食材尽くしのバイキングを誇る「登別グランドホテル」。家族みんなで泊まる大型リゾートは宿泊費がかさみがちですが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を活用すれば、実質自己負担2,000円で驚くほどお得に予約できます。お腹も心も満たされる、夢の美食バイキング温泉旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '職人技を間近で体感！出来たて熱々を提供する「ライブキッチン」の迫力',
        body: '名門ホテルのビュッフェは作り置きとは一線を画します。シェフが客の目の前で焼き上げるジューシーな国産牛ステーキや、板前が手際よく握る旬の地魚寿司、パティシエが目の前で仕上げる搾りたてモンブランなど、五感で味わうライブパフォーマンスが食欲を最高潮にかき立てます。'
      },
      {
        num: '02',
        title: '北海道の海鮮丼、宇都宮餃子、大分とり天！地域色豊かなご当地名物が勢揃い',
        body: '全国のバイキング名宿では、その土地ならではの郷土料理やご当地B級グルメコーナーが大充実。いくらやホタテを自分で好きなだけ盛り付ける勝手丼、日光湯波の創作料理、大分名物のりゅうきゅうや中津からあげなど、名産地を丸ごと食べ尽くす贅沢な味覚探訪が叶います。'
      },
      {
        num: '03',
        title: '子どもからシニアまで全員が大満足！三世代家族旅行でも好き嫌いの心配ゼロ',
        body: '離乳食やキッズ向けメニューから、シニアに嬉しい優しい味付けの和食小鉢、本格中華やイタリアンまで何でも揃うビュッフェは、三世代旅行に最もおすすめのスタイル。家族それぞれが自分の好きなペースで好みの料理を選べるため、全員が笑顔で楽しいディナータイムを過ごせます。'
      }
    ],
    hotelDetails: [
      {
        key: 'kinugawa_asaya_buffet',
        badge: '栃木県日光市・全国ビュッフェランキング殿堂入りの老舗名門ホテル',
        rank: '厳選名宿 第1選',
        desc: '創業130余年の歴史を誇り、圧巻の吹き抜けロビーが象徴的な鬼怒川温泉屈指の大型名門ホテル。夕食の「ブッフェ」は和洋中100種以上ものメニューが並び、全国のバイキング宿ランキングで常にトップクラスの評価を獲得。目の前で揚げるアツアツの天ぷらや本格石窯ピッツァ、あさや特製和牛カレー、ハーゲンダッツアイスや華やかなケーキバーなど、どれを食べても絶品揃いです。最上階の「空中庭園露天風呂」から望む鬼怒川の山並みと星空の絶景も旅を忘れられないものにしてくれます。'
      },
      {
        key: 'beppu_suginoi_buffet',
        badge: '大分県別府市・別府湾のパノラマ棚湯と圧巻のワールドビュッフェリゾート',
        rank: '厳選名宿 第2選',
        desc: '別府八湯の高台に位置し、別府湾と街並みを見下ろす圧倒的なスケールを誇る一大エンターテインメント温泉リゾート。段々畑状に広がる名物大展望露天風呂「棚湯」は開放感抜群。ビュッフェレストラン「TERRACE & DINING SORA」などでは、別府の湯けむりを感じながら、大分県産和牛のローストビーフや豊後水道の新鮮魚介、本格中華やエスニック料理まで世界水準の味覚が食べ放題。噴水ショーやボウリング場などアミューズメントも充実し、家族全員で一日中楽しめます。'
      },
      {
        key: 'noboribetsu_grand_buffet',
        badge: '北海道登別市・ドーム型ローマ風呂と北海道産食材尽くしのバイキング',
        rank: '厳選名宿 第3選',
        desc: '「登別の迎賓館」と称され、昭和13年創業の歴史と格式を誇る名門温泉ホテル。本格的なドーム型ローマ風大浴場や滝が流れ落ちる情緒豊かな庭園露天風呂で、食塩泉・硫黄泉・鉄泉の3つの名湯を満喫できます。夕食ビュッフェでは、北海道産の新鮮なホタテやサーモンの刺身、名物の熱々ジンギスカン、旬の野菜や乳製品を使った創作洋食など、北の大地の恵みが目白押し。熟練の料理人が仕上げる上質バイキングを心ゆくまでお楽しみいただけます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-three-generation-family-luxury-stay', title: '【3世代家族旅行×高額枠一括消化】親孝行＆孫と泊まる客室露天風呂・離れ宿完全ガイド' },
      { slug: 'furusato-tax-award-winning-breakfast-gourmet-hotel-stay', title: '【朝食受賞ホテル×ふるさと納税】地場産フルーツや焼きたてパンが自慢の贅沢モーニング' },
      { slug: 'furusato-tax-welcome-baby-family-kids-stay', title: '【赤ちゃん連れ安心×ふるさと納税】ウェルカムベビー認定宿＆貸切風呂完備の家族温泉旅' },
      { slug: 'furusato-tax-themepark-aquarium-family-hotel-stay', title: '【テーマパーク＆水族館直結×ふるさと納税】家族で遊び尽くす人気オフィシャルホテル' }
    ]
  },
  {
    slug: 'furusato-tax-solo-travel-retreat-private-onsen-stay',
    componentName: 'FurusatoSoloTravelRetreatStayPage',
    tag: 'ひとり旅・大人のご褒美温泉リトリート特集',
    title: '一人旅歓迎！誰にも気兼ねせず自分を癒やす極上おこもり温泉宿×ふるさと納税完全ガイド【2026年最新】箱根湯本・草津・由布院',
    metaTitle: '一人旅歓迎！誰にも気兼ねせず自分を癒やす極上おこもり温泉宿×ふるさと納税完全ガイド【2026年最新】箱根湯本・草津・由布院',
    shortTitle: 'おひとり様ご褒美温泉リトリート名宿特集',
    description: '日常の慌ただしさを離れて心と身体をリセット。一人旅歓迎の客室露天風呂付きプランや静寂の読書ラウンジを備えた大人のご褒美宿を厳選。都心からロマンスカーで直行できる箱根湯本「ホテル南風荘」、湯畑散策と天下の名湯を一人占めする草津温泉「薬師の湯 湯元館」、由布岳の麓で神秘の青湯に抱かれる「由布院温泉 束ノ間」。一人旅プラン充実の名宿に、楽天ふるさと納税トラベルクーポンで実質2,000円負担で宿泊する完全ガイド。',
    heroTag: 'ひとり旅・大人のご褒美温泉リトリート特集',
    leadTitle: '誰にも気を使わず、好きな時に温泉に浸かり、静かに自分と向き合う。贅沢極まりない「おひとり様ステイ」へ',
    leadText: '仕事や家事に追われる日々の中で、ふと「一人きりになって静かな場所でゆっくり休みたい」と感じる瞬間はありませんか？近年、一人旅を歓迎する上質な温泉旅館が急速に増えており、客室露天風呂付きのお部屋や部屋食プラン、落ち着いた読書ライブラリーを備えた宿が働く女性や大人の一人旅派から熱烈な支持を集めています。誰にも気兼ねすることなく、深夜や早朝の好きな時に湯船に浸かり、ベッドで本を読み耽り、美味しいお酒と料理をじっくり味わう――それは何者にも代えがたい最高峰のセルフケアです。都心から好アクセスで須雲川のせせらぎに癒やされる箱根湯本の「ホテル南風荘」、日本一の自然湧出量を誇る草津の湯元近くで名湯を堪能する「薬師の湯 湯元館」、そして由布岳の大自然の中で神秘のミルキーブルーの青湯と静寂に浸る大分由布院の「束ノ間」。一人旅向けの宿泊プランは割高になりがちですが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使えば、実質自己負担2,000円で驚くほどリーズナブルに憧れのおこもりステイが実現します。自分へのご褒美にふさわしい、至福のソロ温泉リトリートへ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '同伴者に気兼ねゼロ！滞在のスケジュールも温泉に入るタイミングも完全に自由',
        body: '誰かと行く旅行では食事の時間や行き先を合わせる必要がありますが、一人旅なら全てが思い通り。早朝の澄んだ空気の中で露天風呂に浸かるのも、昼寝をしてから遅めの温泉街散歩に出かけるのも自由。自分の体内時計に合わせて心のおもむくままに過ごすことで、深い精神的充足感が得られます。'
      },
      {
        num: '02',
        title: '一人利用でも安心な「客室露天風呂」や「お部屋食・個室食事処」プランが充実',
        body: '「大浴場で周囲の目が気になる」「一人で食事処に行くのが少し気恥ずかしい」という方でも安心。客室に専用露天風呂が付いたお部屋や、夕食をお部屋または仕切りのある個室ダイニングでいただけるプランを選ぶことで、プライバシーが完全に保たれた安心の休日が過ごせます。'
      },
      {
        num: '03',
        title: 'エステ・マッサージ・読書ラウンジで日頃のストレスや身体のコリを根底からデトックス',
        body: '名湯で血行を促進した後は、熟練セラピストによるアロマトリートメントや整体マッサージで身体の緊張を完全にほぐすのがおすすめ。静かなカフェラウンジで温かいハーブティーを飲みながら本の世界に没頭する時間は、忙しい日常では決して得られない最高の心の栄養になります。'
      }
    ],
    hotelDetails: [
      {
        key: 'hakone_solo_onsen',
        badge: '神奈川県箱根町・須雲川の渓流沿いに佇む露天風呂付き客室と癒やしの宿',
        rank: '厳選名宿 第1選',
        desc: '箱根湯本駅から車で約7分、須雲川のせせらぎと緑豊かな山々に包まれた落ち着きある温泉ホテル。一人旅歓迎の露天風呂付き客室プランが用意されており、テラスの信楽焼浴槽で箱根の天然温泉を独り占めできます。アルカリ性単純温泉のやわらかな湯は美肌効果が高く、長時間の入浴でも疲れ知らず。夕食はお部屋または個室風の落ち着いた食事処で季節の会席料理を味わえ、周囲を気にせずマイペースに寛ぐ大人のリトリートステイに最適です。'
      },
      {
        key: 'kusatsu_solo_onsen',
        badge: '群馬県草津町・湯畑まで徒歩すぐ！天下の名湯と家庭的な温もりの老舗宿',
        rank: '厳選名宿 第2選',
        desc: '草津温泉のシンボル「湯畑」から徒歩すぐの好立地に佇む、歴史ある小さな名湯旅館。酸性度の高い強烈な殺菌力と治癒力を持つ草津の名湯「白旗源泉」を引く内湯は、源泉かけ流しで24時間いつでも入浴可能。一人旅の受け入れにも非常に積極的で、女将さんの温かなもてなしと地元群馬の旬食材を使った手作りの和食膳が身体に染み渡ります。下駄と浴衣で湯畑周辺の足湯や共同浴場をぶらりと散策する、情緒豊かな一人旅が楽しめます。'
      },
      {
        key: 'yufuin_solo_onsen',
        badge: '大分県由布市・由布岳山麓に佇む神秘の青湯と離れの隠れ家温泉宿',
        rank: '厳選名宿 第3選',
        desc: '由布院の喧騒から離れた高台に位置し、大自然に溶け込む広大な敷地を持つ大人の隠れ宿。宿の自慢は、空気に触れることでコバルトブルーからミルキーブルーへと色彩を変える神秘の「青湯」。メタケイ酸を国内屈指の濃度で含み、とろりとした湯触りは極上の化粧水に浸かっているかのよう。客室は独立した離れスタイルで、由布岳の雄大な姿と鳥のさえずりをBGMに、静かに瞑想や読書を楽しむ贅沢な一人時間が約束されます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-solo-retreat-private-onsen-stay', title: '【一人旅・ソロ温泉リトリート×ふるさと納税】気兼ねなく心身を癒やす大人の宿' },
      { slug: 'furusato-tax-pure-kakenagashi-secret-hotspring-stay', title: '【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿' },
      { slug: 'furusato-tax-kura-sauna-private-villa-charter-stay', title: '【蔵サウナ＆一棟貸し切り×ふるさと納税】完全プライベート空間でととのう贅沢ステイ' },
      { slug: 'furusato-tax-shakyo-meditation-mindfulness-temple-stay', title: '【写経・座禅体験＆寺院宿坊×ふるさと納税】心と身体のデトックス宿' }
    ]
  },
  {
    slug: 'furusato-tax-retro-onsen-town-yukata-walk-stay',
    componentName: 'FurusatoRetroOnsenTownYukataStayPage',
    tag: '浴衣で巡るレトロ温泉街歩き＆外湯めぐり特集',
    title: '色浴衣と下駄で外湯めぐり＆レトロ温泉街歩き情緒の名宿×ふるさと納税完全ガイド【2026年最新】城崎・渋・銀山',
    metaTitle: '色浴衣と下駄で外湯めぐり＆レトロ温泉街歩き情緒の名宿×ふるさと納税完全ガイド【2026年最新】城崎・渋・銀山',
    shortTitle: '浴衣で巡るレトロ温泉街歩き名宿特集',
    description: 'カランコロンと下駄の音を響かせて歩く日本の原風景！柳並木の大谿川沿いに7つの外湯が連なる兵庫・城崎温泉「料理旅館 よしはる」、石畳の坂道と九つの外湯・厄除け巡浴が名物の長野・信州渋温泉「いかり屋旅館」、大正浪漫の木造建築群とガス灯が幻想的な山形「銀山温泉 古勢起屋別館」。色浴衣の無料貸出や名物湯めぐり手形が付いた情緒宿に、楽天ふるさと納税トラベルクーポンで実質2,000円負担で宿泊する完全ガイド。',
    heroTag: '浴衣で巡るレトロ温泉街歩き＆外湯めぐり特集',
    leadTitle: '柳並木の川辺、石畳に響く下駄の音、夕暮れのガス灯。浴衣に着替えてタイムスリップする日本の温泉街へ',
    leadText: '宿にチェックインしたら、お気に入りの色浴衣に袖を通し、下駄を鳴らしながら温泉街へ――。湯煙が立ち上るレトロな街並みを歩き、射的場や駄菓子屋を覗き、川沿いの足湯でひと休みしながら名物の外湯を巡る時間は、日本古来の温泉文化の最も美しい情景です。川沿いの柳並木と太鼓橋が絵画のように美しく「街全体が一つの宿」として親しまれる兵庫県・城崎温泉の老舗「料理旅館 よしはる」。昔ながらの石畳の坂道に九つの木造共同浴場が点在し巡浴手形を片手に巡る長野県・信州渋温泉の「いかり屋旅館」。そして大正から昭和初期の木造多層建築が銀山川を挟んで立ち並び、夕暮れにはガス灯が黄金色に輝く奇跡の景観を誇る山形県「銀山温泉 古勢起屋別館」。こうした歴史ある温泉街の人気旅館は予約が取りづらく宿泊単価も高めですが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使えば、実質自己負担2,000円で驚くほどお得に風情ある温泉街ステイが実現します。心躍るレトロな湯の町へ、浴衣姿で出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: 'お気に入りの色浴衣を選んで街へ！写真映え抜群のレトロノスタルジックな風景',
        body: '色鮮やかな女性用色浴衣や粋な男性用浴衣の無料レンタル、番傘や巾着袋の貸出サービスが充実。太鼓橋の上やガス灯が灯る夕暮れの川沿い、木造三層四層の歴史建築を背景に撮る浴衣姿の写真は、旅の最高の思い出の1枚になります。カップルや女子旅、夫婦旅行に絶大な人気を誇ります。'
      },
      {
        num: '02',
        title: '共同浴場巡りの醍醐味！城崎の「七湯めぐり」や渋温泉の「九湯めぐり」を満喫',
        body: '宿の宿泊者には外湯めぐりパス（デジタル湯めぐり券など）が配布され、個性豊かな外湯（共同浴場）を何度でも無料で利用可能。滝風呂、洞窟風呂、ヒノキ風呂など異なる趣や泉質を巡りながら、地元の人々との温かな触れ合いを楽しむ本物の湯治場体験が味わえます。'
      },
      {
        num: '03',
        title: '射的、スマートボール、温泉まんじゅう、地ビール！夜まで賑わう温泉街の夜散歩',
        body: '夕食後も温泉街の楽しみは続きます。昭和レトロな射的場やスマートボールで盛り上がり、湯上がりに地元のクラフトビールやできたてアツアツの温泉まんじゅうを頬張るひととき。夜風を感じながら下駄の音を響かせて歩く夜散歩は、日常を忘れさせる非日常の楽しさに満ちています。'
      }
    ],
    hotelDetails: [
      {
        key: 'kinosaki_yukata_walk',
        badge: '兵庫県豊岡市・城崎温泉の中心に建つ料理自慢の老舗情緒旅館',
        rank: '厳選名宿 第1選',
        desc: '城崎温泉のシンボルである大谿川の柳並木通りに近く、七つの外湯めぐりへ出かけるのに絶好のロケーションを誇る名門料理旅館。宿では色鮮やかな色浴衣の無料貸出を行っており、浴衣と下駄に着替えてすぐに風情ある湯の街へ繰り出せます。館内には24時間入浴可能な天然温泉大浴場も完備。夕食には世界最高峰の肉質を誇るブランド牛「但馬牛」のすき焼きやステーキ、冬には日本海名物の活松葉ガニ料理が贅沢に並び、至高の美食と湯めぐりの休日を堪能できます。'
      },
      {
        key: 'shibu_yukata_walk',
        badge: '長野県山ノ内町・信州渋温泉の石畳坂道に佇むノスタルジック宿',
        rank: '厳選名宿 第2選',
        desc: '千三百年の歴史を誇る信州渋温泉のメインストリート・石畳の小路沿いに佇む風情あふれる温泉宿。渋温泉名物の「九湯めぐり（厄除巡浴外湯めぐり）」の鍵を受け取り、手ぬぐいにスタンプを押しながら九つの外湯を巡る伝統体験が楽しめます。宿自慢の源泉かけ流し天然温泉は肌当たり滑らかで、身体の芯からポカポカに温まります。信州サーモンや信州牛、地元高原野菜を使った素朴で心温まる田舎会席料理が、旅情を優しく包み込みます。'
      },
      {
        key: 'ginzan_yukata_walk',
        badge: '山形県尾花沢市・銀山温泉の大正浪漫木造建築美とガス灯の宿',
        rank: '厳選名宿 第3選',
        desc: '大正浪漫の面影を今に伝える奇跡の温泉街・銀山温泉の川沿いに佇む木造建築の老舗別館。夕暮れ時になると銀山川の両岸に灯るガス灯と、川面に映るレトロな街並みは息を呑むほどの美しさ。宿のレトロな客室からはこの幻想的な温泉街を一望できます。源泉かけ流しの名湯で旅の疲れを癒やした後は、山形名物の尾花沢牛や山菜、鮎など地元の恵みを凝縮した手作り会席に舌鼓。まるで大正時代にタイムスリップしたかのような特別な宿泊体験をお楽しみください。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-japan-oldest-classic-hotel-heritage-stay', title: '【日本最古のクラシックホテル×ふるさと納税】時を超える名門建築ヘリテージステイ' },
      { slug: 'furusato-tax-kominka-heritage-townhouse-auberge-stay', title: '【古民家再生・町家オーベルジュ×ふるさと納税】築100年の重伝建商家に泊まる旅' },
      { slug: 'furusato-tax-three-great-ancient-baths-heritage-stay', title: '【日本三古湯×ふるさと納税】道後・有馬・白浜の悠久の湯守り宿完全ガイド' },
      { slug: 'furusato-tax-onsen-steam-natural-hotspring-healing-stay', title: '【湯煙・地獄蒸し＆砂むし温泉×ふるさと納税】別府鉄輪・指宿・雲仙の大地熱スチーム宿' }
    ]
  }
];

function generateFullPageCode(cfg) {
  const pageHotels = seasonalHotels[cfg.slug] || {};

  const threePointsHtml = cfg.threePoints.map(pt => `
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  ${pt.num}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  ${pt.title}
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                ${pt.body}
              </p>
            </div>
  `).join('\n');

  const hotelCardsHtml = cfg.hotelDetails.map((det, idx) => {
    const h = pageHotels[det.key] || {};
    const hotelName = h.hotelName || '提携名門ホテル・旅館';
    const hotelImg = h.hotelImageUrl || 'https://img.travel.rakuten.co.jp/share/HOTEL/28670/28670.jpg';
    const reviewAvg = h.reviewAverage || '4.50';
    const reviewCount = h.reviewCount || '100';
    const address = (h.address1 || '') + (h.address2 || '');
    const access = h.access || '最寄り駅・インターチェンジより車または無料送迎あり';
    const minCharge = h.hotelMinCharge ? Number(h.hotelMinCharge).toLocaleString() : '15,000';
    const planUrl = h.affiliateUrl || `https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F${h.hotelNo}%2F${h.hotelNo}.html`;

    const cleanText = (h.userReview || '')
      .replace(/<[^>]*>/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/[\\`$"{}]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    const userReview = cleanText
      ? ('「' + cleanText.slice(0, 120) + '…」')
      : '訪れるすべてのお客様に心安らぐ贅沢な寛ぎの時間を提供し、高い評価を獲得している極上宿です。';

    return `
            {/* ホテルカード ${idx + 1} */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="${hotelImg}"
                  alt="${hotelName}"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  ${det.rank}
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ ${reviewAvg} (${reviewCount}件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    ${det.badge}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    ${hotelName}
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    ${det.desc}
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    ${userReview}
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> ${address}</div>
                    <div><strong>アクセス:</strong> ${access}</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約${minCharge}円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="${planUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    `;
  }).join('\n');

  const relatedListHtml = cfg.relatedArticles.map(rel => `
              <li key="${rel.slug}">
                <Link href="/${rel.slug}" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">${rel.title}</span>
                </Link>
              </li>
  `).join('\n');

  return `import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '${cfg.metaTitle}',
  description: '${cfg.description}',
  keywords: [
    '${cfg.heroTag}',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    'ホテル バイキング クーポン',
    'オールインクルーシブ 割引'
  ],
  alternates: { canonical: baseUrl + '/${cfg.slug}' },
  openGraph: {
    title: '${cfg.metaTitle}',
    description: '${cfg.description}',
    url: baseUrl + '/${cfg.slug}',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function ${cfg.componentName}() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '${cfg.shortTitle}', item: baseUrl + '/${cfg.slug}' },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <Link href="/travel-savings-guide" className="hover:text-stone-900 underline transition">旅行節約ハブ</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">${cfg.shortTitle}</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ${cfg.heroTag}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            ${cfg.title}
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            ${cfg.leadText}
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当が宿泊クーポンに</span>
            <span>✓ クーポン有効期限は発行からゆとりの3年間</span>
            <span>✓ すでに予約済みの宿泊にも「あとから割引」可能</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              楽天ふるさと納税トラベルクーポンを獲得する →
            </a>
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-amber-200 font-bold px-5 py-3 rounded-2xl border border-amber-300/20 text-xs sm:text-sm transition"
            >
              📖 初めての方向け完全マニュアル
            </Link>
          </div>
        </header>

        {/* 3つの醍醐味セクション */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-6 flex items-center gap-3">
            <span className="text-amber-600 text-xl md:text-2xl">◆</span>
            この旅で体感したい3つの醍醐味
          </h2>
          <div className="grid gap-6">
${threePointsHtml}
          </div>
        </section>

        {/* 厳選名宿セクション */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-3 flex items-center gap-3">
              <span className="text-amber-600 text-xl md:text-2xl">◆</span>
              ふるさと納税で泊まる厳選名宿
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              楽天トラベルAPIから最新の実在宿データを取得。対象自治体のふるさと納税クーポンを利用して実質2,000円で泊まれる名宿です。
            </p>
          </div>

          <div className="space-y-8">
${hotelCardsHtml}
          </div>
        </section>

        {/* ふるさと納税クーポン使い方ステップ */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm mb-16">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-6 text-center">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">旅行先自治体に寄付</h3>
              <p className="text-xs text-stone-600 leading-relaxed">楽天ふるさと納税で泊まりたい宿がある市町村のトラベルクーポンを選んで寄付します。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">クーポンが付与される</h3>
              <p className="text-xs text-stone-600 leading-relaxed">寄付完了後、楽天トラベルのマイクーポンに即時〜数日で付与（有効期間は3年間）。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">予約時に割引適用</h3>
              <p className="text-xs text-stone-600 leading-relaxed">宿泊予約画面でクーポンを選択。すでに予約済みの宿でも「あとから適用」が可能です。</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="text-amber-800 font-bold text-xs sm:text-sm hover:underline"
            >
              👉 詳しいお金の流れやワンストップ特例の手順はこちらの完全マニュアルへ
            </Link>
          </div>
        </section>

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">
${relatedListHtml}
          </ul>
        </section>

        {/* ハブページへの誘導フッター */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-900/40 text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 text-amber-50">
            もっとお得に旅を楽しむためのハブページへ
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
            全国のテーマ別宿特集や、旅行費を最大30％安くする裏ワザを網羅した総合ガイドを公開中。
          </p>
          <Link
            href="/travel-savings-guide"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition text-sm"
          >
            🏨 旅行節約総合ハブページを見る ➔
          </Link>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-6 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の情報です。最新の宿泊プラン・クーポン対象施設は楽天トラベルにてご確認ください。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
`;
}

// 4記事のファイルを書き出し
for (const cfg of articleConfigs) {
  const targetDir = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const code = generateFullPageCode(cfg);
  fs.writeFileSync(path.join(targetDir, 'page.tsx'), code, 'utf8');
  console.log(`Generated: ${cfg.slug}/page.tsx (Chars: ${code.length})`);
}

console.log('Finished generating all 4 articles for Round 69!');
