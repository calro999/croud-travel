const fs = require('fs');
const path = require('path');

const round97Hotels = JSON.parse(fs.readFileSync('round97_hotels.json', 'utf8'));

// Convert to lookup map
const allHotels = {};
for (const [slug, arr] of Object.entries(round97Hotels)) {
  allHotels[slug] = {};
  for (const item of arr) {
    allHotels[slug][item.key] = item.hotel;
  }
}

const articles = [
  {
    slug: 'furusato-tax-gora-onsen-private-roten-luxury-stay',
    title: '【箱根・強羅温泉×ふるさと納税】全室客室露天風呂付き極上宿特集！記念日・ご褒美おこもり温泉旅館ガイド｜佳ら久・白檀・雪月花',
    desc: '都心から好アクセスの箱根屈指の高級リゾート地・強羅温泉を楽天ふるさと納税でお得に贅沢ステイ！全室客室温泉露天風呂完備の「箱根・強羅 佳ら久」、三千七百坪の森林と自家源泉掛け流しを誇る「箱根強羅 白檀」、全室檜露天風呂と駅前好立地の「季の湯 雪月花」を徹底解説。箱根町トラベルクーポンの賢い活用法を完全網羅。',
    keywords: '強羅温泉 ふるさと納税,箱根 客室露天風呂 ふるさと納税,強羅 佳ら久 ふるさと納税,箱根強羅 白檀 クーポン,雪月花 ふるさと納税 箱根町',
    targetCity: '神奈川県箱根町',
    leadTitle: '喧騒を離れ、誰にも邪魔されない至福の時間——強羅温泉の客室露天風呂で過ごす最上級のおこもりステイ',
    leadP1: '神奈川県足柄下郡箱根町、早雲山の東斜面に広がる強羅（ごうら）温泉。明治・大正期より政財界人や文人墨客の避暑地・別荘地として拓かれ、今なお品格と静寂をたたえる日本屈指の高級温泉保養地です。強羅温泉の大きな特徴は、透明な単純温泉、乳白色の酸性硫酸塩泉、淡い濁り湯など「五色・多泉質」が楽しめること。標高約500メートルから600メートルの高原に位置するため、夏は涼やかで、秋には箱根連山の見事な紅葉、冬には澄み切った空気の中で満天の星を仰ぐことができます。',
    leadP2: 'そんな強羅で近年圧倒的な人気を誇るのが、客室に専用の温泉露天風呂を備えたプライベート重視のラグジュアリーステイです。大浴場へ移動することなく、24時間好きな時に好きなだけ湯浴みを愉しみ、鳥のさえずりや木々の葉擦れの音に耳を傾ける贅沢。夕食には旬の山海の幸を活かした極上の創作懐石に舌鼓を打ち、おこもりならではの濃密な癒やしを堪能できます。神奈川県箱根町へのふるさと納税返礼品である「楽天トラベルクーポン」を活用すれば、寄付額の30%相当の割引が受けられ、憧れの名門宿への宿泊がぐっと身近になります。',
    hotelsKey: 'furusato-tax-gora-onsen-private-roten-luxury-stay',
    hotelItems: [
      {
        key: 'gora_karaku',
        tagline: '全室に温泉露天風呂を完備！森と海の絶景テラス＆五感を解き放つプレミアムラグジュアリーリゾート',
        detailTitle: '箱根・強羅 佳ら久（からく） —— 深い森と空に抱かれる。バルコニー露天風呂と贅を尽くした大人の特等席',
        features: [
          { title: '全客室テラスに備えられた専用温泉露天風呂', desc: '全客室の広々としたバルコニーに客室露天風呂を完備。強羅の清澄な風を感じながら、箱根連山の緑や相模湾の遠景を眺めてプライベートな湯浴みに浸ることができます。' },
          { title: '絶景の展望露天風呂「明星の湯」と「蒼海の湯」', desc: '最上階には強羅の大自然を一望する二つの展望露天風呂。箱根外輪山を見渡すパノラマビューと、移り変わる空の色を映す水盤テラスが非日常を演出します。' },
          { title: '二つのシグネチャーダイニングで味わう極上ディナー', desc: '旬の贅沢食材を繊細に仕立てた会席料理「六 rhenium（ろく）」と、シェフが目の前で厳選肉や海鮮を焼き上げる鉄板焼「十邑（とむら）」。美食の極みを堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.61点、口コミ500件超。「全室露天風呂からの景色が最高で、アメニティやラウンジサービスも超一流」「記念日宿泊に選んで心から感動した」と絶大な支持を獲得しています。'
      },
      {
        key: 'gora_byakudan',
        tagline: '三千七百坪の落葉樹林に佇む美宿！全室自家源泉掛け流し露天風呂と天然白檀の芳香が誘う極上空間',
        detailTitle: '箱根強羅 白檀（びゃくだん） —— 香りと静寂の隠れ家。贅沢な黄金色の自家源泉をお部屋で心ゆくまで',
        features: [
          { title: '全十六室すべてに配された自家源泉掛け流し露天風呂', desc: '敷地内から自噴する貴重な自家源泉を全客室の露天風呂に掛け流しで使用。微黄透明でとろみのあるナトリウム塩化物泉が、疲れた身体の芯まで優しく温めてくれます。' },
          { title: '心地よい香木の芳香と現代アートが彩る静謐のサロン', desc: '館内に漂う高貴な白檀の香りと、宮脇愛子氏の彫刻をはじめとする現代アートの数々。落葉樹林の借景と調和したロビーラウンジで贅沢な寛ぎのひとときを過ごせます。' },
          { title: '真鶴や相模湾の旬魚と旬の地元野菜が競演する創作懐石', desc: '近海で揚がる鮮魚や足柄の豊かな恵みを一皿一皿美しく盛り付けた懐石料理。器や盛り付けの美しさ、出汁の奥深い味わいに至るまで細やかな職人技が光ります。' }
        ],
        reviewPoints: '楽天トラベル評価4.83点の驚異的高得点。「お部屋のお風呂の泉質が素晴らしく何度も入った」「白檀の香りと静かな空間、心のこもった接客に感服した」と最高峰の評価。'
      },
      {
        key: 'gora_setsugetsuka',
        tagline: '全客室に檜の露天風呂完備！強羅駅徒歩1分の抜群アクセスと二つの自家源泉で愉しむ湯巡り',
        detailTitle: '季の湯 雪月花（せつげつか） —— 和の情緒あふれる大人気宿。檜香る客室露天と趣異なる無料貸切風呂',
        features: [
          { title: '全室のバルコニーに設えられた風情ある檜露天風呂', desc: '全室に天然檜造りの露天風呂を完備。湯船に張られたお湯に浸かりながら、そよぐ風と木の香りに包まれてプライベートなひとときを楽しめます。' },
          { title: '二つの自家源泉を引く大浴場と趣異なる三つの貸切露天', desc: '強羅の二大源泉を引き込んだ大浴場「玉桂の湯」に加え、巨岩風呂や野趣あふれる三つの無料貸切露天風呂を完備。館内だけで充実した湯巡りが叶います。' },
          { title: '選べる夕食スタイル「和食会席」または「牛しゃぶ・寿司」', desc: '日本海の鮮魚や旬菜を盛り込んだ「四季彩鍋と和食会席」、または厳選国産牛しゃぶしゃぶと握り寿司のコースから好みに合わせて選べる満足度の高い夕食。' }
        ],
        reviewPoints: '楽天トラベル評価4.25点、口コミ8200件超という圧倒的実績。「強羅駅目の前で観光に便利」「お部屋の檜風呂と無料の夜鳴きそばサービスが嬉しい」と高い人気を誇ります。'
      }
    ],
    areaGuide: {
      title: '強羅温泉・アートと自然を巡るおすすめ観光ガイド',
      points: [
        { name: '箱根強羅公園の散策とクラフト体験', text: '大正3年に開園された日本初のフランス式整型庭園。四季折々の花々が咲き誇る温室や噴水池のほか、クラフトハウスでは吹きガラスや陶芸体験が楽しめます。' },
        { name: '彫刻の森美術館での野外アート鑑賞', text: '広大な緑の芝生に国内外の名匠による彫刻作品が調和する野外美術館。ピカソ館やステンドグラスの塔など、自然光の中で感性を刺激するアート体験が魅力です。' },
        { name: '箱根登山鉄道＆ケーブルカーでの車窓トリップ', text: 'あじさい電車や紅葉の名所として名高い箱根登山鉄道。スイッチバックを繰り返しながら急勾配を登る旅路は、箱根ならではの風情を満喫できます。' }
      ]
    },
    furusatoStepTitle: '神奈川県箱根町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「神奈川県箱根町」クーポンを獲得', desc: '楽天ふるさと納税で箱根町を寄付先に選び、寄付額の30%相当となるトラベルクーポンを返礼品として申し込みます。楽天ポイントの還元も受けられます。' },
      { step: 'Step 2: 発行から3年間の有効期間内で温泉旅行を計画', desc: 'クーポンは取得後即時〜翌日にアカウントに付与され、有効期限はたっぷり3年間。記念日や誕生日のご褒美旅行に合わせてゆったり日程を決められます。' },
      { step: 'Step 3: 楽天トラベルの予約画面でクーポンを適用して予約完了', desc: '佳ら久、白檀、雪月花などの対象客室（露天風呂付き客室プラン等）を選択し、決済画面でクーポンを適用すれば宿泊料金から大幅割引されます。' }
    ]
  },
  {
    slug: 'furusato-tax-noboribetsu-onsen-buffet-gourmet-stay',
    title: '【登別温泉×ふるさと納税】豪華バイキング＆名湯大浴場！北海道三大蟹と地獄谷の絶景を巡る宿ガイド｜まほろば・第一滝本館・登別グランドホテル',
    desc: '日本有数の温泉大国・北海道登別温泉を楽天ふるさと納税でお得に満喫！三大蟹食べ放題ビュッフェと全31の湯巡りを誇る「ホテルまほろば」、千五百坪の大浴場に5つの源泉を引く老舗「第一滝本館」、庭園露天風呂と鬼サウナが話題の「登別グランドホテル」を徹底比較。登別市トラベルクーポン活用術を網羅。',
    keywords: '登別温泉 ふるさと納税,登別温泉 バイキング かに,ホテルまほろば ふるさと納税,第一滝本館 クーポン,登別グランドホテル ふるさと納税',
    targetCity: '北海道登別市',
    leadTitle: '地獄谷から湧き出る奇跡の九重泉——圧倒的なスケールの名湯と北海道グルメビュッフェを極める旅',
    leadP1: '北海道登別市に位置する登別（のぼりべつ）温泉は、江戸時代からその名を知られ、全国の温泉ランキングでも常に上位に君臨する日本屈指の温泉地です。毎分3,000リットルもの湯が湧出する源泉地「地獄谷」は、白煙が立ち上り硫黄の香りが立ち込める大迫力の光景。登別の最大の特徴は、硫黄泉、食塩泉、明礬泉、芒硝泉、緑礬泉、重曹泉など、実に9種類もの異なる泉質が同一地域から湧き出ている点にあり、「温泉のデパート」とも称されています。',
    leadP2: '温泉と並ぶ登別旅行の大きな醍醐味が、北海道ならではの豪快な味覚バイキングです。タラバガニ・ズワイガニ・毛ガニの食べ比べをはじめ、目の前で焼き上げられる十勝牛ステーキ、新鮮なイクラやサーモンを山盛りに盛る海鮮丼など、北の大地の恵みを心ゆくまで堪能できます。登別市へのふるさと納税を活用すれば、寄付額の30%相当の楽天トラベルクーポンが付与され、名湯と美食バイキングを誇る名門宿へお得に宿泊可能。家族旅行やグループ旅行、グルメ旅に最高の選択肢です。',
    hotelsKey: 'furusato-tax-noboribetsu-onsen-buffet-gourmet-stay',
    hotelItems: [
      {
        key: 'noboribetsu_mahoroba',
        tagline: '日本最大級の露天風呂と全三十一の湯船！三大蟹食べ放題の豪華北海道ディナービュッフェ',
        detailTitle: '登別温泉 ホテル まほろば —— 圧巻の湯巡りと海鮮三昧。家族みんなが笑顔になる登別屈指のエンタメ温泉リゾート',
        features: [
          { title: '地下二階・三階に広がる日本最大級の大浴場と全三十一の湯船', desc: '硫黄泉・食塩泉・単純泉・酸性鉄泉の四種類の泉質を引く広大な大浴場。緑豊かな渓谷を望む露天風呂や檜風呂、打たせ湯など、館内だけで贅沢な湯巡りを完結できます。' },
          { title: 'タラバガニ・ズワイガニ・毛ガニが並ぶ名物ディナービュッフェ', desc: 'レストラン「リバティ」や「グリーンテラス」で提供される大人気ビュッフェ。身の詰まった蟹の食べ放題はもちろん、握り寿司や揚げたて天ぷら、北海道スイーツがずらりと並びます。' },
          { title: 'ファミリーからシニアまで快適に寛げる多彩な客室バリエーション', desc: '和室、洋室、和洋室のほか、展望風呂付きのスイートルームまで完備。三世代旅行でも安心して快適な滞在を満喫できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.24点、口コミ5300件超。「とにかくカニの身がぎっしりで美味しく、お風呂の広さと種類の多さに圧倒された」「子供も大人も大満足」と絶賛の声が寄せられています。'
      },
      {
        key: 'noboribetsu_daiichi',
        tagline: '創業百六十有余年・千五百坪の大浴場に五つの源泉！地獄谷を真正面に望む登別温泉の象徴',
        detailTitle: '登別温泉 第一滝本館 —— 名湯の歴史を紡ぐ老舗。地獄谷のパノラマを望む大浴場と充実の和洋ビュッフェ',
        features: [
          { title: '千五百坪・三十五の湯船に五つの天然源泉を湛える「温泉天国」', desc: '創業者の滝本金蔵が妻の皮膚病を治すために開いた名湯。硫黄泉・芒硝泉・酸性緑礬泉・食塩泉・重曹泉の五つの源泉を24時間いつでも堪能できる唯一無二の大浴場です。' },
          { title: '地獄谷を真正面に望む圧巻のパノラマビュー露天風呂', desc: '窓一面、そして露天風呂の目の前に広がる迫力の地獄谷。立ち上る湯けむりと季節ごとの大自然の息吹を感じながら、至福の入浴体験が味わえます。' },
          { title: '北海道の旬菜と海鮮をライブキッチンで味わうビュッフェ', desc: 'オープンキッチンで焼き上げるステーキや揚げたて天ぷら、新鮮な刺身や郷土料理が並ぶ豪華ビュッフェ。季節の食材をふんだんに取り入れた料理が並びます。' }
        ],
        reviewPoints: '楽天トラベル評価4.56点、口コミ6200件超。「お風呂のスケールが世界一レベルで素晴らしい」「地獄谷が目の前で散策にも最高、ビュッフェも種類豊富で美味しい」と名門ならではの絶賛評価。'
      },
      {
        key: 'noboribetsu_grand',
        tagline: '昭和十三年創業・登別の迎賓館！本格ドーム型大浴場と滝見の露天風呂、話題の「鬼サウナ」',
        detailTitle: '登別温泉 登別グランドホテル —— クラシカルな気品と革新。滝の流れる露天風呂とサウナー垂涎の本格ロウリュ',
        features: [
          { title: 'ローマ風の本格ドーム型大浴場と大庭園の滝見露天風呂', desc: 'モダンな円形ドームの大浴場と、四季の庭園に滝が流れる野趣あふれる露天風呂。食塩泉・硫黄泉・鉄泉の三つの泉質を心ゆくまで味わえます。' },
          { title: 'サウナシュラン受賞！鬼をテーマにした本格オートロウリュ「鬼サウナ」', desc: 'サウナ愛好家から熱烈な支持を集める鬼サウナ。登別の鬼伝説をモチーフにした強烈なオートロウリュと、樽水風呂・外気浴デッキで極上の「ととのい」を体験できます。' },
          { title: 'シェフ特製の本格ローストビーフと季節の和洋中ビュッフェ', desc: '洋食に定評のある老舗ホテルならではのハイレベルなビュッフェ。ジューシーなローストビーフや出来立てパスタ、北海道産乳製品を使ったデザートも大人気です。' }
        ],
        reviewPoints: '楽天トラベル評価4.45点、口コミ3800件超。「鬼サウナの熱波と水風呂が最高で庭園露天風呂も素晴らしい」「料理のクオリティが高く、館内の落ち着いたクラシカルな雰囲気が心地よい」と評判です。'
      }
    ],
    areaGuide: {
      title: '登別温泉・地獄谷散策と大自然体感ガイド',
      points: [
        { name: '登別地獄谷の遊歩道散策と大湯沼', text: '火口跡から白い水煙と硫黄泉が噴出する地獄谷。整備された木道を歩いて展望台へ向かえば、地球の息吹を間近に感じる大パノラマが広がります。奥の大湯沼天然足湯も人気です。' },
        { name: 'のぼりべつクマ牧場とロープウェイ', text: '温泉街からロープウェイで山頂へ。ユーモラスにおねだりするエゾヒグマたちの姿を間近で観察できる「人のオリ」や倶多楽湖の絶景ビューポイントが楽しめます。' },
        { name: '登別伊達時代村での江戸情緒体験', text: '江戸時代の町並みや武家屋敷を再現したカルチャーパーク。迫力満点の忍者ショーや優雅な花魁道中、手裏剣体験など、歴史のロマンに浸ることができます。' }
      ]
    },
    furusatoStepTitle: '北海道登別市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「北海道登別市」クーポンを獲得', desc: '楽天ふるさと納税で登別市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当額がクーポンとして即時アカウントに付与されます。' },
      { step: 'Step 2: 新千歳空港や札幌からのアクセスに合わせて日程を決定', desc: '新千歳空港から高速バスやJRで約1時間の好アクセス。クーポンの有効期限は3年間あるため、スキーシーズンや夏の爽快な避暑旅など自由に計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: 'まほろば、第一滝本館、登別グランドホテルのビュッフェ付きプランを予約する際、確認画面でクーポンを選択して割引価格で予約完了です。' }
    ]
  },
  {
    slug: 'furusato-tax-kawaguchiko-fuji-view-onsen-stay',
    title: '【富士河口湖温泉×ふるさと納税】富士山一望露天風呂＆逆さ富士ステイ！絶景客室で癒やされる宿特集｜秀峰閣湖月・若草の宿丸栄・富士レークホテル',
    desc: '世界遺産・霊峰富士と湖が織りなす絶景温泉地・山梨県富士河口湖温泉を楽天ふるさと納税でお得に旅する！全室富士山＆河口湖ビューを誇る「秀峰閣 湖月」、最上階展望風呂と本格会席の名宿「若草の宿 丸栄」、創業昭和七年・バリアフリーと歴史の「富士レークホテル」を徹底比較。富士河口湖町トラベルクーポン活用術を解説。',
    keywords: '河口湖 富士山 露天風呂 ふるさと納税,富士河口湖町 ふるさと納税 宿泊,秀峰閣湖月 ふるさと納税,若草の宿丸栄 クーポン,富士レークホテル ふるさと納税',
    targetCity: '山梨県富士河口湖町',
    leadTitle: '朝日に染まる紅富士、静寂の湖面に映る逆さ富士——名湯に浸かりながら霊峰の雄姿を仰ぐ至高のひととき',
    leadP1: '山梨県南都留郡富士河口湖町、富士五湖の中心に位置する河口湖温泉郷。四季折々に表情を変える霊峰富士の圧倒的な美しさと、穏やかな湖面が織りなす絵画のような風景は、古くから多くの旅人を魅了してきました。春の湖畔を彩る桜並木、初夏のラベンダー、秋の燃えるような紅葉トンネル、そして冬の澄み渡る青空と白雪を纏う富士の頂。どの季節に訪れても息を呑む絶景が待っています。',
    leadP2: '河口湖温泉の最大の魅力は、何と言っても湯船から遮るものなく富士山を眺められる展望露天風呂です。湯煙の向こうにそびえる神々しい富士を眺めながらの入浴は、日常のストレスを一瞬で吹き飛ばしてくれる特別な体験。夕食には甲州名物の甲州牛や富士桜ポーク、山梨県産ワインと楽しむ創作会席が贅沢な夜を彩ります。山梨県富士河口湖町へのふるさと納税で手に入る楽天トラベルクーポンを使えば、寄付額の30%相当の支援を受けられ、憧れの富士ビュー温泉旅館へお得に宿泊できます。',
    hotelsKey: 'furusato-tax-kawaguchiko-fuji-view-onsen-stay',
    hotelItems: [
      {
        key: 'kawaguchiko_kogetsu',
        tagline: '全客室＆露天風呂から富士山と河口湖を一望！真正面に逆さ富士を望む河口湖北岸の特等席',
        detailTitle: '富士河口湖温泉 秀峰閣 湖月（こげつ） —— 遮るもののない大パノラマ。湯上がりのビールサービスと至高の富士山ビュー',
        features: [
          { title: '全客室が富士山と河口湖に面した絶好のロケーション', desc: '河口湖北岸の湖畔に建ち、すべての客室の窓から雄大な富士山と湖を一望。天候に恵まれ風のない日には、湖面に美しく映り込む「逆さ富士」を部屋にいながら拝むことができます。' },
          { title: '富士山と湖が一体化するインフィニティ風の庭園露天風呂', desc: '天然温泉が溢れる露天風呂からは、遮るもののない富士の絶景。湯上がり処では富士山を眺めながら無料の生ビールや名水サービスが提供される心憎いおもてなしも魅力です。' },
          { title: '甲州の恵みを盛り込んだ目にも鮮やかな月替わり創作会席', desc: '山梨の旬魚や山菜、厳選された肉料理を組み合わせた料理長自慢の会席。ゆったりとした個室食事処やお部屋で贅沢な美食時間を過ごせます。' }
        ],
        reviewPoints: '楽天トラベル評価4.76点の超高評価。「部屋からもお風呂からも富士山が目の前にドーンと見えて感動した」「スタッフの接客、湯上がりビール、料理すべてが満点」と圧倒的なリピート率。'
      },
      {
        key: 'kawaguchiko_maruei',
        tagline: '最上階の見晴らし展望風呂「富士の湯」！心温まる日本の情緒と匠の技が光る本格季節会席料理',
        detailTitle: '富士河口湖温泉 若草の宿 丸栄（まるえい） —— 湖畔に佇む純和風のやすらぎ。富士と湖を望む二つの展望風呂とお部屋食',
        features: [
          { title: '最上階から富士山を仰ぐ「富士の湯」と河口湖を望む「湖の湯」', desc: '屋上に設けられた展望風呂からは、雄大にそびえる霊峰富士と穏やかな河口湖の二つの異なる絶景を堪能。朝夕で男女入れ替えとなり両方の景色を楽しめます。' },
          { title: '日本旅館の伝統を守るお部屋食スタイルの本格会席料理', desc: '旬の食材を吟味し、出汁の引き方から盛り付けまで細心のこだわりを注いだ本格和食会席。周囲を気にせずお部屋でゆっくりと味わうことができます。' },
          { title: '畳敷きの温もりと風情ある数寄屋造りの贅沢な空間', desc: '館内随所に生花が飾られ、落ち着いた和の美意識が漂う純和風旅館。細やかな仲居さんの心遣いが旅の疲れを優しく解きほぐしてくれます。' }
        ],
        reviewPoints: '楽天トラベル評価4.68点、口コミ1300件超。「最上階のお風呂から見た朝日に輝く富士山が忘れられない」「夕食がお部屋食でとても美味しく、接客も丁寧で素晴らしかった」と高い満足度。'
      },
      {
        key: 'kawaguchiko_lakehotel',
        tagline: '昭和七年創業・湖畔の歴史を紡ぐクラシックホテル！富士山ビュー客室と安心のバリアフリー対応',
        detailTitle: '河口湖温泉 富士レークホテル —— 伝統と近代性の融合。富士山と湖を望む展望ラウンジと河口湖畔の絶好アクセス',
        features: [
          { title: '昭和初期の面影を残すクラシカルな建築美と現代の快適性', desc: '1932年創業の伝統を誇り、国内外の賓客を迎えてきた名門。ユニバーサルデザインを取り入れ、車椅子利用の方や三世代家族でも安心して快適に過ごせます。' },
          { title: '富士山温泉を引き込んだ大浴場と富士山展望露天風呂', desc: '河口湖の豊かな温泉を満喫できる大浴場。天気の良い日には富士山を望む露天風呂や貸切風呂でプライベートな癒やしの時間を楽しめます。' },
          { title: '伝統のフランス料理または旬の和食会席から選べる極上ディナー', desc: '伝統を受け継ぐ本格フレンチフルコースと、山梨の恵みを活かした日本料理。旅のスタイルに合わせて選べる贅沢なディナーが旅を彩ります。' }
        ],
        reviewPoints: '楽天トラベル評価4.60点、口コミ1100件超。「スタッフ全員の気配りが素晴らしく、車椅子でも快適に過ごせた」「湖畔の立地が良く、富士山の眺望と料理も大満足」と高評価を得ています。'
      }
    ],
    areaGuide: {
      title: '富士河口湖・富士山絶景スポット＆湖畔アクティビティガイド',
      points: [
        { name: '河口湖畔の桜並木・紅葉回廊の散策', text: '北岸沿いには春にソメイヨシノが咲き乱れる湖畔遊歩道、秋には約60本の巨木モミジが鮮やかに色づく「もみじ回廊」があり、富士山を背景にした絶好の写真撮影スポットです。' },
        { name: '富士山パノラマロープウェイでの天上山展望', text: '太宰治の小説『カチカチ山』の舞台となった天上山へ。山頂の展望台からは、裾野まで広がる雄大な富士山と河口湖の全景を360度の大パノラマで見渡せます。' },
        { name: '大石公園とハーブフェスティバル', text: '湖越しに富士山を望む花の名所。初夏には紫色のラベンダーが咲き誇り、秋には真っ赤に染まるコキアの群生が見事な景観を作り出します。' }
      ]
    },
    furusatoStepTitle: '山梨県富士河口湖町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「山梨県富士河口湖町」クーポンを獲得', desc: '楽天ふるさと納税で富士河口湖町を寄付先に選び、トラベルクーポンを申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 中央道や高速バス、富士回遊号で都心から快適アクセス', desc: '新宿から直通特急「富士回遊」で約1時間50分と好アクセス。3年間の有効期間内で、季節のイベントや紅葉シーズンに合わせてゆったり旅行を計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '秀峰閣湖月、若草の宿丸栄、富士レークホテルなどの富士山ビュー客室プランを選び、決済時にクーポンを選択すれば宿泊費が大幅に割引されます。' }
    ]
  },
  {
    slug: 'furusato-tax-shirahone-onsen-milky-secret-stay',
    title: '【白骨温泉×ふるさと納税】乳白色のにごり湯秘湯＆信州牛会席！深山幽谷の極上湯治宿ガイド｜齋藤旅館・小梨の湯笹屋・丸永旅館',
    desc: '「三日入れば三年風邪をひかない」と謳われる信州屈指の白濁秘湯・長野県白骨温泉を楽天ふるさと納税でお得に巡る！享保年間創業の老舗名門「湯元齋藤旅館」、白樺林に佇む完全貸切野天の宿「小梨の湯 笹屋」、桂の巨木と素朴な温もりの「かつらの湯 丸永旅館」を徹底解説。松本市トラベルクーポン活用術を網羅。',
    keywords: '白骨温泉 ふるさと納税,白骨温泉 旅館 おすすめ,湯元齋藤旅館 ふるさと納税,小梨の湯 笹屋 クーポン,松本市 ふるさと納税 宿泊',
    targetCity: '長野県松本市',
    leadTitle: '三日入れば三年風邪をひかない——北アルプスの懐に湧く乳白色の霊泉と信州深山の美味を味わう秘湯旅',
    leadP1: '長野県松本市安曇、北アルプス乗鞍岳の東山麓、標高約1,400メートルの深い渓谷に佇む白骨（しらほね）温泉。鎌倉時代に湧出したと伝えられ、戦国時代には武田信玄が松本城主の鉱山採掘員たちの湯治場として保護した歴史を持ちます。白骨温泉の最大の特徴は、空気に触れることで湧出時の透明から神秘的な乳白色へと変化する弱酸性の含硫黄炭酸水素塩温泉。湯船の縁には長年の温泉成分が石灰華（湯の花）となって白く固まり、まさに「白い骨」のように見えることがその名の由来とも言われています。',
    leadP2: '湯に浸かれば、ふわりと香る硫黄の匂いと柔らかな肌触りが全身を包み込み、体の芯から温まって疲労やストレスを優しく洗い流してくれます。夕食には信州プレミアム牛の朴葉味噌焼きや、澄んだ清流で育った岩魚の塩焼き、山の恵みたっぷりの山菜料理など、信州深山ならではの素朴で滋味あふれる料理が並びます。長野県松本市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの白濁名湯宿へお得に宿泊でき、本物の秘湯体験が叶います。',
    hotelsKey: 'furusato-tax-shirahone-onsen-milky-secret-stay',
    hotelItems: [
      {
        key: 'shirahone_saito',
        tagline: '享保年間創業・文人墨客が愛した老舗名門！自家源泉かけ流しの白濁湯と伝統の信州会席',
        detailTitle: '白骨温泉 湯元齋藤旅館 —— 創業三百年の格式と美学。大自然の渓流を望む野天風呂と極上の安らぎ',
        features: [
          { title: '自然湧出する自家源泉を惜しみなく注ぐ大浴場と野天風呂', desc: '敷地内から自噴する良質な源泉を100%掛け流しで使用。渓谷の緑や雪景色を眺めながら入る野天風呂「鬼角の湯」は、乳白色の湯と自然が織りなす絶景の湯浴み場です。' },
          { title: '中里介山や若山牧水ら文豪が愛した歴史と格式の空間', desc: '中里介山が名作『大菩薩峠』を執筆したことでも知られる老舗旅館。伝統の木造建築の趣を現代の快適性と融合させた客室で、静寂の深山ステイを味わえます。' },
          { title: '信州プレミアム牛や清流イワナを味わう本格山里会席', desc: '長野県産の厳選食材をふんだんに取り入れた季節の会席。香ばしく焼き上げた岩魚や信州牛の陶板焼きなど、滋味豊かな山の幸に舌鼓を打てます。' }
        ],
        reviewPoints: '楽天トラベル評価4.63点、口コミ800件超。「乳白色のお湯が本当に素晴らしく、何度も入浴した」「スタッフの接客が洗練されており、食事も部屋もすべてが最高峰」と絶賛されています。'
      },
      {
        key: 'shirahone_sasaya',
        tagline: '白樺林に囲まれた全八室の隠れ家！完全無料で楽しめる貸切野天風呂と囲炉裏炭火料理',
        detailTitle: '白骨温泉 小梨の湯 笹屋 —— 白樺の静寂に抱かれる一軒宿。湯の華舞う乳白色の貸切露天風呂と炭火の温もり',
        features: [
          { title: '白樺林の借景が美しい完全無料の貸切野天風呂', desc: '木立の中に佇む貸切野天風呂は空いていれば何度でも自由に利用可能。乳白色の湯に浸かりながら、そよぐ白樺の葉音と野鳥のさえずりに耳を澄ます極上のプライベート時間。' },
          { title: '囲炉裏を囲んで味わう香ばしい岩魚炭火焼きと信州牛', desc: '食事処の囲炉裏でじっくり炭火で焼き上げる岩魚の塩焼きや、香ばしい朴葉味噌焼き。地元農家の無農薬野菜を使った心のこもった料理が五臓六腑に染み渡ります。' },
          { title: 'わずか八室の静けさを守る大人の隠れ家空間', desc: '木造平屋の館内は木の温もりにあふれ、日常の喧騒を完全に遮断。過度な装飾のない素朴で温かいおもてなしが、心からのリフレッシュをもたらします。' }
        ],
        reviewPoints: '楽天トラベル評価4.75点の高得点。「貸切露天風呂の風情とお湯の良さが感動的」「囲炉裏料理がどれも絶品で、静かに温泉を堪能したい人には最高の宿」とリピーターが絶えません。'
      },
      {
        key: 'shirahone_marunaga',
        tagline: '樹齢数百年の桂の木の下に湧く混浴露天！素朴な信州の温もりと飲泉もできる名湯の宿',
        detailTitle: '白骨温泉 かつらの湯 丸永旅館 —— 秘湯の風情を色濃く残す木造旅館。湧きたて乳白色の混浴露天と湯治の温もり',
        features: [
          { title: '天然記念物の巨木の下に佇む野趣あふれる露天風呂', desc: '樹齢数百年の桂の木に抱かれるように作られた露天風呂。ぬるめと適温の二つの湯船があり、乳白色の湯の花が舞う極上の湯にゆっくりと長湯できます。' },
          { title: '胃腸に良いとされる白骨の湯の飲泉体験', desc: '館内には飲泉所が設けられており、胃腸病に効能があると伝わる白骨温泉を体の中から取り入れることができます。温泉粥など朝食の演出も評判です。' },
          { title: '素朴で温かな信州の手作り山里郷土料理', desc: '山菜の天ぷら、川魚の甘露煮、信州そばなど、信州の家庭の温もりを感じさせる手作り料理。どこか懐かしく温かいおもてなしに心が和みます。' }
        ],
        reviewPoints: '楽天トラベル評価4.50点、口コミ500件超。「桂の木の下のお風呂の雰囲気が最高で、白濁したお湯も素晴らしい」「家庭的なおもてなしと美味しい郷土料理に癒やされた」と秘湯ファンから愛されています。'
      }
    ],
    areaGuide: {
      title: '白骨温泉・上高地＆乗鞍高原の大自然巡りガイド',
      points: [
        { name: '上高地（大正池〜河童橋〜明神池）のトレッキング', text: '白骨温泉から車やシャトルバスで上高地へ直行可能。穂高連峰の険しい岩肌と梓川のエメラルドグリーンの清流が織りなす日本屈指の山岳景勝地で、清涼なハイキングを楽しめます。' },
        { name: '乗鞍高原・善五郎の滝と一の瀬園地', text: '乗鞍岳の山麓に広がる広大な高原地帯。轟音とともに落ちる名瀑「善五郎の滝」や、白樺林と水芭蕉が美しい一の瀬園地など、四季折々の高原風景が広がります。' },
        { name: '白骨温泉名物「温泉粥」と地酒の味わい', text: '弱炭酸水素塩泉の温泉水で炊き上げた温泉粥は、淡い青緑色を帯びてとろけるような滑らかさ。信州の辛口地酒とともに味わう朝のひとときは格別です。' }
      ]
    },
    furusatoStepTitle: '長野県松本市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「長野県松本市」クーポンを獲得', desc: '楽天ふるさと納税で松本市を選び、寄付額の30%相当のトラベルクーポンを返礼品として申し込みます。楽天ポイントも通常通り付与されます。' },
      { step: 'Step 2: 中央道・長野道またはJR特急あずさで松本経由の旅を計画', desc: '新宿から特急あずさで松本駅へ、そこから松本電鉄上高地線とバスで白骨温泉へ。3年間の有効期間内で、新緑や紅葉、冬の雪見風呂に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポンを適用して予約完了', desc: '湯元齋藤旅館、小梨の湯笹屋、かつらの湯丸永旅館などの対象プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅割引されます。' }
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
    const affiliateUrl = data.hotelInformationUrl || 'https://travel.rakuten.co.jp/';
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
                <div><span className="font-semibold text-stone-700">住所：</span>${address}</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>${chargeStr} /人</div>
                ${hotelNo ? `<div><span className="font-semibold text-stone-700">楽天施設ID：</span>${hotelNo}</div>` : ''}
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="${affiliateUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】${hotelName} の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>`;
  }).join('\n');

  const areaPointsCode = art.areaGuide.points.map((pt, idx) => {
    return `
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">${idx + 1}</span>
                ${pt.name}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                ${pt.text}
              </p>
            </div>`;
  }).join('');

  const stepsCode = art.furusatoSteps.map((st, idx) => {
    return `
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                ${st.step}
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                ${st.desc}
              </p>
            </div>`;
  }).join('');

  return `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${art.title.replace(/'/g, "\\'")}',
  description: '${art.desc.replace(/'/g, "\\'")}',
  keywords: '${art.keywords.replace(/'/g, "\\'")}',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${art.slug}',
  },
  openGraph: {
    title: '${art.title.replace(/'/g, "\\'")}',
    description: '${art.desc.replace(/'/g, "\\'")}',
    url: 'https://croud-travel.pages.dev/${art.slug}',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '${art.title.replace(/'/g, "\\'")}',
    description: '${art.desc.replace(/'/g, "\\'")}',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル 観光・ふるさと納税調査班',
      url: 'https://croud-travel.pages.dev/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラウドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png',
      },
    },
    datePublished: '2026-09-10T16:25:00+09:00',
    dateModified: '2026-09-10T16:25:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/${art.slug}',
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <Link href="/travel-savings-guide" className="hover:underline">ふるさと納税旅行ガイド</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">${art.title}</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>${art.targetCity} ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          ${art.title}
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          ${art.desc}
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            ${art.leadTitle}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP1}
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP2}
          </p>
        </section>

        {/* 比較サマリー表 */}
        <section className="bg-amber-50/50 rounded-3xl p-6 sm:p-8 border border-amber-100/80 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            今回ご紹介する厳選3名宿の比較サマリー
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white rounded-xl shadow-xs">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700">
                  <th className="p-3 font-bold">宿名</th>
                  <th className="p-3 font-bold">評価</th>
                  <th className="p-3 font-bold">最大の特徴</th>
                  <th className="p-3 font-bold">おすすめの過ごし方</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                ${art.hotelItems.map((h, idx) => {
                  const data = hotelObj[h.key] || {};
                  const hotelName = data.hotelName || '名門温泉旅館';
                  const rating = data.reviewAverage || 4.5;
                  return `
                <tr>
                  <td className="p-3 font-bold text-amber-900">${hotelName}</td>
                  <td className="p-3 font-bold">★ ${rating}</td>
                  <td className="p-3 text-stone-600">${h.tagline}</td>
                  <td className="p-3 text-stone-600">${idx === 0 ? '贅沢な記念日・ご褒美ステイ' : idx === 1 ? '落ち着いた大人の癒やし旅' : '家族・グループでの満足旅行'}</td>
                </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        </section>

        {/* ホテル詳細カード一覧 */}
        <section className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🏆</span> 厳選3宿の詳細レビュー＆ふるさと納税活用ガイド
          </h2>
${hotelCardsCode}
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> ${art.areaGuide.title}
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
              <Link href="/furusato-tax-hakone-sengokuhara-pampas-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根仙石原温泉 すすき草原＆美肌にごり湯特集
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
