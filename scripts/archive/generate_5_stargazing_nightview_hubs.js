const fs = require('fs');
const path = require('path');

const stargazingConfigs = [
  {
    slug: 'astronomical-observatory-stargazing-guide-resort-stay',
    badge: 'OBSERVATORY & STAR SOMMELIER GUIDE',
    title: '【天体望遠鏡ドーム＆星空案内人（星ソムリエ）常駐宿】本格天体観測 完全ガイド',
    metaDesc: '宇宙に一番近いホテル！大型天体望遠鏡ドーム＆星ソムリエ常駐の星空リゾート宿完全特化！長野八ヶ岳・野辺山、南信州阿智村、美ヶ原高原、福島浄土平、月のクレーター・土星の輪・すばる観察、夜間スターウォッチングツアー宿を徹底解説。',
    heroDesc: '漆黒の夜空を貫く満天の天の川。ホテルの屋上や専用ドームに設置された本格的な大型天体望遠鏡。「星空案内人（星ソムリエ）」のわかりやすくロマンチックな星座解説を聞きながら、肉眼では見えない土星の輪や木星の縞模様、月面のクレーターを覗き込む感動の宇宙体験ステイへ。',
    categoryKey: 'astronomical-observatory-stargazing-guide-resort-stay',
    areaGuides: [
      {
        key: 'yatsugatake_nobeyama_observatory_stay',
        title: '1. 長野＆山梨・八ヶ岳＆野辺山高原〜国立天文台（日本屈指の天体観測の聖地）',
        timing: '通年（空気が澄み渡る秋〜冬の星空は圧倒的な美しさ）',
        desc: '標高1,300mを超え、澄んだ空気と低い湿度に恵まれた天文学の聖地「野辺山高原（国立天文台野辺山宇宙電波観測所）」。ホテル専用の天体観測ドームや大型望遠鏡。専門スタッフや星空案内人による毎夜の星空観察会。八ヶ岳の爽やかな風を感じる高原リゾート。',
        spots: '国立天文台野辺山、清里高原（清泉寮・サンメドウズ清里）、八ヶ岳グレイスホテル（星空観測ドーム）、美し森',
        access: 'JR小海線「野辺山駅」または「清里駅」下車。中央道「須玉IC」または「小淵沢IC」より車約20〜30分。',
        tip: '野辺山高原は「日本の三選星名所」にも選ばれており、人工の明かりがほとんどないため、肉眼でもはっきりと天の川の濃淡が見分けられます。'
      },
      {
        key: 'achi_star_village_inn_stay',
        title: '2. 長野・南信州阿智村（昼神温泉）〜天空の楽園ナイトツアー（環境省認定日本一の星空）',
        timing: 'ナイトツアー開催期間：4月中旬〜11月下旬（冬期は昼神温泉での星空企画あり）',
        desc: '環境省が実施した全国星空継続観察で「星が最も輝いて見える場所」第1位に認定された阿智村。標高1,400mの「富士見台高原ヘブンスそのはら」までゴンドラで登る「天空の楽園 日本一の星空ナイトツアー」。合図とともに全照明が一斉に消灯する感動の瞬間。美肌湯の昼神温泉。',
        spots: 'ヘブンスそのはら（天空の楽園ナイトツアー）、昼神温泉郷（美肌のアルカリ性硫黄泉・足湯）、阿智川散策路、浪合パーク',
        access: 'JR飯田線「飯田駅」より路線バス約30分。中央道「飯田山本IC」または「園原IC」より約10分。',
        tip: 'ナイトツアーでは山頂の気温が平地より10℃近く下がるため、夏でも長袖の上着、春・秋は防寒着やブランケットの持参が必須です。'
      },
      {
        key: 'utsukushigahara_star_sommelier_stay',
        title: '3. 長野・美ヶ原高原〜標高2,000m雲上の特等席（360度パノラマと満天の星）',
        timing: '通年（冬の白銀雪上星空ツアー・初夏〜秋の高山植物）',
        desc: '標高2,034mの王ヶ頭山頂に佇む雲上の孤高ホテル「王ヶ頭ホテル」をはじめとする美ヶ原高原。富士山、北アルプス、中央アルプス、南アルプスを望む360度の大パノラマ。夜は明かりが一切ない雲上のテラスから仰ぐ天然プラネタリウム。星ソムリエのスライド解説。',
        spots: '美ヶ原高原（王ヶ頭・王ヶ鼻・美しの塔）、美ヶ原高原美術館、美ヶ原温泉',
        access: 'JR松本駅より送迎バスまたは車で約70分（冬期は雪上送迎）。',
        tip: '運が良い日は、眼下に広がる広大な雲海の上に満天の星空が輝くという、まるで宇宙空間に浮かんでいるかのような神秘的な絶景に遭遇できます。'
      }
    ]
  },
  {
    slug: 'japan-top-three-night-view-luxury-panoramic-stay',
    badge: 'TOP 3 NIGHT VIEW PANORAMIC SUITE GUIDE',
    title: '【日本三大夜景＆全室パノラマ夜景ビュー宿】1000万ドルの夜景・特等席 完全ガイド',
    metaDesc: '光の海を見下ろす極上の夜！日本三大夜景＆新日本三大夜景パノラマホテル完全特化！長崎稲佐山、神戸六甲山・摩耶山、北海道函館山、山梨笛吹川フルーツ公園、北九州皿倉山、バルコニーやビューバスから望む1000万ドルの絶景ステイを徹底解説。',
    heroDesc: '街の明かりが無数の宝石のように煌めく「1000万ドルの夜景」。「日本三大夜景」の長崎稲佐山・神戸六甲山・函館山。客室の大きな窓やプライベートバルコニー、さらには湯船に浸かりながら光のパノラマを独占するビューバス。ワイングラスを傾けながら過ごすロマンチックな夜へ。',
    categoryKey: 'japan-top-three-night-view-luxury-panoramic-stay',
    areaGuides: [
      {
        key: 'nagasaki_inasayama_night_view_stay',
        title: '1. 長崎・稲佐山〜世界新三大夜景（すり鉢状の地形が生む光のドラマ）',
        timing: '通年（夕暮れから日没後30分のトワイライトタイムは必見）',
        desc: 'モナコ、上海とともに「世界新三大夜景」に選定された長崎の夜景。標高333mの稲佐山山頂展望台から望むすり鉢状の長崎港と市街地のパノラマ。稲佐山の中腹に位置するホテルでは、客室のテラスや展望レストランから光の海を独占。長崎ロープウェイ。',
        spots: '稲佐山山頂展望台、長崎ロープウェイ（淵神社駅）、長崎港、グラバー園、大浦天主堂',
        access: 'JR長崎駅より長崎バス「稲佐山行」で約15分。長崎空港よりリムジンバス約45分。',
        tip: '稲佐山の夜景の中には「ハートの形」に見える街明かりが隠されており、見つけると恋愛が成就するというロマンチックな伝説があります。'
      },
      {
        key: 'kobe_rokko_night_view_luxury_stay',
        title: '2. 兵庫・神戸六甲山＆摩耶山〜1000万ドルの煌めき（大阪湾から関西空港まで）',
        timing: '通年（空気が澄む秋冬の夜景は光の輪郭が際立つ）',
        desc: '日本三大夜景の筆頭格「摩耶山 掬星台（きくせいだい）」と「六甲ガーデンテラス」。「星を手で掬（すく）える」が名前の由来の掬星台。神戸市街から大阪平野、遠く関西国際空港まで見渡す大パノラマ。山頂リゾートホテルや有馬温泉の展望露天。',
        spots: '摩耶山 掬星台（まやビューライン）、六甲ガーデンテラス（自然体感展望台 六甲枝垂れ）、六甲有馬ロープウェー、有馬温泉',
        access: 'JR三ノ宮駅または阪急六甲駅より市バス乗換。阪神高速「魚崎IC」より表六甲ドライブウェイ経由約30分。',
        tip: '摩耶山掬星台の展望広場には蓄光石で天の川を再現した「きらきら小径」があり、足元が幻想的な青い光で輝く人気のデートスポットです。'
      },
      {
        key: 'hakodate_mountain_night_view_stay',
        title: '3. 北海道・函館山〜津軽海峡と函館湾のくびれ美（扇形に広がる光の扇）',
        timing: '通年（秋の澄んだ夜空・冬の白銀と光のコントラスト）',
        desc: 'ミシュラン・グリーンガイド・ジャポンで三ツ星を獲得した「函館山からの夜景」。両側を津軽海峡と函館湾の海に挟まれた独特のくびれ地形。扇形に広がる温かみのある街の灯火と漁火（いさりび）。元町の坂道洋館群とベイエリアの赤レンガ倉庫。',
        spots: '函館山山頂展望台（函館山ロープウェイ）、元町八幡坂、金森赤レンガ倉庫、湯の川温泉',
        access: 'JR函館駅より市電または函館山登山バス。函館空港よりタクシー約20分。',
        tip: '夜景の中に「ハート」という文字に見える道路の光があり、これを見つけると愛が深まる・願いが叶うと言われています。'
      }
    ]
  },
  {
    slug: 'planetarium-private-cinema-theater-room-hotel-stay',
    badge: 'PLANETARIUM & CINEMA SUITE GUIDE',
    title: '【プラネタリウム＆大画面シアタールーム完備宿】部屋ごもり・星空上映 完全ガイド',
    metaDesc: 'お部屋の中が満天の星空に！客室プラネタリウム＆大画面プロジェクター完備ホテル完全特化！東京、大阪、京都、軽井沢、家庭用最高峰ホームスター設置ルーム、天井いっぱいの星座パノラマ、映画・星空鑑賞カップル＆ファミリー記念日ステイを徹底解説。',
    heroDesc: '部屋の照明を落とした瞬間、天井や壁一面に広がる数万個の恒星。「客室プラネタリウム＆ホームシアター完備ホテル」。ベッドに寝転んだまま、二人きりで満天の星空やヒーリング音楽に包まれる至福。天候に左右されず、いつでも満天の星空デートが叶う非日常の隠れ家へ。',
    categoryKey: 'planetarium-private-cinema-theater-room-hotel-stay',
    areaGuides: [
      {
        key: 'tokyo_planetarium_concept_stay',
        title: '1. 東京・都心ラグジュアリー〜客室プラネタリウム＆シアター（天候に左右されない星空デート）',
        timing: '通年（誕生日・記念日・女子会・クリスマス）',
        desc: '都心のデザイナーズホテルやタワーホテルに導入された客室プラネタリウム（大平貴之氏監修MEGASTARやホームスター）。100インチ超の大画面プロジェクターと高音質スピーカー。満天の星空を眺めながらルームサービスやシャンパンで乾杯する贅沢。',
        spots: '東京スカイツリー（コニカミノルタプラネタリウム天空）、有楽町プラネタリアTOKYO、お台場ベイエリア',
        access: '都内各線主要駅（新宿・渋谷・銀座・浅草）至近。',
        tip: 'Bluetoothスピーカーとスマホを接続し、お気に入りのアコースティック音楽やBGMを流しながら星空を投影すると、極上のプライベートリラックス空間が完成します。'
      },
      {
        key: 'kansai_cinema_star_suite_stay',
        title: '2. 関西・大阪＆京都〜プライベートシアタースイート（ポップコーン片手に映画＆星空上映）',
        timing: '通年（雨の日の京都観光・ホテルステイケーション）',
        desc: '最新スマートプロジェクター（popIn Aladdin等）や高輝度4Kプロジェクターを完備したスタイリッシュホテル。推し活や動画鑑賞、さらにはヒーリング星空モードでの癒やし。京都の町家ホテルや大阪のアーバンライフスタイルホテル。',
        spots: '道頓堀・難波エリア、京都鴨川沿い、嵐山竹林、梅田スカイビル（空中庭園展望台）',
        access: '大阪駅・京都駅周辺。',
        tip: 'プロジェクター付き客室では各種動画配信サービス（Netflix, YouTube, Amazon Prime等）に対応しているため、自分たちのアカウントで好きな映画やライブ映像を満喫できます。'
      },
      {
        key: 'karuizawa_forest_planetarium_stay',
        title: '3. 長野・軽井沢高原〜森の中のシアターヴィラ（星降る高原のプライベートリゾート）',
        timing: '通年（夏の避暑・冬の暖炉シアターナイト）',
        desc: '浅間山の裾野に広がる軽井沢の静寂な森。独立した一棟貸しヴィラに設置された大型スクリーンと音響システム。屋外のウッドデッキで実際の星空を仰ぎ、室内では暖炉の火とプラネタリウムの星空を愛でる贅沢な高原リゾートステイ。',
        spots: '軽井沢星野エリア（ハルニレテラス・星野温泉 トンボの湯）、白糸の滝、雲場池、旧軽井沢銀座通り',
        access: '北陸新幹線「軽井沢駅」より車約10〜15分。上信越道「碓氷軽井沢IC」より約20分。',
        tip: '冬の軽井沢は空気が極限まで乾燥して星が一段と輝くため、ヴィラのデッキで星空観察を楽しんだ後、室内の暖炉前で温かいココアを飲むのが至福の過ごし方です。'
      }
    ]
  },
  {
    slug: 'infinity-open-air-bath-starry-sky-sleeping-onsen-stay',
    badge: 'STARGAZING INFINITY BATH & SLEEPING SPA GUIDE',
    title: '【満天の星空露天風呂＆寝湯インフィニティ宿】天然プラネタリウム温泉 完全ガイド',
    metaDesc: '湯船に浮かびながら星屑を数える！星空インフィニティ露天風呂＆寝湯温泉宿完全特化！群馬万座温泉（標高1,800m）、長野白骨温泉・野沢温泉、栃木奥日光湯元温泉、大分久住高原、遮るもののない天空露天風呂と湯浴み体験を徹底解説。',
    heroDesc: '標高1,500mを超える高山温泉郷。明かりが届かない大自然の露天風呂で、湯船に仰向けに寝そべる「寝湯（ねゆ）」。頭上には手を伸ばせば届きそうな満天の星空と、湯面きらめく逆さ星屑。温かな湯に包まれながら宇宙と一体になる究極のリラクゼーションへ。',
    categoryKey: 'infinity-open-air-bath-starry-sky-sleeping-onsen-stay',
    areaGuides: [
      {
        key: 'manza_sky_onsen_starry_stay',
        title: '1. 群馬・万座温泉〜標高1,800m「星に一番近い温泉」（濃厚白濁硫黄泉と天空露天）',
        timing: '通年（冬の雪見星空風呂・夏の爽快な高冷地露天）',
        desc: '日本屈指の高所に湧く通年営業の温泉地「万座（まんざ）温泉」。硫黄含有量日本一を誇る乳白色のにごり湯。山々の稜線と満天の星空が溶け合う開放的な展望露天風呂。寝湯に横たわれば、頭上いっぱいに広がる無数の星座と流れ星。',
        spots: '万座温泉（万座プリンスホテルこまくさの湯・万座高原ホテル石庭露天風呂）、万座空吹（からぶき）、志賀草津高原ルート',
        access: 'JR吾妻線「万座・鹿沢口駅」より路線バス約45分。上信越道「碓氷軽井沢IC」より約80分。',
        tip: '万座温泉の露天風呂は夜間に最低限の足元灯のみとなり、漆黒の闇の中で乳白色の湯けむりと星空のコントラストが息を呑む幻想的な世界を作り出します。'
      },
      {
        key: 'kuju_highland_star_bath_stay',
        title: '2. 大分・久住高原〜くじゅう連山パノラマ寝湯（九州一の星空リゾート）',
        timing: '通年（春〜秋の緑の高原・澄み渡る秋の天の川）',
        desc: '標高約800〜1,000m、阿蘇くじゅう国立公園に広がる「久住（くじゅう）高原」。見渡す限りの草原地帯で街明かりが完全に遮断された絶好の天体観測地。なだらかな傾斜がつけられた寝湯から仰ぐ南蛮船のような雄大な星空パノラマ。',
        spots: '久住高原温泉郷（レゾネイトクラブくじゅう）、くじゅう花公園、ガンジーファーム、長者原湿原',
        access: 'JR豊肥本線「豊後竹田駅」より車約30分。大分道「九重IC」よりやまなみハイウェイ経由約50分。',
        tip: '寝湯は首元に木枕が設置されており、耳元まで温かい温泉に浸かりながら、力を抜いて水面に浮かぶようなリラクゼーション体勢で星空を眺め続けられます。'
      },
      {
        key: 'okunikko_starry_open_air_stay',
        title: '3. 栃木・奥日光湯元温泉〜標高1,500m白濁湯と静寂の森（湯ノ湖の星屑リフレクション）',
        timing: '通年（新緑の6月・錦秋の10月・冬の雪見露天）',
        desc: '日光白根山の山麓、湯ノ湖の畔に開かれた「奥日光湯元温泉」。エメラルドグリーンから白濁へと色を変える濃厚な硫黄泉。周囲を深い原生林に囲まれ、街灯が少ないため夜空の暗さは抜群。湯ノ湖の水面に映り込む逆さ星空。',
        spots: '奥日光湯元温泉（湯元板屋・湯守釜屋）、湯ノ湖遊歩道、湯滝、戦場ヶ原（星空観察ポイント）',
        access: 'JR・東武日光駅より東武バス「湯元温泉行」で約75分。日光宇都宮道路「清滝IC」よりいろは坂経由約45分。',
        tip: '戦場ヶ原の三本松展望デッキは全国から天体写真ファンが集まる屈指の星空撮影地で、湯元温泉の宿から車で約5〜10分でアクセスできます。'
      }
    ]
  },
  {
    slug: 'dark-sky-reserve-nature-island-starry-resort-stay',
    badge: 'DARK SKY RESERVE & ISLAND GUIDE',
    title: '【国際星空保護区＆離島ネイチャーステイ】石垣島・西表島・神津島 完全ガイド',
    metaDesc: '世界が認めた奇跡の暗闇と星空！国際ダークスカイ協会認定「星空保護区」＆離島リゾート宿完全特化！沖縄「西表石垣国立公園（全天88星座中84星座）」、東京「神津島」、岡山「美星町」、南十字星観察・ビーチ星空ナイトツアーを徹底解説。',
    heroDesc: '街明かりの影響を極限まで抑えた、世界基準の美しい夜空「国際星空保護区（ダークスカイ・プレイス）」。全天88星座のうち84星座が見られる八重山諸島（石垣島・西表島）や、東京都心から行ける神津島。波の音をBGMにビーチで眺める本物の天の川と南十字星の旅へ。',
    categoryKey: 'dark-sky-reserve-nature-island-starry-resort-stay',
    areaGuides: [
      {
        key: 'ishigaki_iriomote_dark_sky_stay',
        title: '1. 沖縄・西表石垣国立公園〜石垣島・西表島（日本初の国際星空保護区）',
        timing: '通年（南十字星：12月下旬〜6月中旬・夏の天の川：7月〜10月）',
        desc: '全天88星座のうち実に84星座、21個ある一等星のすべてを観測できる奇跡の島々。日本で初めて国際ダークスカイ協会により「星空保護区（ダークスカイ・パーク）」に認定。水平線すれすれに南十字星が輝く夜。ビーチに寝転がって仰ぐ満天の星。',
        spots: '石垣島天文台、フサキビーチ、川平湾、西表島ピナイサーラの滝、星空ナイトツアー',
        access: '南ぬ島石垣空港直行便。石垣港離島ターミナルより西表島へ高速船で約45分。',
        tip: '石垣島の「フサキビーチ」などのリゾートホテルでは、ビーチにリクライニングチェアが並べられ、波のせせらぎを聞きながらカクテル片手に星空を眺められます。'
      },
      {
        key: 'kouzushima_tokyo_dark_sky_stay',
        title: '2. 東京・神津島〜ダークスカイ・アイランド（東京都心から行ける奇跡の星空島）',
        timing: '通年（夏の天の川・冬のオリオン座と澄み切った大気）',
        desc: '東京都の伊豆諸島に位置し、アジアで2番目・日本で2番目に国際星空保護区（ダークスカイ・アイランド）に認定された「神津島（こうづしま）」。島民が一丸となって光害対策を実施し、夜になると街全体が本物の暗闇に。赤崎遊歩道での星空ガイドツアー。',
        spots: '赤崎遊歩道、天上山（花の百名山・ハートの砂地）、前浜海岸、神津島温泉保養センター',
        access: '東京・竹芝桟橋より高速ジェット船で約3時間45分、または調布飛行場より飛行機で約45分。',
        tip: '神津島では地元認定ガイド「星空案内人」によるナイトツアーが人気で、レジャーシートに寝転がりながらレーザーポインターを使った星座解説を聞くことができます。'
      },
      {
        key: 'bisei_okayama_astronomy_stay',
        title: '3. 岡山・井原市美星町〜星空を守る光害防止条例の街（アジア初のダークスカイ・コミュニティ）',
        timing: '通年（秋〜冬の澄んだ夜空・美星天文台公開観測会）',
        desc: '日本で初めて自治体として「光害防止条例」を制定した星の街「美星町（びせいちょう）」。アジア初の「ダークスカイ・コミュニティ」認定。口径101cmの巨大反射望遠鏡を備えた「美星天文台」。星空を見上げるペンションや古民家宿での滞在。',
        spots: '美星天文台、中世夢が原、星の郷青空市、美星スペースガードセンター',
        access: 'JR伯備線「備中高梁駅」より車約30分。山陽道「笠岡IC」より約40分。',
        tip: '美星天文台は夜間一般公開を行っており、口径101cmの望遠鏡で遠い銀河や星雲、惑星の細部までリアルタイムで観察することができます。'
      }
    ]
  }
];

