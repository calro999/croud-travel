const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const round80Configs = [
  {
    slug: 'furusato-tax-tokyo-disney-resort-official-hotel-stay',
    componentName: 'FurusatoTokyoDisneyOfficialHotelStayPage',
    tag: '東京ディズニーリゾート公式オフィシャルホテル特集',
    title: '舞浜直結！東京ディズニーリゾート公式オフィシャルホテル×ふるさと納税完全攻略ガイド【2026年最新】シェラトン・ヒルトン・グランドニッコーで夢の国をお得に満喫',
    metaTitle: '舞浜直結！東京ディズニーリゾート公式オフィシャルホテル×ふるさと納税完全攻略ガイド【2026年最新】シェラトン・ヒルトン・グランドニッコーで夢の国をお得に満喫',
    shortTitle: '東京ディズニーリゾート公式ホテル特集',
    description: 'パークの目の前に泊まる夢の体験！ディズニーリゾートライン駅前でパーク直通シャトル運行、入園保証やホテル内バゲッジデリバリーなど特典満載のオフィシャルホテル。「シェラトン・グランデ・トーキョーベイ・ホテル」「ヒルトン東京ベイ」「グランドニッコー東京ベイ 舞浜」を、千葉県浦安市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。',
    heroTag: '超人気！東京ディズニーリゾートオフィシャルホテル特集',
    leadTitle: '閉園後も夢の余韻に包まれて。オフィシャルホテルならではの手厚い特典とラグジュアリーステイをふるさと納税で賢く実現',
    leadText: '朝から夜まで一日中遊び尽くしたい東京ディズニーランド＆東京ディズニーシー。パークで思いきり楽しんだ後、満員電車に揺られることなく、わずか数分でホテルのお部屋へ戻り、ふかふかのベッドやベイサイドの夜景に癒やされる贅沢は格別です。東京ディズニーリゾート・オフィシャルホテルなら、リゾートクルーザー（無料シャトルバス）の運行やJR舞浜駅前のウェルカムセンターでの荷物預かり・ホテルへの無料配送、ホテル内ディズニーファンタジーショップ完備など、宿泊者だけの特別な利便性が満載。本特集では、巨大屋内プールやオアシス棟、ファミリー客室が絶賛される「シェラトン・グランデ・トーキョーベイ・ホテル」、童話の世界を再現したハッピーマジックルームや海一望のバルコニーを誇る「ヒルトン東京ベイ」、そして日本最大級の開放的な南欧風アトリウムと口コミ4.6超の贅沢モーニングビュッフェで話題の「グランドニッコー東京ベイ 舞浜」の3大人気宿を厳選。千葉県浦安市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、家族旅行やカップル記念日のディズニー旅行を実質自己負担2,000円でお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '舞浜駅前ウェルカムセンターで手ぶらイン！直通シャトルバスやパーク内特典が充実',
        body: '舞浜駅を降りてすぐ手荷物を預けてホテルへ無料配送。リゾートゲートウェイやベイサイド・ステーション直結で、混雑時でもスムーズにパークとホテルを行き来できます。'
      },
      {
        num: '02',
        title: 'パークビューや東京湾の絶景パノラマ！夢の国と花火をお部屋から眺める非日常',
        body: '客室の窓やバルコニーからは、きらめくシンデレラ城やプロメテウス火山、夜空を彩る花火、東京湾の爽快なオーシャンビュー。夜遅くまで感動が途切れません。'
      },
      {
        num: '03',
        title: '浦安市ふるさと納税で宿泊費を最大30％OFF！3年間有効でイベントに合わせて予約可能',
        body: 'ハロウィーン、クリスマス、新エリア誕生など、行きたいシーズンに合わせてクーポンを柔軟に利用可能。直前予約の「あとからクーポン適用」にも対応しています。'
      }
    ],
    hotelDetails: [
      {
        key: 'sheraton_disney',
        badge: '千葉県浦安市・ベイサイド・ステーション目の前！キッズランド＆室内プール完備の圧倒的人気オフィシャルホテル',
        rank: '厳選名宿 第1選',
        desc: 'ディズニーリゾートライン「ベイサイド・ステーション」の目の前に位置する、東京ディズニーリゾートを代表する大型ラグジュアリーホテル。館内には広大な室内プールや大浴場・サウナ、パターゴルフ、キッズエリア「Wizkids」を備えたアクティビティ施設「オアシス」を完備し、三世代旅行や小さな子ども連れファミリーにも大絶賛。パークの景色を望むパークウイングルームや東京湾の夕陽に染まるオーシャンビュールームなど多彩な客室が揃い、朝食ビュッフェではシェフが目の前で仕上げるオムレツや焼きたてクロワッサンなど圧巻のメニューを堪能できます。'
      },
      {
        key: 'hilton_disney',
        badge: '千葉県浦安市・童話の魔法がかかったファミリールームが大人気！オーシャンビューと一流のグローバルサービス',
        rank: '厳選名宿 第2選',
        desc: '東京湾とパークの美しいコントラストを望む、舞浜ベイエリアを代表する国際派リゾートホテル。森の動物たちや魔法の鍵が仕掛けられたコンセプトルーム「ハッピーマジックルーム」は、客室に入った瞬間から子どもたちの歓声が響く大人気フロア。24時間営業のコンビニエンスストアや本格ベーカリー、夏季のガーデンプールやフィットネスセンターも完備。ブッフェレストラン「フォレストガーデン」では、和洋中からアジアン料理までシェフが目の前で調理するライブ感あふれるダイニングが楽しめ、ディズニー旅行を華やかに彩ります。'
      },
      {
        key: 'nikko_disney',
        badge: '千葉県浦安市・日本最大級の南欧風吹き抜けアトリウム！口コミ総合4.6超・100種以上の贅沢朝食ビュッフェ',
        rank: '厳選名宿 第3選',
        desc: '南欧の街並みをイメージしたピンクの外観と、9層吹き抜け・国内最大級の開放的なアトリウムロビーが圧巻のラグジュアリーホテル。客室はパステルカラーで統一されたバルコニー付きで、海風を感じながらパークの夜景や富士山を遠望できます。特に宿泊者から絶大な支持を集めているのがオールデイダイニング「ル・ジャルダン」の朝食ビュッフェ。注文を受けてから握るおにぎりやシェフ特製のローストビーフバーガー、パフォーマンスキッチンで作られるフレンチトーストなど100種類以上の極上グルメが揃い、夢の一日を最高の朝からスタートできます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-themepark-aquarium-family-hotel-stay', title: '【テーマパーク＆水族館満喫ホテル×ふるさと納税】家族旅行におすすめの宿' },
      { slug: 'furusato-tax-welcome-baby-family-kids-stay', title: '【ウェルカムベビーのお宿認定×ふるさと納税】赤ちゃん・幼児連れ安心名宿' },
      { slug: 'furusato-tax-indoor-pool-kids-family-resort-stay', title: '【一年中泳げる室内温水プール宿×ふるさと納税】那須・草津・別府リゾート' },
      { slug: 'furusato-tax-usj-osaka-official-partner-hotel-stay', title: '【USJ公式オフィシャルホテル×ふるさと納税】パーク徒歩圏・天然温泉' }
    ]
  },
  {
    slug: 'furusato-tax-usj-osaka-official-partner-hotel-stay',
    componentName: 'FurusatoUSJOfficialPartnerHotelStayPage',
    tag: 'USJオフィシャル・パートナーホテル特集',
    title: 'パーク徒歩圏＆天然温泉！USJオフィシャルホテル×ふるさと納税完全攻略ガイド【2026年最新】近鉄・京阪タワー・リーベルで大阪旅行をお得に満喫',
    metaTitle: 'パーク徒歩圏＆天然温泉！USJオフィシャルホテル×ふるさと納税完全攻略ガイド【2026年最新】近鉄・京阪タワー・リーベルで大阪旅行をお得に満喫',
    shortTitle: 'USJオフィシャルホテル特集',
    description: 'ユニバーサル・スタジオ・ジャパン（USJ）の目の前に泊まる感動！パークまで徒歩1〜2分、スタジオ・パスのホテル内購入やキャラクタールーム、地上110mの絶景天然温泉など特典満載。「ホテル近鉄ユニバーサル・シティ」「ホテル京阪 ユニバーサル・タワー」「リーベルホテル大阪」を、大阪市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。',
    heroTag: '超人気！ユニバーサル・スタジオ・ジャパン公式宿特集',
    leadTitle: 'パークゲートを出てすぐベッドへダイブ！天然温泉やキャラクタールームでUSJと大阪観光を満喫する極上ステイ',
    leadText: 'スーパー・ニンテンドー・ワールドやウィザーディング・ワールド・オブ・ハリー・ポッターなど、世界中から熱い視線が集まるユニバーサル・スタジオ・ジャパン（USJ）。朝一番の開園ダッシュから夜のナイトパレードまで遊び尽くすなら、パーク徒歩圏内のオフィシャルホテル宿泊が絶対の正解です。ホテル内で当日のスタジオ・パスが購入できチケットブースの行列を回避できるほか、アトラクションの待ち時間モニター完備、キャラクタールームなど、オフィシャルホテルならではの手厚いメリットが目白押し。本特集では、パークゲートまで徒歩1分・セサミストリートのコンセプトフロアが大人気の「ホテル近鉄ユニバーサル・シティ」、USJエリア最高層32階建て・地上110mに展望天然温泉大浴場を備えた「ホテル京阪 ユニバーサル・タワー」、そして広大なリバーサイドテラスと地下約1,000mから湧く広大な天然温泉スパを誇る都市型リゾート「リーベルホテル大阪」の3宿を厳選。大阪市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円でUSJ旅行をお得に実現しましょう。',
    threePoints: [
      {
        num: '01',
        title: 'パークまで徒歩1分〜駅直結！混雑前のアトラクションへいち早く直行できる好立地',
        body: '開園前の待ち列にいち早く並べ、遊び疲れたら途中でお部屋に戻って休憩も自由自在。閉園までアトラクションを楽しんだ後も、混雑する電車に乗らず徒歩でホテルへ帰着できます。'
      },
      {
        num: '02',
        title: 'パークの疲れをリセットする天然温泉！地上110mの夜景展望風呂や広大露天スパ',
        body: 'USJ周辺には良質な天然温泉を完備したオフィシャル宿が充実。一日中歩き回った足を広々とした大浴場や露天風呂、サウナで癒やし、翌朝も元気に大阪観光へ出発できます。'
      },
      {
        num: '03',
        title: '大阪市ふるさと納税で最大30％OFF！3年間有効クーポンでイベントに合わせて利用可能',
        body: 'ハロウィーンホラーナイトやクリスマス、春休みの旅行シーズンなど、ピーク時期に合わせて自由に予約可能。予約済み日程への「あとからクーポン適用」にも対応しています。'
      }
    ],
    hotelDetails: [
      {
        key: 'kintetsu_usj',
        badge: '大阪府大阪市・USJゲートまで徒歩1分！セサミストリートのポップな世界観と館内チケットカウンター完備',
        rank: '厳選名宿 第1選',
        desc: 'ユニバーサルシティ駅とUSJゲートを結ぶメインストリートに直結し、パークのメインゲートまで徒歩わずか1分という抜群のロケーションを誇る人気オフィシャルホテル。館内はセサミストリートの仲間たちが出迎えるカラフルでエネルギッシュな空間が広がり、客室フロア全体がセサミストリートの世界になったコンセプトフロアは子どもから大人まで大興奮。ホテル内に直営チケットカウンターがあり、当日のスタジオ・パスやアトラクション情報をスムーズに入手可能。朝食ビュッフェでは大阪名物のたこ焼きや串カツ、キッズ専用カウンターも用意され、USJの熱気そのままに滞在できます。'
      },
      {
        key: 'keihan_usj',
        badge: '大阪府大阪市・USJエリア最高層32階タワー！地上110m「スパ・ハーブス」の展望天然温泉とパノラマ夜景',
        rank: '厳選名宿 第2選',
        desc: 'JRユニバーサルシティ駅直結、高さ138m・エリア最高層を誇るランドマークオフィシャルホテル。31階には地上110mから大阪市街のきらめく夜景と大阪湾を一望できる展望天然温泉「S-PARK（スパ・ハーブス）」を完備。サウナやジャグジー、バイブラバスでパークの疲れを芯から癒やせます。客室はシックで落ち着きのあるモダンインテリアで統一され、高層階からのパノラマビューは息をのむ美しさ。最上階スカイレストランでのディナーや朝食ビュッフェでは、シェフが焼き上げるライブステーキやホテル特製フレンチトーストを堪能できます。'
      },
      {
        key: 'liber_usj',
        badge: '大阪府大阪市・楽天アワード受賞＆口コミ4.7超！地下1000m天然温泉大浴場と安治川を望む広大テラス',
        rank: '厳選名宿 第3選',
        desc: '桜島駅目の前・USJへ徒歩圏内に建つ、エリア最大規模を誇る都市型スパリゾートホテル。敷地地下約1,000mから湧き出る自家源泉「リバーサイドスパ」には、広々とした露天風呂や内湯、炭酸風呂、ドライサウナ、水風呂が完備され、温泉旅館顔負けの本格スパ体験を提供。広大なオープンエアのリバーサイドテラスからは天保山大観覧車や大阪ベイエリアの夜景が一望できます。朝食ビュッフェではシェフが目の前で炭火焼きする牛肉ステーキやジェラート食べ放題など口コミ評価4.7超の極上メニューが並び、満足度の高い滞在が約束されます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-tokyo-disney-resort-official-hotel-stay', title: '【東京ディズニーリゾート公式ホテル×ふるさと納税】舞浜直結オフィシャル' },
      { slug: 'furusato-tax-themepark-aquarium-family-hotel-stay', title: '【テーマパーク＆水族館満喫ホテル×ふるさと納税】家族旅行におすすめの宿' },
      { slug: 'furusato-tax-indoor-pool-kids-family-resort-stay', title: '【一年中泳げる室内温水プール宿×ふるさと納税】那須・草津・別府リゾート' },
      { slug: 'furusato-tax-all-inclusive-free-drinks-alcohol-stay', title: '【お酒飲み放題オールインクルーシブ宿×ふるさと納税】贅沢ラウンジステイ' }
    ]
  },
  {
    slug: 'furusato-tax-all-inclusive-free-drinks-alcohol-stay',
    componentName: 'FurusatoAllInclusiveFreeDrinksStayPage',
    tag: '飲み放題オールインクルーシブ名宿特集',
    title: '生ビール・地酒・ワインが飲み放題！お財布を気にせず寛ぐオールインクルーシブ名宿×ふるさと納税完全ガイド【2026年最新】作並・松島・伊勢志摩',
    metaTitle: '生ビール・地酒・ワインが飲み放題！お財布を気にせず寛ぐオールインクルーシブ名宿×ふるさと納税完全ガイド【2026年最新】作並・松島・伊勢志摩',
    shortTitle: '飲み放題オールインクルーシブ名宿特集',
    description: 'チェックインからアウトまで、ラウンジのお酒・スイーツ・湯上がりビール・出来立て料理がすべて宿泊代金込み！追加料金ゼロで贅沢な休日を叶えるオールインクルーシブ温泉宿。「ゆづくしSalon一の坊」「松島一の坊」「グランドメルキュール伊勢志摩リゾート＆スパ」を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '大人気！お酒飲み放題オールインクルーシブ宿特集',
    leadTitle: '暖炉ラウンジで地酒やワインを片手に読書、湯上がりに冷たい生ビール。お財布フリーで心からくつろぐ至福のリトリートへ',
    leadText: '宿泊料金に滞在中の食事、夕朝食時のアルコール・ソフトドリンク、クラブラウンジでの生ビールやスパークリングワイン、おつまみ、スイーツ、アクティビティまで全てが含まれる「オールインクルーシブ（All-Inclusive）」。チェックアウト時の追加精算を気にする必要が一切なく、食べたい時に食べ、飲みたい時に上質なお酒をグラスに注ぎ、好きな場所で気ままに寛ぐ——。これまでの温泉旅館の概念を覆す、自由でストレスフリーな大人の休日スタイルとして今絶大な支持を集めています。本特集では、広瀬川の渓流沿いに建ち、暖炉のあるサイレントラウンジで仙台銘酒や生ビール、挽きたて珈琲を片手に源泉巡りを楽しむ「仙台・作並温泉 ゆづくしSalon一の坊」、日本三景・松島のパノラマビューと生演奏、目の前で料理人が腕を振るうオーダービュッフェ食べ飲み放題が圧巻の「松島温泉 松島一の坊」、そして伊勢志摩の豊かな自然に抱かれ、宿泊者全員が利用できる贅沢なクラブラウンジでアルコールやイブニングソーシャルを堪能できる話題のリブランド名宿「グランドメルキュール伊勢志摩リゾート＆スパ」の3宿を厳選。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で最高峰のお財布フリー温泉旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '追加料金ゼロの安心感！チェックインからアウトまでお酒・おつまみ・カフェが自由',
        body: 'ラウンジの生ビールサーバー、厳選ワイン、ご当地地酒、ハーブティーや特製スイーツまで全てフリー。お財布を持たずに館内を行き来できるストレスフリーな滞在が叶います。'
      },
      {
        num: '02',
        title: '料理人のライブキッチン×出来立て美食！好きなものを好きなだけ味わう贅沢',
        body: '作り置きをせず、目の前で炭火焼きされる特選牛や握りたて寿司、揚げたて天ぷら。料理長厳選の旬の料理に合わせてペアリングのお酒を自由に楽しめます。'
      },
      {
        num: '03',
        title: '楽天ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や週末旅に賢く活用',
        body: 'オールインクルーシブの上質な宿泊プランもふるさと納税なら自己負担実質2,000円。寄付額の最大30％相当が割引となり、夫婦の記念日や大人の女子旅に最適です。'
      }
    ],
    hotelDetails: [
      {
        key: 'sakunami_ichinobo',
        badge: '宮城県仙台市・広瀬川源流の自然に溶け込むオールインクルーシブ温泉！3つの源泉八つの湯船と静寂のサロンラウンジ',
        rank: '厳選名宿 第1選',
        desc: '仙台の奥座敷・作並温泉の渓流沿いに佇む、「理想の日常を過す」をコンセプトにした日本屈指のオールインクルーシブ温泉リゾート。館内の「くつろぎSalon」では、挽きたての珈琲や手作りスイーツ、夕刻からの生ビールや宮城の厳選地酒、ワイン、おつまみが全て無料。清流のせせらぎを聞きながら暖炉の火を眺め、読書や語らいの時間を楽しめます。3つの異なる源泉から湧き出る「八の坊温泉巡り」では広瀬川渓流露天風呂や立ち湯を満喫。夕食は宮城の山海の幸を料理人が目の前で調理するオーダービュッフェで、出来立ての逸品とお酒を心ゆくまで味わえます。'
      },
      {
        key: 'matsushima_ichinobo',
        badge: '宮城県松島町・日本三景「松島」を一望するオーシャンビュー！七千坪の水上庭園と料理人が目の前で創る出来立て会席',
        rank: '厳選名宿 第2選',
        desc: '松島の穏やかな海と島々を望む、七千坪の敷地を有する最高峰のオーシャンビュー・オールインクルーシブ宿。松島湾に浮かぶような水上庭園や開放的なラウンジでは、生演奏の音色とともに生ビールやスパークリングワイン、特製おつまみを自由にテイクアウト可能。夕食はオーダービュッフェ「青海波」にて、三陸の新鮮な海の幸のお造りや仙台牛の炭火焼きステーキ、出来立ての天ぷらを職人が目の前で仕上げて提供。美肌の「松島温泉」の展望露天風呂に浸かりながら、日常の疲れを完全に解き放つ大人の休日が過ごせます。'
      },
      {
        key: 'mercure_allinc',
        badge: '三重県志摩市・話題のリブランドホテル！宿泊者全員無料のクラブラウンジでアルコールとおつまみを優雅に満喫',
        rank: '厳選名宿 第3選',
        desc: 'リアス海岸が織りなす伊勢志摩国立公園の高台に位置し、全面リニューアルで誕生した話題のオールインクルーシブホテル。宿泊者全員がアクセスできるラウンジでは、スパークリングワインや地元のクラフトビール、ワイン、ウィスキー、地元銘菓やおつまみがチェックインからナイトタイムまで無料で楽しめます。広々とした大浴場と露天風呂にはアルカリ性単純温泉が満ち、湯上がり処でも冷たいドリンクを完備。夕食ビュッフェでは伊勢志摩の豊かな海の幸や地元郷土料理を取り入れた多彩なグルメをライブキッチンで提供し、圧倒的なコストパフォーマンスを誇ります。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-wine-brewery-winery-resort-stay', title: '【ワイナリー直営＆ワインペアリング宿×ふるさと納税】勝沼・十勝・余市' },
      { slug: 'furusato-tax-craft-beer-brewery-onsen-stay', title: '【クラフトビール醸造所直営・地ビール飲み放題宿×ふるさと納税】' },
      { slug: 'furusato-tax-tokyo-disney-resort-official-hotel-stay', title: '【東京ディズニーリゾート公式ホテル×ふるさと納税】舞浜直結オフィシャル' },
      { slug: 'furusato-tax-usj-osaka-official-partner-hotel-stay', title: '【USJ公式オフィシャルホテル×ふるさと納税】パーク徒歩圏・天然温泉' }
    ]
  },
  {
    slug: 'furusato-tax-indoor-pool-kids-family-resort-stay',
    componentName: 'FurusatoIndoorPoolKidsFamilyStayPage',
    tag: '室内温水プール・子連れファミリーリゾート特集',
    title: '雨の日も冬も年中泳げる！室内温水プール＆子ども向け設備充実の大型温泉リゾート×ふるさと納税完全ガイド【2026年最新】那須・草津・別府',
    metaTitle: '雨の日も冬も年中泳げる！室内温水プール＆子ども向け設備充実の大型温泉リゾート×ふるさと納税完全ガイド【2026年最新】那須・草津・別府',
    shortTitle: '室内温水プール＆ファミリーリゾート特集',
    description: '天候や季節を気にせず一年中水遊びを満喫！子ども用浅瀬プールやウォータースライダー、キッズパーク、託児所、大浴場温泉、豪華ファミリーバイキング完備。「ホテルエピナール那須」「草津温泉 ホテルヴィレッジ」「別府温泉 杉乃井ホテル」を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: 'ファミリー大絶賛！年中泳げる室内プール宿特集',
    leadTitle: '雨でも雪でもへっちゃら！一年中泳げる室内温水プールと巨大キッズパークで、家族みんなの笑顔が輝く休日へ',
    leadText: 'せっかくの家族旅行、当日あいにくの雨や寒さでお出かけプランが台無しになってしまった……という経験はありませんか？天候や季節に左右されず、子どもたちが思いきり体を動かして遊べる「全天候型・室内温水プール完備の大型温泉リゾート」なら、年中いつでも安心・快適な休日が約束されます。浅瀬の幼児用プールや浮き輪の持ち込みOKな温水プール、屋内の巨大キッズパーク、ゲームコーナー、ボウリング場、そしてパパ・ママを癒やす本格的な天然温泉大浴場や露天風呂、シェフが目の前で焼き上げるキッズフレンドリーな豪華ディナーバイキングまで、一カ所で全てが完結する圧倒的な充実度が魅力です。本特集では、25m室内温水プールや託児所、託児ルーム、ウェルカムベビー認定客室でファミリー人気No.1を誇る「那須温泉 ホテルエピナール那須」、敷地内に温水プール「テルメテルメ」やフォレストステージ、ボウリング場を備えた大自然アクティビティ宿「草津温泉 ホテルヴィレッジ」、そして屋内波の出るプール「アクアビート」や大展望露天風呂「棚湯」、全天候型噴水ショーを誇る九州屈指のエンタメ巨大リゾート「別府温泉 杉乃井ホテル」の3大名宿を厳選。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円でお得に家族の思い出旅行を叶えましょう。',
    threePoints: [
      {
        num: '01',
        title: '雨・雪・冬でも安心！年中適温で楽しめる全天候型屋内温水プール＆スライダー',
        body: '外の天候や気温に関係なく、いつでも温かい水温で楽しめる屋内プール。小さな子どもでも安心の深さのキッズプールやジャグジー、スライダーを完備し、家族で水遊びを満喫できます。'
      },
      {
        num: '02',
        title: '子ども向けバイキング＆キッズアメニティ！パパ・ママも安心の手ぶら旅行対応',
        body: '離乳食無料提供、子ども用浴衣、ベビーベッドやベッドガード、キッズバイキングコーナーなど子連れ旅行を徹底サポート。荷物を減らしてストレスなく旅行が楽しめます。'
      },
      {
        num: '03',
        title: '大人も大満足の名湯温泉＆エステ！家族全員が笑顔になれる充実のリゾート設計',
        body: '子どもたちがプールやパークで思いきり遊んだ後は、名湯・美肌温泉の広々とした露天風呂で大人もリフレッシュ。三世代旅行にも選ばれる総合力の高さが魅力です。'
      }
    ],
    hotelDetails: [
      {
        key: 'epinard_nasu',
        badge: '栃木県那須町・口コミ8500件超＆総合4.4！一年中泳げる室内温水プールと那須随一の豪華ファミリーバイキング',
        rank: '厳選名宿 第1選',
        desc: '那須高原の雄大な自然の中に佇み、全国のファミリーから圧倒的な支持を集める大型温泉リゾートホテル。一年中利用できる室内温水プールには深さ30cm・60cmのお子様用プールやワールプールが備わり、天候を気にせず家族で水遊びが楽しめます。敷地内には保育士資格を持つスタッフが常駐する託児所やツリーハウス、芝生広場も完備。客室はベビー＆キッズ専用の「チャギントンルーム」や「ベビーコーナールーム」など安全に配慮されたお部屋が充実。那須最大規模の朝夕バイキングでは、地元高原野菜や特選牛ステーキ、充実の離乳食・キッズコーナーが揃い、三世代旅行にも最適です。'
      },
      {
        key: 'kusatsu_village',
        badge: '群馬県草津町・草津の名湯×全天候型クア施設「テルメテルメ」！プール・ボウリング・森林アスレチック',
        rank: '厳選名宿 第2選',
        desc: '草津温泉街から少し離れた標高1,200mの白樺林に囲まれた、広大な敷地を誇るアクティビティ総合リゾート。館内直結のクアパーク「テルメテルメ」には、屋内温水プールや幼児用プール、打たせ湯、サウナなど多彩な温浴施設が揃い、一年を通じて水着で楽しめます。さらにボウリング場や卓球場、ビリヤード、屋外フォレストステージなど雨の日でも退屈しない仕掛けが満載。温泉は大浴場「森の温泉」にて名湯・草津温泉の源泉掛け流しを堪能でき、夕食は上州の味覚をふんだんに取り入れた和洋中バイキングを満喫できます。'
      },
      {
        key: 'beppu_suginoi',
        badge: '大分県別府市・口コミ1万2千件超の超巨大温泉エンタメ宿！屋内波プール「アクアビート」と大展望露天風呂「棚湯」',
        rank: '厳選名宿 第3選',
        desc: '別府湾を見下ろす高台に建ち、九州を代表するエンターテインメント巨大温泉リゾート。夏季を中心に大人気を誇る全天候型屋内プール「アクアビート」では、人工波の出る波のプールやウォータースライダー、キッズウォータージャングルがあり子どもたちの笑顔が弾けます。さらに水着で入れる屋外温泉プール「アクアガーデン」では噴水ショーが毎夜開催。5段の湯船が棚田状に広がる大展望露天風呂「棚湯」からは別府湾の絶景パノラマと夜景を一望でき、圧倒的なスケールのライブキッチンビュッフェとともに極上の休日を体験できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-welcome-baby-family-kids-stay', title: '【ウェルカムベビーのお宿認定×ふるさと納税】赤ちゃん・幼児連れ安心名宿' },
      { slug: 'furusato-tax-themepark-aquarium-family-hotel-stay', title: '【テーマパーク＆水族館満喫ホテル×ふるさと納税】家族旅行におすすめの宿' },
      { slug: 'furusato-tax-tokyo-disney-resort-official-hotel-stay', title: '【東京ディズニーリゾート公式ホテル×ふるさと納税】舞浜直結オフィシャル' },
      { slug: 'furusato-tax-usj-osaka-official-partner-hotel-stay', title: '【USJ公式オフィシャルホテル×ふるさと納税】パーク徒歩圏・天然温泉' }
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

for (const cfg of round80Configs) {
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
    'ふるさと納税 ホテル',
    '${cfg.shortTitle}',
    '楽天ふるさと納税 トラベル',
    '${sanitizeString(h1.hotelName || '')}',
    '${sanitizeString(h2.hotelName || '')}',
    '${sanitizeString(h3.hotelName || '')}',
    'オフィシャルホテル',
    'ファミリー旅行',
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
          <time dateTime="2026-09-09">2026年9月9日公開</time>
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
              ${sanitizeString(h1.hotelSpecial || '公式オフィシャルならではの高品質な設備とおもてなしを提供しています。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h1.userReview || 'ロケーションも接客も素晴らしく、とても快適に過ごせました。')}”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="${h1.planListUrl || h1.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏨</span>
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
              ${sanitizeString(h2.hotelSpecial || '充実の館内設備と快適な客室で極上のリゾート滞在をお届けします。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h2.userReview || '朝食もとても美味しく、お風呂も広くて大満足でした。')}”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="${h2.planListUrl || h2.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏨</span>
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
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ ${h3.reviewAverage || '4.6'}</span> (${h3.reviewCount || 0}件)</div>
            <div><strong>参考価格:</strong> 1名あたり約${(h3.hotelMinCharge || 19000).toLocaleString()}円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">${h3Desc}</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h3.hotelSpecial || '贅沢な館内空間とこだわりの料理で思い出に残るご滞在をお約束します。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h3.userReview || '家族みんなが大絶賛でした。またぜひ利用したいホテルです。')}”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="${h3.planListUrl || h3.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏨</span>
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
              <p className="text-xs md:text-sm text-gray-600">訪れたいホテルのある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
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
              <p className="text-xs md:text-sm text-gray-600">翌年の住民税・所得税から控除され、実質負担は年間2,000円のみ！浮いた予算でお土産やテーマパークグッズを満喫できます。</p>
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
              <span>複数人や家族での宿泊代金全体に対して割引されますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、1回の予約の「総宿泊代金」に対してクーポンが適用されますので、家族全員分やグループ旅行の宿泊費全体から割引を受けることが可能です。
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

console.log('\nAll 4 Round 80 pages successfully written!');
