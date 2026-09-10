const fs = require('fs');
const path = require('path');

const round103Hotels = JSON.parse(fs.readFileSync('round103_hotels.json', 'utf8'));

// Convert to lookup map
const allHotels = {};
for (const [slug, arr] of Object.entries(round103Hotels)) {
  allHotels[slug] = {};
  for (const item of arr) {
    allHotels[slug][item.key] = item.hotel;
  }
}

const articles = [
  {
    slug: 'furusato-tax-shirahama-onsen-ocean-adventure-stay',
    title: '【南紀白浜温泉×ふるさと納税】白良浜オーシャンビュー＆名門リゾート特集！アドベンチャーワールド観光宿ガイド｜ホテル川久・むさし・白良荘グランドホテル',
    desc: '日本三古湯・白砂青松の白良浜が美しい和歌山県南紀白浜温泉を楽天ふるさと納税でお得に満喫！全室スイートの夢の城「ホテル川久」、白良浜徒歩1分・二つの自家源泉を持つ「紀州・白浜温泉 むさし」、オーシャンビュー展望露天風呂の「白良荘グランドホテル」を徹底比較。白浜町トラベルクーポン活用術を網羅。',
    keywords: '南紀白浜温泉 ふるさと納税,ホテル川久 クーポン ふるさと納税,白浜温泉 むさし 宿泊,白良荘グランドホテル ふるさと納税,白浜町 ふるさと納税 旅行',
    targetCity: '和歌山県白浜町',
    leadTitle: 'エメラルドグリーンの海と真っ白な砂浜——波打ち際に湧く日本三古湯と紀州の海の幸を味わう南国リゾートステイ',
    leadP1: '和歌山県西牟婁郡白浜町、紀伊半島の南西部に位置する南紀白浜温泉。飛鳥・奈良時代の「日本書紀」や「万葉集」にも牟婁の温湯（むろのゆ）として記され、有馬・道後とともに「日本三古湯」の一つに数えられる千四百余年の歴史を誇る名湯です。温泉街の目の前に広がる「白良浜（しららはま）」は、オーストラリアから運ばれた珪砂が敷き詰められた白砂のビーチ。青い海とヤシの並木が織りなす南国情緒は、本州屈指のビーチリゾートとして世代を超えて愛されています。',
    leadP2: '白浜温泉の大きな魅力は、海を眺めながら入る開放的な塩化物温泉と、家族みんなで楽しめる「アドベンチャーワールド」などのテーマパーク。夕食には幻の高級魚「クエ」の鍋や刺身、勝浦港直送の生マグロ、伊勢海老、アワビ、紀州和歌山牛など、黒潮の恵みが満載です。和歌山県白浜町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのラグジュアリーホテルへお得に宿泊でき、特別な記念日や家族旅行が最高の思い出になります。',
    hotelsKey: 'furusato-tax-shirahama-onsen-ocean-adventure-stay',
    hotelItems: [
      {
        key: 'shirahama_kawakyu',
        tagline: '総工費四百億円・世界の一流職人が創り上げた宮殿ホテル！全室スイートと「王様のビュッフェ」',
        detailTitle: '白浜温泉 ホテル川久 —— 圧倒的な建築美とアートの迷宮。田辺湾を一望するスパと美食のエンターテインメント',
        features: [
          { title: '金箔天井やロマネスク調の柱が並ぶ世界最高峰の建築美', desc: '村野藤吾賞を受賞した美術館のような宮殿ホテル。シュトックマー社の金箔天井やダリの作品など、贅を尽くしたアート空間が非日常を演出します。' },
          { title: '田辺湾の海面と一体化するインフィニティスパ「ロイヤルスパ」', desc: '海を一望する広大な露天風呂やシルクバス、サウナ。波の音と潮風に包まれながら、極上のリラクゼーションを体験できます。' },
          { title: '最高峰の贅沢食材が並ぶ伝説のディナー「王様のビュッフェ」', desc: '黒毛和牛ステーキや活鮑、十数種類のスイーツなど、一流シェフが目の前で仕上げる豪華ディナー。贅沢の限りを尽くした美食体験です。' }
        ],
        reviewPoints: '楽天トラベル評価4.60点、口コミ3400件超。「王様のビュッフェが圧巻のクオリティで建物もまさに宮殿」「お部屋が広すぎて別世界、一生の思い出になった」と大絶賛。'
      },
      {
        key: 'shirahama_musashi',
        tagline: '白良浜まで徒歩1分！二つの異なる自家源泉「斉明湯」と「白良湯」を湛える本格和風旅館',
        detailTitle: '紀州・白浜温泉 むさし —— 白良浜のすぐそばに佇む老舗。本格日本庭園露天風呂と紀州バイキング',
        features: [
          { title: '歴史ある二つの自家源泉を引き込んだ大浴場と庭園露天風呂', desc: '中大浴場と露天風呂で異なる源泉を引く贅沢。体の芯までぽかぽかに温まる良質なナトリウム塩化物泉をじっくり堪能できます。' },
          { title: '白良浜まで水着のまま直行できる抜群のロケーション', desc: '白砂のビーチまで徒歩わずか1分。海水浴や夕暮れの海辺散策、朝のビーチウォーキングに最高の立地です。' },
          { title: '紀州の海の幸や熊野牛が並ぶ豪華和洋バイキング＆会席料理', desc: '旬魚のお造りや揚げたて天ぷら、和歌山ラーメンなど郷土の味が充実。家族みんなで気兼ねなく楽しめる料理が揃っています。' }
        ],
        reviewPoints: '楽天トラベル評価4.33点、口コミ5200件超。「白良浜が目の前で海遊びに最高」「お風呂のお湯が良く、バイキングも種類豊富で美味しかった」とファミリーに大人気。'
      },
      {
        key: 'shirahama_shiraraso',
        tagline: '白良浜のパノラマが目の前に広がる全室オーシャンビュー！浜辺の露天風呂と名物クエ会席',
        detailTitle: '白浜温泉 白良荘グランドホテル —— 窓一面に広がる白砂青松。海と繋がる絶景温泉と紀州の味覚',
        features: [
          { title: '白良浜を眼下に見下ろす展望露天風呂「潮風」と「眺望の湯」', desc: '青い海と白い砂浜を一望する絶景露天風呂。波の音を間近に聞きながら名湯に浸かる至福のひとときを味わえます。' },
          { title: '全客室が海に面した開放感あふれるシーサイドロケーション', desc: 'お部屋にいながらエメラルドグリーンの海と夕日を独り占め。夜には静かな波音が心地よい眠りを誘います。' },
          { title: '紀州名物「天然本クエ」や伊勢海老・熊野牛を味わう会席ディナー', desc: '脂の乗った白身の王様・クエの鍋や薄造り。料理人が丹精込めて仕立てる和歌山ならではの美食会席を堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.45点、口コミ3100件超。「部屋とお風呂からの白良浜の眺めが最高」「お料理のクエがとても美味しく、接客も丁寧で大満足」と高評価。'
      }
    ],
    areaGuide: {
      title: '南紀白浜温泉・アドベンチャーワールド＆千畳敷・三段壁ガイド',
      points: [
        { name: 'アドベンチャーワールドでの動物ふれあい＆サファリツアー', text: 'パンダファミリーやイルカショー、放し飼いのサファリゾーンが人気のテーマパーク。大人から子供まで一日中感動体験を楽しめます。' },
        { name: '名勝「千畳敷」と「三段壁・三段壁洞窟」のダイナミック景観', text: '太平洋の荒波が削り出した広大な岩畳「千畳敷」と、高さ50mの断崖絶壁「三段壁」。地下の洞窟では迫力ある波の飛沫を間近に体感できます。' },
        { name: '白良浜のサンセットと湯崎七湯「崎の湯」露天風呂', text: '日本の夕陽百選に選ばれる白良浜の夕暮れ。岩礁に打ち寄せる波を直接浴びるような日本最古の野天風呂「崎の湯」も必見です。' }
      ]
    },
    furusatoStepTitle: '和歌山県白浜町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「和歌山県白浜町」クーポンを獲得', desc: '楽天ふるさと納税で白浜町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 南紀白浜空港やJR特急くろしお号でアクセス', desc: '羽田空港から南紀白浜空港まで直行便でわずか約70分、新大阪駅から特急くろしおで約2時間15分。3年間の有効期間内で、夏休みや冬のクエシーズンに合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: 'ホテル川久、紀州・白浜温泉むさし、白良荘グランドホテルなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-nozawa-onsen-sotoyu-heritage-stay',
    title: '【野沢温泉×ふるさと納税】十三の外湯めぐり＆源泉麻釜！信州郷土料理の名宿特集｜旅館さかや・河一屋旅館・住吉屋',
    desc: '日本屈指の温泉情緒とスキーリゾート・長野県野沢温泉を楽天ふるさと納税でお得に贅沢旅！創業百余年・宮大工造りの湯屋建築を誇る「旅館 さかや」、名湯真湯の白濁露天と信州牛の「河一屋旅館」、麻釜隣接の老舗「村のホテル 住吉屋」を徹底比較。十三外湯めぐりや野沢菜料理、野沢温泉村トラベルクーポン活用術を網羅。',
    keywords: '野沢温泉 ふるさと納税,野沢温泉 外湯 ふるさと納税,旅館さかや クーポン,河一屋旅館 野沢温泉 宿泊,野沢温泉村 ふるさと納税 旅行',
    targetCity: '長野県野沢温泉村',
    leadTitle: '立ち上る湯けむりと石畳の坂道——十三の外湯を巡り、源泉掛け流しの霊泉と信州の美味に浸る素朴で贅沢な休日',
    leadP1: '長野県下高井郡野沢温泉村、毛無山の山麓に広がる野沢（のざわ）温泉。奈良時代に行基や聖武天皇の時代に開湯されたと伝わり、古くから湯治場として栄えてきた日本を代表する名湯です。国の天然記念物「麻釜（おがま）」では100度近い高温泉が湧き出し、地元の人々が野菜や野沢菜を茹でる日常の風景が今なお息づいています。温泉街には「大湯」をはじめとする13箇所の外湯（共同浴場）が点在し、地元住民組織「湯仲間」によって大切に管理され、訪れる旅人にも開放されています。',
    leadP2: '野沢温泉の醍醐味は、浴衣と下駄で温泉街を歩きながら、熱めの源泉掛け流し湯を巡る外湯めぐり。宿に戻れば、宮大工が手がけた美しい湯屋でゆったりと温泉に浸かり、夕食には長野県産の信州プレミアム牛やすき焼き、名物の本場野沢菜漬け、採れたての山菜や川魚、信州そばを地酒とともに味わう至福の時間が待っています。長野県野沢温泉村へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの老舗旅館へお得に宿泊でき、心温まる信州の秘湯旅が叶います。',
    hotelsKey: 'furusato-tax-nozawa-onsen-sotoyu-heritage-stay',
    hotelItems: [
      {
        key: 'nozawa_sakaya',
        tagline: '創業百余年・野沢を代表する宮大工建築の最高峰！自然湧出する自家源泉を注ぐ名湯「鷹の湯」',
        detailTitle: '野沢温泉 旅館 さかや —— 伝統の木造建築美と源泉の温もり。太い梁が交差する湯屋と極上の創作和食会席',
        features: [
          { title: '宮大工が組み上げた伝統の湯屋建築「鷹の湯」', desc: '高い天井と太い梁が美しい総木造りの大浴場。自然湧出する自家源泉を非加熱・無加水で掛け流し、温泉本来の力強い効能を肌で実感できます。' },
          { title: '日本庭園を望む落ち着いた和室とモダンなサロンラウンジ', desc: '歴史の風格を感じさせる館内。手入れされた庭園や暖炉のあるラウンジで、静かに大人の時間を過ごせます。' },
          { title: '信州牛の陶板焼きや地元の山里の恵みを味わう特選会席', desc: '料理長が腕によりをかけて仕立てる月替わりの会席。器の美しさと出汁の深い味わいに職人技が光ります。' }
        ],
        reviewPoints: '楽天トラベル評価4.66点、口コミ1300件超。「鷹の湯の木造建築とお湯の素晴らしさに感動」「おもてなし、お部屋、お料理すべてが一流で最高峰の宿」と絶賛。'
      },
      {
        key: 'nozawa_kawaichiya',
        tagline: '野沢温泉屈指の名湯「真湯」を引く白濁の露天風呂！信州プレミアム牛ステーキと郷土の温もり',
        detailTitle: '野沢温泉 河一屋旅館 —— 源泉掛け流しのにごり湯露天風呂。心温まる接客と信州牛を味わう癒やしの宿',
        features: [
          { title: '神秘的なエメラルドグリーンから白濁へと変わる名湯「真湯」', desc: '湯の花が舞う良質な硫黄泉を引き込んだ露天風呂。内湯には麻釜源泉を引いており、館内で二つの泉質を愉しめます。' },
          { title: '温泉街の中心部や外湯へ徒歩すぐの便利な立地', desc: '大湯や麻釜への散策に最適なロケーション。湯上がりの外湯めぐりや足湯散歩をストレスなく楽しめます。' },
          { title: '最高ランク信州プレミアム牛やすき焼きが自慢の夕食', desc: '柔らかくジューシーな信州牛や地元野菜をふんだんに取り入れた郷土料理。温かい手作りのおもてなしが評判です。' }
        ],
        reviewPoints: '楽天トラベル評価4.60点、口コミ1100件超。「露天風呂の真湯のお湯が最高で肌がつるつるになった」「信州牛が絶品でスタッフの対応も素晴らしかった」と高評価。'
      },
      {
        key: 'nozawa_sumiyosiya',
        tagline: '麻釜のすぐ隣に佇む明治２年創業の歴史宿！自家源泉かけ流しの湯とアケビ細工が彩る民芸の美',
        detailTitle: '野沢温泉 村のホテル 住吉屋 —— 麻釜の湯けむりを望む特等席。自家源泉の滑らかな湯と素朴な民芸空間',
        features: [
          { title: '敷地内から自噴する良質な自家源泉を引く大浴場', desc: '滑らかな肌触りの弱アルカリ性硫黄泉。湯口から絶え間なく注がれる新鮮な名湯に浸かり、疲れた体を芯から解きほぐせます。' },
          { title: '麻釜の目の前に位置する温泉情緒たっぷりのロケーション', desc: '地元の人々が野菜を茹でる麻釜の風景を間近に見下ろす立地。朝の散歩や外湯めぐりに最高の拠点です。' },
          { title: '信州の季節の食材をふんだんに使った手作り創作料理', desc: '地元の旬の野菜や山菜、きのこ、岩魚などを使った滋味豊かな料理。信州の地酒とともにゆったりと味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.56点。「麻釜のすぐ隣で雰囲気が最高」「自家源泉のお湯が素晴らしく、民芸調の落ち着いた館内とお料理に癒やされた」と好評。'
      }
    ],
    areaGuide: {
      title: '野沢温泉街・外湯めぐり＆麻釜（おがま）観光ガイド',
      points: [
        { name: '十三の外湯めぐり（大湯・河原湯・真湯など）と集印帳散歩', text: '温泉街に点在する無料の共同浴場。一番人気の「大湯」は木造二階建ての堂々たる湯屋建築。各外湯の記念スタンプを集める「集印帳めぐり」も人気です。' },
        { name: '国の天然記念物「麻釜（おがま）」の見学', text: '100度近い高温泉が湧き出す野沢温泉のシンボル。地元住民が山菜や野沢菜、卵を茹でる昔ながらの生活風景を見学できます（観光客の立ち入り制限あり）。' },
        { name: '野沢温泉スキー場とサマーアクティビティ', text: '極上のパウダースノーを誇る日本屈指のビッグゲレンデ。夏から秋にはマウンテンバイクやジップライン、高原植物の観察が楽しめます。' }
      ]
    },
    furusatoStepTitle: '長野県野沢温泉村ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「長野県野沢温泉村」クーポンを獲得', desc: '楽天ふるさと納税で野沢温泉村を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 北陸新幹線飯山駅から直通バス「野沢温泉ライナー」でアクセス', desc: '東京駅から北陸新幹線で飯山駅まで約1時間40分、駅から直通バスでわずか約25分。3年間の有効期間内で、冬のスキーシーズンや新緑・紅葉に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '旅館さかや、河一屋旅館、住吉屋などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-ito-onsen-ocean-kinmedai-stay',
    title: '【伊東温泉×ふるさと納税】相模灘オーシャンビュー＆名物金目鯛・伊勢海老！伊豆の名門宿特集｜青山やまと・サンハトヤ・ラフォーレ湯の庭',
    desc: '毎分三万リットルの豊富な湧出量を誇る伊豆屈指の温泉郷・静岡県伊東温泉を楽天ふるさと納税でお得に贅沢ステイ！相模湾を見晴らす丘の名門料亭旅館「青山やまと」、名物海底温泉でお魚見学「サンハトヤ」、全室温泉付き客室の和モダン「ラフォーレ伊東温泉 湯の庭」を徹底比較。伊東市トラベルクーポン活用術を網羅。',
    keywords: '伊東温泉 ふるさと納税,青山やまと クーポン,サンハトヤ ふるさと納税 伊東,ラフォーレ伊東温泉 宿泊,伊東市 ふるさと納税 旅行',
    targetCity: '静岡県伊東市',
    leadTitle: '温暖な気候と豊富な湯量を誇る伊豆の玄関口——相模灘の絶景露天風呂と名物金目鯛の姿煮に舌鼓を打つ極上の休日',
    leadP1: '静岡県伊東市、伊豆半島の東海岸に広がる伊東（いとう）温泉。別府、由布院に次ぐ全国有数の湧出量を誇り、毎分約3万2,000リットルもの温泉が市内の至る所から湧き出ています。江戸時代には三代将軍徳川家光に湯治湯として献上された歴史を持ち、明治以降は文人墨客の避暑地・別荘地として発展してきました。泉質は肌に優しく刺激が少ない単純温泉や弱食塩泉で、赤ちゃんからシニアまで安心して長湯を楽しめる名湯として親しまれています。',
    leadP2: '伊東温泉の旅の大きな醍醐味が、相模湾で獲れる新鮮な海の幸です。脂の乗った伊豆名物「金目鯛の姿煮」や、甘みあふれる「伊勢海老」のお造り、アワビの踊り焼きなど、伊豆ならではの豪華な海鮮会席が夜を彩ります。相模灘を見晴らすパノラマ展望風呂や、全室に温泉を備えたモダンリゾートなど宿のバリエーションも多彩。静岡県伊東市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの名門宿へお得に宿泊でき、特別な記念日や家族旅行が最高の思い出になります。',
    hotelsKey: 'furusato-tax-ito-onsen-ocean-kinmedai-stay',
    hotelItems: [
      {
        key: 'ito_aoyama',
        tagline: '伊東の街並みと相模湾を見晴らす高台の名門！源泉掛け流し露天風呂と金目鯛姿煮の本格懐石料亭旅館',
        detailTitle: '伊東温泉 青山やまと —— 丘の上に佇む上質なやすらぎ。絶景の展望風呂と心を尽くしたおもてなし',
        features: [
          { title: '相模湾と伊東の夜景を一望する最上階の展望露天風呂', desc: '朝日に輝く海や夜の街の明かりを見渡す大浴場と露天風呂。良質な伊東の名湯に浸かりながら、開放感あふれる絶景を堪能できます。' },
          { title: '朝夕ともにお部屋でゆっくり味わう完全お部屋食スタイル', desc: '仲居さんが一品ずつ配膳する伝統の日本旅館スタイル。周りを気にせず、プライベートな空間で贅沢な美食時間を過ごせます。' },
          { title: '秘伝のタレでふっくら煮付けた金目鯛の姿煮と季節の懐石', desc: '料理長が腕を振るう華やかな本格料理。伊豆近海の新鮮魚介と旬の野菜をバランスよく組み合わせた極上ディナーです。' }
        ],
        reviewPoints: '楽天トラベル評価4.67点、口コミ1500件超。「お部屋食の金目鯛が絶品で接客もパーフェクト」「お風呂からの景色が素晴らしく何度もリピートしている」と絶賛。'
      },
      {
        key: 'ito_sunhatoya',
        tagline: '「伊東に行くならハトヤ」のCMで有名な名門！巨大水槽でお魚が泳ぐ海底温泉「千石風呂」と全室オーシャンビュー',
        detailTitle: '伊東温泉 サンハトヤ —— 海の上に建つ一大リゾート。名物海底温泉と相模灘の絶景パノラマ',
        features: [
          { title: 'ウミガメや魚たちが泳ぐ巨大水槽を眺めながら入る「海底温泉 千石風呂」', desc: 'まるで水族館の中で温泉に入っているかのような唯一無二の体験。家族連れや子供たちに大人気のアトラクション温泉です。' },
          { title: '全客室が相模湾に面した壮大なオーシャンフロント', desc: '海の上にせり出すように建つホテルならではの眺望。遮るもののない水平線と朝日の絶景を部屋にいながら満喫できます。' },
          { title: '金目鯛や新鮮な海の幸が並ぶディナービュッフェ＆和食膳', desc: '伊豆の海の恵みをふんだんに取り入れた料理。シーズンごとのディナーショーや温泉プールも楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.11点、口コミ3200件超。「海底温泉で子供が大喜び」「部屋からの海の景色が素晴らしくハトヤの伝統を感じられた」とファミリーに大人気。'
      },
      {
        key: 'ito_laforet',
        tagline: '全客室に天然温泉のお風呂を完備！和モダンなデザインと落ち着いた大人の寛ぎを提供する温泉ホテル',
        detailTitle: 'ラフォーレ伊東温泉 湯の庭 —— 客室温泉風呂で過ごすおこもりステイ。湯量豊富な名湯と季節の会席料理',
        features: [
          { title: '全客室に設えられた天然温泉が注ぐプライベート客室風呂', desc: 'いつでも好きな時に名湯を満喫できる贅沢。大浴場の露天風呂とともに、心ゆくまで伊東の湯を堪能できます。' },
          { title: '伊東駅から徒歩約10分の静かな住宅街に佇む和モダン空間', desc: '観光の拠点としても便利な好アクセス。竹林の中庭やモダンなロビーラウンジで静かにリラックスできます。' },
          { title: '伊豆の山海の幸を彩り豊かに仕立てた本格和食会席', desc: '旬魚のお造りや肉料理など、目にも美しい料理が並ぶディナーコース。落ち着いたレストランでゆったり味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.43点、口コミ1800件超。「部屋のお風呂に温泉が出て最高だった」「清潔感があり接客も丁寧で大満足」と高評価。'
      }
    ],
    areaGuide: {
      title: '伊東温泉・城ヶ崎海岸＆大室山観光ガイド',
      points: [
        { name: '大室山（おおむろやま）リフトと火口周回遊歩道', text: 'すり鉢状の火口を持つ美しい単成火山。リフトで山頂に登れば、360度の大パノラマで富士山や伊豆諸島を一望でき、「お鉢巡り」が楽しめます。' },
        { name: '城ヶ崎海岸門脇吊橋と断崖絶壁の絶景ハイク', text: '大室山の溶岩が海に流れ込んで形成されたリアス式海岸。高さ23メートルの門脇吊橋からは、足元に渦巻く激しい白波のスリルを体感できます。' },
        { name: '伊東松川遊歩道と登録有形文化財「東海館」見学', text: '伊東温泉の中心を流れる松川沿いの遊歩道。昭和初期の木造三階建て温泉旅館建築「東海館」の見学や、春の桜並木散策が人気です。' }
      ]
    },
    furusatoStepTitle: '静岡県伊東市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「静岡県伊東市」クーポンを獲得', desc: '楽天ふるさと納税で伊東市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 特急踊り子号や新幹線熱海駅乗り換えで快適アクセス', desc: '東京駅から特急「踊り子」で伊東駅まで直通約1時間40分。3年間の有効期間内で、初春の椿まつりや夏の海水浴、冬の花火に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '青山やまと、サンハトヤ、ラフォーレ伊東温泉湯の庭などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-zao-onsen-acid-sulfur-stay',
    title: '【蔵王温泉×ふるさと納税】日本屈指の強酸性白濁硫黄泉＆山形牛！名門名湯宿特集｜深山荘高見屋・蔵王国際ホテル・蔵王四季のホテル',
    desc: '開湯千九百年・蔵王連峰の雄大な自然に抱かれる山形県蔵王温泉を楽天ふるさと納税でお得に満喫！享保年間創業三百年余の最高峰「深山荘 高見屋」、木の温もりあふれる八右衛門の湯「蔵王国際ホテル」、白樺林の離れ湯「蔵王四季のホテル」を徹底比較。大露天風呂や山形牛すき焼き、山形市トラベルクーポン活用術を網羅。',
    keywords: '蔵王温泉 ふるさと納税,深山荘 高見屋 クーポン,蔵王国際ホテル ふるさと納税,蔵王四季のホテル 宿泊,山形市 ふるさと納税 旅行',
    targetCity: '山形県山形市',
    leadTitle: '皮膚を強くし美肌をつくる強酸性の白濁湯——蔵王連峰の息吹と山形牛・郷土料理を味わう東北屈指の山岳温泉ステイ',
    leadP1: '山形県山形市、奥羽山脈の主峰・蔵王連峰の中腹標高約880メートルに位置する蔵王（ざおう）温泉。西暦110年、日本武尊の東征に従軍した吉備多賀由（きびのたかゆ）によって発見されたと伝わる、千九百年余の歴史を誇る日本屈指の古湯です。蔵王温泉の最大の特徴は、pH1.3〜1.6という日本トップクラスの強酸性を誇る含硫黄アルミニウム硫酸塩塩化物温泉。乳白色に濁る濃厚な湯は、高い殺菌作用と皮膚再生効果を持ち、「美人づくりの湯」「不老長寿の湯」として親しまれています。',
    leadP2: '温泉街の奥に広がる名物「蔵王温泉大露天風呂」や、各宿が守る総木造りの湯屋で名湯を満喫した後は、山形が誇る極上ブランド牛「山形牛」のすき焼きやステーキ、山形名物「芋煮」、採れたて山菜や手打ちそばに舌鼓。冬には世界的な奇観「樹氷（スノーモンスター）」が山頂を埋め尽くし、スキーやスノーボードの聖地としても賑わいます。山形県山形市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより名門温泉宿へお得に宿泊でき、特別な思い出が残る東北の旅が叶います。',
    hotelsKey: 'furusato-tax-zao-onsen-acid-sulfur-stay',
    hotelItems: [
      {
        key: 'zao_takamiya',
        tagline: '創業三百年余・享保年間から続く蔵王温泉最高峰の格式！総木造りの離れ湯屋と伝統の日本建築',
        detailTitle: '深山荘 高見屋（たかみや） —— 歴史と格式を紡ぐ名門老舗。蔵王の自然湧出源泉を惜しみなく掛け流す至高の湯処',
        features: [
          { title: '自然湧出する自家源泉を注ぐ総木造りの湯屋「せせらぎの湯」', desc: '釘を使わない伝統技法で組まれた美しい湯屋。乳白色の強酸性硫黄泉が掛け流され、ヒノキの香りと湯煙の中で極上の湯浴みが叶います。' },
          { title: '和の情緒あふれる数寄屋造りの客室とアンティークの調度品', desc: '文人墨客が愛した格式高い客室棟。静寂に包まれた空間で、日常を離れた大人の極上ステイを堪能できます。' },
          { title: '厳選された山形牛ステーキや旬の山里会席料理', desc: '料理人が丹精込めて仕立てる本格和会席。きめ細やかな霜降りの山形牛や清流魚、地元のきのこや山菜を優雅に味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.67点、口コミ900件超。「お風呂の雰囲気が映画のワンシーンのようで素晴らしくお湯も最高」「お料理も接客もすべてが名門にふさわしく感動した」と絶賛。'
      },
      {
        key: 'zao_kokusai',
        tagline: '木の温もりあふれる総木造り八右衛門の湯！乳白色掛け流しの天然温泉と山形牛すき焼きの贅沢リゾート',
        detailTitle: '蔵王温泉 蔵王国際ホテル —— 木造建築の傑作大浴場。ゲレンデ直結の好立地と心温まるおもてなし',
        features: [
          { title: '丸太の梁が組み上げられた総木造り大浴場「八右衛門の湯」', desc: '高い吹き抜け天井と木の香りが心地よい名物浴場。白濁した100％源泉掛け流しの湯船と露天風呂で至福のリラックスを体験できます。' },
          { title: '蔵王温泉スキー場ゲレンデ直結の抜群のロケーション', desc: '冬はホテルからそのままゲレンデへ直行。春から秋にはトレッキングやロープウェイ観光の拠点として便利です。' },
          { title: '山形牛のすき焼きやしゃぶしゃぶを味わう季節の創作和食会席', desc: 'とろけるような山形牛の旨味を堪能できるディナーコース。地元の採れたて野菜や山形県産つや姫のご飯も絶品です。' }
        ],
        reviewPoints: '楽天トラベル評価4.56点、口コミ2400件超。「八右衛門の湯が素晴らしく乳白色のお湯に感動」「スタッフの接客が親切でお料理もとても美味しかった」と高評価。'
      },
      {
        key: 'zao_shiki',
        tagline: '白樺林に囲まれた離れ湯「百八歩の湯」！乳白色の硫黄露天風呂と落ち着いた高原リゾートホテル',
        detailTitle: '蔵王温泉 蔵王四季のホテル —— 森林に抱かれる癒やしの館。離れ露天風呂と山形の恵み会席',
        features: [
          { title: 'ホテルから百八歩歩いた白樺林の中に佇む離れ湯「百八歩の湯」', desc: '木造りの風情ある独立した湯小屋。白濁した硫黄泉の露天風呂と内湯があり、森林浴をしながら名湯を楽しめます。' },
          { title: '館内大浴場「白樺の湯」には肌に優しい弱アルカリ性人工温泉も完備', desc: '酸性泉が苦手な方でも安心して入れる館内浴場。サウナも完備し、二つの異なる入浴体験が楽しめます。' },
          { title: '山形牛の陶板焼きや郷土名物「芋煮」を取り入れた会席料理', desc: '山形ならではの滋味あふれる料理が並ぶ夕食。広々としたレストランでゆったりと食事を満喫できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.43点、口コミ1900件超。「離れの百八歩の湯の雰囲気が最高で白濁湯を満喫できた」「館内が静かで落ち着いており、食事も美味しかった」と好評。'
      }
    ],
    areaGuide: {
      title: '蔵王温泉・樹氷（スノーモンスター）＆御釜（おかま）観光ガイド',
      points: [
        { name: '蔵王ロープウェイでの「樹氷（スノーモンスター）」観賞', text: 'アオモリトドマツに過冷却水滴が吹き付けられてできる世界的奇観「樹氷」。山頂駅からの展望や、夜間の樹氷ライトアップ・ナイトクルーザー号ツアーが感動的です。' },
        { name: '蔵王エコーラインとエメラルドグリーンの火口湖「御釜」', text: '蔵王連峰のシンボルである円形の火口湖。太陽光の角度によってエメラルドグリーンに色を変える神秘的な「五色沼」の絶景を望めます。' },
        { name: '蔵王温泉大露天風呂での大自然渓流湯浴み', text: '温泉街の奥、渓流沿いに造られた男女合わせて200名が入れる巨大露天風呂（春〜秋営業）。川のせせらぎと森林の緑に包まれながら開放感あふれる入浴が楽しめます。' }
      ]
    },
    furusatoStepTitle: '山形県山形市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「山形県山形市」クーポンを獲得', desc: '楽天ふるさと納税で山形市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 山形新幹線山形駅から直行路線バスで約45分', desc: '東京駅から山形新幹線「つばさ」で山形駅まで約2時間45分、駅から山交バスで蔵王温泉直行。3年間の有効期間内で、冬のスキー・樹氷や夏の避暑・秋の紅葉に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '深山荘高見屋、蔵王国際ホテル、蔵王四季のホテルなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
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
    datePublished: '2026-09-10T17:25:00+09:00',
    dateModified: '2026-09-10T17:25:00+09:00',
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
                  <td className="p-3 text-stone-600">${idx === 0 ? '最高峰の格式・贅沢ステイ' : idx === 1 ? '抜群の立地・名湯満喫' : '温もり空間・アットホーム旅'}</td>
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
              <Link href="/furusato-tax-ibusuki-onsen-sand-bath-ocean-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 指宿温泉 天然砂むし温泉＆錦江湾オーシャンビュー特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-nyuto-onsen-secret-milky-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 乳頭温泉郷 日本屈指の乳白色秘湯＆田沢湖畔特集
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