function generatePageTsx(config) {
  return `import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "${config.title} ｜ 日本全国・旅宿クラウド",
  description: "${config.metaDesc}",
  keywords: ["${config.slug}", "星空旅行", "天体観測", "夜景ホテル", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["${config.categoryKey}"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ${config.categoryKey}", e);
  }
  return {};
}

export default function StargazingHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${JSON.stringify(config.areaGuides, null, 2)};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 text-white p-8 md:p-14 shadow-xl border border-indigo-400/30">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-cyan-400 to-indigo-300 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            ${config.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${config.title}
          </h1>
          <p className="text-xs md:text-sm text-indigo-100/90 leading-relaxed">
            ${config.heroDesc}
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆厳選宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-indigo-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-indigo-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-0.5 rounded-full uppercase">
                    🌌 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-indigo-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-1.5">
                  <span className="font-bold text-indigo-950 block text-[11px]">📍 おすすめスポット＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-1.5">
                  <span className="font-bold text-purple-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-1.5">
                  <span className="font-bold text-cyan-950 block text-[11px]">💡 星空鑑賞を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-indigo-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-indigo-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                    星空展望宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-indigo-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-indigo-50/50 border-b border-indigo-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-indigo-800/40 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-cyan-300 px-2 py-0.5 rounded border border-cyan-400/30">
                              ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                            </span>
                          )}
                        </div>

                        <div className="p-4 space-y-2">
                          {hotel.reviewAverage > 0 && (
                            <div className="flex items-center justify-between text-[9px] font-bold text-amber-600">
                              <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                            </div>
                          )}
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
                              {hotel.hotelSpecial}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-indigo-600 hover:to-purple-700 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-8">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-indigo-950 bg-white hover:bg-indigo-50 border border-indigo-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
`;
}

for (const cfg of stargazingConfigs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated stargazing hub page: /${cfg.slug}`);
}
