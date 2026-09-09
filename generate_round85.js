const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const round85Configs = [
  {
    slug: 'furusato-tax-kurokawa-onsen-yumeguri-luxury-stay',
    componentName: 'FurusatoKurokawaOnsenYumeguriStayPage',
    tag: '黒川温泉 入湯手形＆渓流露天風呂宿特集',
    title: '阿蘇の秘湯・黒川温泉の入湯手形めぐり＆渓流絶景露天風呂×ふるさと納税完全攻略ガイド【2026年最新】山みず木・奥の湯・新明館',
    metaTitle: '阿蘇の秘湯・黒川温泉の入湯手形めぐり＆渓流絶景露天風呂×ふるさと納税完全攻略ガイド【2026年最新】山みず木・奥の湯・新明館',
    shortTitle: '黒川温泉 入湯手形＆秘湯名宿特集',
    description: 'ミシュラン2つ星を獲得した阿蘇の渓谷温泉地・黒川温泉！名物「入湯手形」で三十軒の個性豊かな露天風呂めぐり。「山あいの宿 山みず木」「旅館 奥の湯」「山の宿 新明館」を、熊本県南小国町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。渓流露天風呂、洞窟風呂、肥後あか牛会席を満喫。',
    heroTag: '自然と共生する日本の秘湯！黒川温泉特集',
    leadTitle: '渓流のせせらぎ、木漏れ日と立ちのぼる湯煙。入湯手形を手に巡る阿蘇・黒川温泉の極上癒やし旅へ',
    leadText: '熊本県阿蘇郡南小国町、標高700メートルの山あいにひっそりと佇む「黒川温泉（くろかわおんせん）」。かつて全国的な過疎の危機を乗り越え、「街全体が一つの宿、通りは廊下、旅館は客室、木々は庭の植木」という一貫した景観哲学のもと再生を遂げ、ミシュラン・グリーンガイド・ジャポンで異例の2つ星評価を獲得した日本屈指の名湯です。黒川温泉を代表する名物が、杉の間伐材で作られた「入湯手形」。これを手にすれば、加盟旅館の中から好きな露天風呂を自由に3箇所めぐることができ、雑木林の小道や川端通りを浴衣と下駄で歩く風情はまさに日本の原風景そのものです。田の原川の清流がすぐ目の前に迫る野趣あふれるダイナミックな渓流露天風呂、職人が長い年月をかけて手彫りした幻想的な洞窟風呂、茅葺き屋根と竹林に包まれた静寂の空間など、宿ごとに全く異なる魅力が凝縮。夕食には、阿蘇の大草原で育ったヘルシーで旨味濃厚な「肥後あか牛」の炭火焼きや陶板焼き、熊本名物の極上馬刺し、清流のヤマメや鮎など、里山の豊かな恵みを五感で堪能できます。本特集では、渓流と森が一体化した圧倒的な露天風呂を誇る「山あいの宿 山みず木」、竹林と茅葺き門に迎えられる多彩な湯処の名宿「旅館 奥の湯」、そして名物「手掘り洞窟風呂」と風情ある川端通りのシンボル「山の宿 新明館」の3大名宿を厳選。熊本県南小国町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの黒川温泉ステイをお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '名物「入湯手形」で三十軒の露天風呂めぐり！杉の香りと浴衣散策の贅沢時間',
        body: '杉の間伐材で作られた入湯手形を片手に、川沿いや森の中に点在する個性豊かな名湯を湯巡り。里山の自然と調和した街並みをのんびり散策できます。'
      },
      {
        num: '02',
        title: '川のせせらぎと一体化する渓流露天＆手掘り洞窟風呂！野趣あふれる秘湯体験',
        body: '田の原川の清流を間近に感じる大露天風呂や、秘湯感満点の手掘り洞窟風呂など、日常の喧騒を完全に忘れさせてくれる非日常の温泉体験が待っています。'
      },
      {
        num: '03',
        title: '南小国町ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や癒やし旅に最適',
        body: '人気と格式の高い黒川温泉の名宿も、ふるさと納税なら実質自己負担2,000円。寄付から3年間有効なので、新緑や紅葉、雪見のベストシーズンに合わせて予約可能です。'
      }
    ],
    hotelDetails: [
      {
        key: 'kurokawa_yamamizuki',
        badge: '熊本県南小国町・田の原川の渓流と原生林に抱かれた最高峰露天風呂！口コミ総合4.6超・自然と一体になる究極の癒やし宿',
        rank: '厳選名宿 第1選',
        desc: '黒川温泉街から少し離れた奥黒川の静寂な森に佇む、温泉ファン憧れの名旅館。宿の最大の自慢は、田の原川の清流にせり出すように作られた男性用露天風呂「幽谷の湯」と、女性用露天風呂「森の湯」。川のせせらぎの音と木々のざわめきに包まれながら、自然の息吹をダイレクトに感じる極上の湯浴みが堪能できます。客室は木の温もりを大切にした純和風の設えで、窓からは手付かずの大自然を一望。夕食は阿蘇の大地が育んだ肥後あか牛や山菜、地元農家直送の瑞々しい野菜を使った滋味豊かな和会席。都会の喧騒から完全に解き放たれる贅沢なひとときを約束してくれます。'
      },
      {
        key: 'kurokawa_okunoyu',
        badge: '熊本県南小国町・茅葺き屋根の山門と竹林の静寂！混浴露天・女性専用露天・洞窟風呂など多彩な湯巡りが楽しめる名門',
        rank: '厳選名宿 第2選',
        desc: '黒川温泉の上流、静寂に包まれた森の中に位置する全室川沿いの温泉宿。風情ある茅葺き屋根の門をくぐると、緑豊かな竹林と小川が広がり、旅情を掻き立てます。宿の敷地内には、川沿い大露天風呂をはじめ、もみじの湯、幻想的な洞窟風呂、地熱を利用した蒸し風呂など多彩な浴場が点在し、館内だけで贅沢な湯巡りが完結。客室は落ち着きある本館和室から露天風呂付き離れまで多彩。夕食は阿蘇のあか牛ステーキや旬の川魚の塩焼き、手作りの郷土料理が彩り豊かに並び、温かなおもてなしとともに心温まる滞在を叶えてくれます。'
      },
      {
        key: 'kurokawa_shinmeikan',
        badge: '熊本県南小国町・黒川温泉街の中心・川端通り沿い！名物「手掘り洞窟風呂」と囲炉裏の風情が香る創業創業明治の名旅館',
        rank: '厳選名宿 第3選',
        desc: '黒川温泉の中心を流れる川端通りに面し、情緒ある木造建築と木橋が目を引く老舗旅館。宿のシンボルとなっているのが、三代目の主人がノミとツチを使って10年もの歳月をかけて掘り進めた全長30メートルの「名物洞窟風呂」。ほの暗い洞窟内に漂う神秘的な湯気と温かな湯触りは、他では決して味わえない圧倒的な秘湯情緒を醸し出します。風情ある巨石露天風呂や家族風呂も充実。客室は昔ながらの日本旅館の風情を色濃く残し、川のせせらぎが心地よい子守唄に。夕食は熊本の特選あか牛や季節の山川の幸をふんだんに盛り込んだ贅沢な会席料理を堪能できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-yufuin-onsen-kinrinko-luxury-stay', title: '【由布院温泉＆金鱗湖名門宿×ふるさと納税】花由・秀峰館・梅園' },
      { slug: 'furusato-tax-beppu-onsen-jigoku-meguri-stay', title: '【別府温泉 地獄めぐり＆絶景リゾート×ふるさと納税】杉乃井・山水館・亀の井' },
      { slug: 'furusato-tax-dogo-onsen-honkan-walk-luxury-stay', title: '【道後温泉 本館散策＆老舗旅館×ふるさと納税】ふなや・道後御湯・道後プリンス' },
      { slug: 'furusato-tax-private-villa-hanare-hideaway-stay', title: '【大人の隠れ家・離れ客室×ふるさと納税】静寂とプライベート重視の名宿' }
    ]
  },
  {
    slug: 'furusato-tax-ginzan-onsen-taisho-romantic-stay',
    componentName: 'FurusatoGinzanOnsenRomanticStayPage',
    tag: '銀山温泉 大正ロマン＆雪見温泉名宿特集',
    title: 'ガス灯揺らめく大正ロマンの木造楼閣！銀山温泉の川沿い名門旅館＆極上尾花沢牛会席×ふるさと納税完全攻略ガイド【2026年最新】能登屋・銀山荘・古勢起屋',
    metaTitle: 'ガス灯揺らめく大正ロマンの木造楼閣！銀山温泉の川沿い名門旅館＆極上尾花沢牛会席×ふるさと納税完全攻略ガイド【2026年最新】能登屋・銀山荘・古勢起屋',
    shortTitle: '銀山温泉 大正ロマン宿特集',
    description: 'まるで千と千尋の神隠しの世界！ガス灯揺らめく銀山温泉の木造多層建築。「能登屋旅館」「仙峡の宿 銀山荘」「古勢起屋別館」を、山形県尾花沢市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。国登録有形文化財、川沿い展望露天寝湯、極上の霜降り尾花沢牛会席を満喫。',
    heroTag: '雪景色とガス灯の大正ロマン！山形県銀山温泉特集',
    leadTitle: '白粘土の鏝絵、ガス灯に照らされる銀山川。大正ロマンの風情が色濃く残る銀山温泉の幻想的な時間へ',
    leadText: '山形県尾花沢市の山峡に位置し、かつて延沢銀山の鉱山として栄えた歴史を持つ「銀山温泉（ぎんざんおんせん）」。川を挟んで立ち並ぶ三層・四層の木造多層建築群、壁を彩る鮮やかな鏝絵（こてえ）、夕暮れとともに灯るガス灯の柔らかな光、そして石畳の歩道に舞い落ちる雪景色——。その圧倒的なノスタルジーと幻想的な景観は、国内外の旅行者を魅了してやみません。銀山温泉の湯は、古くから湯治場として親しまれてきた無色透明で硫黄の香りがほんのり漂うナトリウム-塩化物・硫酸塩温泉。体の芯からぽかぽかと温まり、湯冷めしにくい極上の泉質です。宿の客室から川面を眺めれば、まるで大正時代にタイムスリップしたかのような錯覚を覚えます。さらにグルメの魅力も見逃せません。山形が全国に誇る極上の黒毛和牛「尾花沢牛（おばなざわぎゅう）」の霜降りステーキやしゃぶしゃぶ、山形のブランド米「つや姫」、清らかな伏流水で打たれた名物尾花沢蕎麦など、地元の山海の恵みが食卓を華やかに彩ります。本特集では、国の登録有形文化財に指定され銀山温泉のシンボルとして圧倒的人気を誇る「能登屋旅館」、銀山川の絶景を望む広大な露天寝湯と開放的な大浴場が魅力の「仙峡の宿 銀山荘」、そして大正ロマン薫る木造四層構造の川側客室で街並みを一望できる「古勢起屋別館」の3宿を厳選。山形県尾花沢市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で一生に一度は泊まりたい銀山温泉の憧れ旅を予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '夕暮れのガス灯と木造楼閣！まるで映画のワンシーンのような幻想的な街並み',
        body: '夕暮れ時にガス灯が灯ると温泉街全体が黄金色に包まれ、冬には白銀の雪景色と調和。川沿いをそぞろ歩くだけで非日常のロマンに浸れます。'
      },
      {
        num: '02',
        title: '日本有数の霜降り和牛「尾花沢牛」と山形の豊かな郷土料理を味わい尽くす',
        body: '厳しい寒暖差が育んだ極上のブランド黒毛和牛「尾花沢牛」のしゃぶしゃぶやステーキ、山菜や川魚など、土地の豊かな恵みを堪能できます。'
      },
      {
        num: '03',
        title: '尾花沢市ふるさと納税で最大30％OFF！3年間有効クーポンで予約困難宿を賢く確保',
        body: '予約が取りづらいことで有名な銀山温泉でも、ふるさと納税クーポンなら実質2,000円負担。3年間の有効期間を活かして記念日や冬の旅を計画できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'ginzan_notoya',
        badge: '山形県尾花沢市・国の登録有形文化財！大正十年完成の木造四層楼閣・銀山温泉を象徴する最高峰のシンボル宿',
        rank: '厳選名宿 第1選',
        desc: '銀山温泉のほぼ中央、川のほとりに威風堂々と佇む、大正10年築の木造四層楼閣。国の登録有形文化財に指定されており、職人技が光る繊細な組子障子や欄間、最上階の望楼など、建物自体がひとつの美術品のような格式を誇ります。本館の川側客室からは、ガス灯揺らめく銀山川の風情を一望。館内には創業当時の面影を残す洞窟風呂「元湯」や、白銀の滝を望む展望露天風呂があり、歴史ある名湯を心ゆくまで満喫できます。夕食は極上の尾花沢牛のローストや鴨鍋など、尾花沢の四季折々の滋味を盛り込んだ伝統の郷土会席をお部屋食で気兼ねなく味わえます。'
      },
      {
        key: 'ginzan_ginzanso',
        badge: '山形県尾花沢市・銀山川の渓流を望む絶景「露天寝湯」！開放的な近代設備と尾花沢牛会席が自慢のハイグレード温泉リゾート',
        rank: '厳選名宿 第2選',
        desc: '温泉街の入り口の高台に位置し、銀山温泉随一の広さを誇るモダンで快適な温泉ホテル。最大の魅力は、銀山川の美しい渓谷美を眼下に望みながら、心地よい湯枕に頭をあずけて湯浴みができる「露天寝湯」。夜には満天の星空やライトアップされた渓谷を眺めながら、至福のリラクゼーションに浸ることができます。客室は広々とした和室や半露天風呂付き客室が揃い、シニアや家族連れでも快適。夕食は日本屈指の霜降りを誇るブランド黒毛和牛「尾花沢牛」のステーキやすき焼きをメインにした贅沢な会席料理で、心もお腹も満たされます。'
      },
      {
        key: 'ginzan_kosekiya',
        badge: '山形県尾花沢市・大正ロマンの木造四層構造！川側客室からガス灯と温泉街を見晴らす好立地＆銀山荘の露天風呂も利用可能',
        rank: '厳選名宿 第3選',
        desc: '銀山温泉街の川沿いに佇み、古き良き湯治場の情緒を現代に受け継ぐ木造の温泉旅館。川側の客室からは、夕暮れとともに灯るガス灯と木造建築群が織りなす幻想的な景色を特等席で見下ろすことができます。館内には源泉かけ流しの「ほっこりの湯」があり、さらに姉妹館「銀山荘」の大浴場や露天寝湯も無料で湯巡り可能。客室はステンドグラスや格子戸など大正ロマンの意匠が散りばめられ、カップルや一人旅にも大人気。夕食は尾花沢牛をはじめ山形の旬の食材を丁寧に仕立てた創作和食会席をゆったりと堪能できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-noboribetsu-jigokudani-onsen-luxury-stay', title: '【登別温泉 地獄谷＆名湯ビュッフェ宿×ふるさと納税】第一滝本館・まほろば・グランドホテル' },
      { slug: 'furusato-tax-kinosaki-onsen-sotoyu-meguri-ryokan-stay', title: '【城崎温泉 七田外湯めぐり＆柳並木宿×ふるさと納税】招月庭・小宿縁・つちや旅館' },
      { slug: 'furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay', title: '【草津温泉 湯畑散策＆名湯名門旅館×ふるさと納税】櫻井・一井・奈良屋' },
      { slug: 'furusato-tax-tangible-cultural-property-sukiya-carpenter-ryokan-stay', title: '【登録有形文化財・宮大工数寄屋造り旅館×ふるさと納税】木造建築美の宿' }
    ]
  },
  {
    slug: 'furusato-tax-beppu-onsen-jigoku-meguri-stay',
    componentName: 'FurusatoBeppuOnsenJigokuStayPage',
    tag: '別府温泉 地獄めぐり＆メガリゾート宿特集',
    title: '源泉数・湧出量日本一！別府八湯＆地獄めぐりと大パノラマ露天風呂名門ホテル×ふるさと納税完全攻略ガイド【2026年最新】杉乃井・山水館・亀の井',
    metaTitle: '源泉数・湧出量日本一！別府八湯＆地獄めぐりと大パノラマ露天風呂名門ホテル×ふるさと納税完全攻略ガイド【2026年最新】杉乃井・山水館・亀の井',
    shortTitle: '別府温泉 地獄めぐり宿特集',
    description: '源泉数・湧出量ともに日本一を誇るおんせん県おおいたの象徴・別府温泉！大迫力の地獄めぐりと湯けむり景観。「別府温泉 杉乃井ホテル」「別府鉄輪温泉 ホテル山水館」「亀の井ホテル 別府」を、大分県別府市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。大展望露天風呂棚湯、地獄蒸し、郷土料理バイキングを満喫。',
    heroTag: '日本一の湧出量を誇る温泉王国！大分県別府温泉特集',
    leadTitle: '立ちのぼる湯けむりと別府湾の絶景！地獄めぐりと多彩な泉質に酔いしれる別府八湯の休日へ',
    leadText: '毎分8万リットルを超える驚異の温泉湧出量と、2,000箇所を超える源泉数を誇る、名実ともに日本一の温泉都市「別府温泉（別府八湯）」。街のいたるところから白い湯けむりが立ちのぼる光景は国の重要文化的景観にも選ばれており、海地獄や血の池地獄をはじめとする奇観を巡る「別府地獄めぐり」は、別府を訪れたら外せない大人気観光コースです。別府温泉の魅力は、世界にある全11種類の泉質のうち10種類が揃うとされる泉質の多彩さ。塩化物泉、硫黄泉、炭酸水素塩泉など、浴場ごとに全く異なる肌触りと効能を体感できます。さらに、高温の温泉蒸気で旬の野菜や肉、魚介を一気に蒸し上げる伝統の調理法「地獄蒸し料理」や、大分名物の「とり天」、新鮮な「関アジ・関サバ」など、別府ならではの豊かな食文化が旅の満足度を極限まで高めてくれます。本特集では、棚田状の大展望露天風呂「棚湯」や噴水ショーが全国的な知名度を誇る一大リゾート「別府温泉 杉乃井ホテル」、湯けむり立ち上る鉄輪温泉で展望露天風呂と名物地獄蒸し料理を堪能できる「別府鉄輪温泉 ホテル山水館」、そして別府駅徒歩4分の好立地で広々大浴場と郷土料理バイキングがファミリーに大人気の「亀の井ホテル 別府」の3大名宿を厳選。大分県別府市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で別府温泉の贅沢な温泉旅をお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '別府湾を一望する大パノラマ露天風呂！圧倒的なスケールと湯量の温泉リゾート',
        body: '棚田状に広がる巨大露天風呂や別府湾を見晴らす展望大浴場など、日本一の湯量を誇る別府ならではの開放感あふれる温泉を満喫できます。'
      },
      {
        num: '02',
        title: '名物「地獄蒸し料理」と大分名物グルメ！温泉の恵みをまるごと味わう食体験',
        body: '高温の温泉蒸気で素材の旨味を凝縮させた地獄蒸しや、サクサクのとり天、豊後牛や関アジなど、大分が誇る絶品グルメを心ゆくまで堪能。'
      },
      {
        num: '03',
        title: '別府市ふるさと納税で最大30％OFF！3年間有効クーポンで家族旅行や連泊に大活躍',
        body: '大人気メガリゾートや老舗ホテルもふるさと納税クーポンで実質負担2,000円。寄付から3年間有効なので、長期連休や週末旅行に幅広く使えます。'
      }
    ],
    hotelDetails: [
      {
        key: 'beppu_suginoi',
        badge: '大分県別府市・別府湾を一望する棚田状の大展望露天風呂「棚湯」！口コミ1.2万件超・九州屈指のメガエンターテインメント温泉リゾート',
        rank: '厳選名宿 第1選',
        desc: '別府の高台に位置し、別府湾と市街地を見下ろす圧倒的なスケールを誇る九州屈指の大型温泉リゾートホテル。宿の代名詞である「大展望露天風呂 棚湯」は、棚田のように段状に広がる湯船から、昼は別府湾の青い水平線、夜は満天の星と街の夜景を一望できる大迫力のパノラマ露天風呂。水着で楽しむ温泉プール「アクアガーデン」の光と音の噴水ショーや、ボウリング場などアミューズメントも充実。食事は和洋中それぞれのシェフが目の前で腕を振るうオープンキッチンバイキングで、カニやステーキ、新鮮な刺身が食べ放題。ファミリーや三世代旅行に圧倒的支持を集めています。'
      },
      {
        key: 'beppu_sansuikan',
        badge: '大分県別府市・湯けむり立ち上る鉄輪温泉の好立地！展望大浴場から扇山を仰ぎ名物「地獄蒸し料理」を堪能する名門ホテル',
        rank: '厳選名宿 第2選',
        desc: '別府八湯の中でも最も温泉情緒が漂う鉄輪（かんなわ）温泉に位置する温泉ホテル。館内最上階の展望露天風呂からは、立ちのぼる温泉の湯けむりと鶴見岳・扇山の雄大な稜線を一望でき、朝夕で表情を変える別府の原風景に包まれます。地下の大浴場にも露天風呂を備え、鉄輪の名湯をたっぷりと満喫。夕食は高温の温泉蒸気釜で蒸し上げる名物「地獄蒸し」をはじめ、豊後牛の陶板焼きやお造りなど、素材本来の旨味を最大限に引き出した郷土会席料理を味わえます。地獄めぐりへのアクセスも徒歩圏内で観光の拠点に最適です。'
      },
      {
        key: 'beppu_kamenoi',
        badge: '大分県別府市・JR別府駅より徒歩4分！別府観光の祖・油屋熊八ゆかりの老舗名門＆広々天然温泉大浴場と郷土料理ビュッフェ',
        rank: '厳選名宿 第3選',
        desc: '別府観光の生みの親である油屋熊八が創業した、百余年の歴史を受け継ぐランドマークホテル。JR別府駅から徒歩4分という抜群の立地にありながら、館内には広々とした天然温泉大浴場や露天風呂、サウナを完備し、旅の疲れを心地よく癒やしてくれます。館内には駄菓子屋や縁日コーナー、キッズスペースなど子どもが喜ぶ仕掛けが充実。夕食は大分の郷土料理「とり天」や「りゅうきゅう」、豊後水道の新鮮な魚介が並ぶ豪華バイキングや和食会席が選べ、ビジネスからファミリーまで幅広い世代に高い満足度を誇ります。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-yufuin-onsen-kinrinko-luxury-stay', title: '【由布院温泉＆金鱗湖名門宿×ふるさと納税】花由・秀峰館・梅園' },
      { slug: 'furusato-tax-kurokawa-onsen-yumeguri-luxury-stay', title: '【黒川温泉 入湯手形＆秘湯名宿×ふるさと納税】山みず木・奥の湯・新明館' },
      { slug: 'furusato-tax-noboribetsu-jigokudani-onsen-luxury-stay', title: '【登別温泉 地獄谷＆名湯ビュッフェ宿×ふるさと納税】第一滝本館・まほろば・グランドホテル' },
      { slug: 'furusato-tax-luxury-buffet-gourmet-resort-stay', title: '【豪華ビュッフェ＆オープンキッチン名宿×ふるさと納税】美食リゾート' }
    ]
  },
  {
    slug: 'furusato-tax-kyoto-arashiyama-bamboo-luxury-stay',
    componentName: 'FurusatoKyotoArashiyamaBambooStayPage',
    tag: '京都嵐山 竹林の小径＆渡月橋名宿特集',
    title: '渡月橋と竹林の小径の静寂！京都嵐山温泉の保津川一望ラグジュアリー＆老舗料理旅館×ふるさと納税完全攻略ガイド【2026年最新】翠嵐・花伝抄・辨慶',
    metaTitle: '渡月橋と竹林の小径の静寂！京都嵐山温泉の保津川一望ラグジュアリー＆老舗料理旅館×ふるさと納税完全攻略ガイド【2026年最新】翠嵐・花伝抄・辨慶',
    shortTitle: '京都嵐山 渡月橋＆名門旅館特集',
    description: '四季折々の雅が息づく平安の保養地・京都嵐山！渡月橋の借景と竹林の小径散策。「翠嵐 ラグジュアリーコレクションホテル 京都」「京都 嵐山温泉 花伝抄」「嵐山温泉 嵐山辨慶」を、京都府京都市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。露天風呂付客室、五つの貸切風呂、本格京料理会席を満喫。',
    heroTag: '平安貴族が愛した雅の極み！京都嵐山温泉特集',
    leadTitle: '保津川のせせらぎ、渡月橋を渡る風、青々と茂る竹林の小径。千年の雅に包まれる嵐山温泉の極上休日へ',
    leadText: 'かつて平安貴族たちが別荘を構え、風流を尽くした風光明媚の地「京都・嵐山（あらしやま）」。大堰川（保津川）に優美に架かる「渡月橋」、青竹が天を覆い涼やかな木漏れ日が降り注ぐ「竹林の小径」、そして世界遺産・天龍寺の壮大な回遊式庭園など、歩く先々で日本の美意識の粋に出会える古都屈指の観光名所です。この嵐山の奥座敷で愛され続けているのが、しっとりとした湯触りが心地よい「嵐山温泉」。弱アルカリ性の単純温泉は「美肌の湯」として親しまれ、観光で歩き疲れた体をやさしく包み込んで解きほぐしてくれます。夕暮れの保津川沿いで鵜飼の篝火を眺めたり、早朝の観光客が少ない竹林を散策したりできるのは、嵐山に宿泊する旅人だけに許された特別な贅沢。さらに食事は、京都の伝統工芸のような美しさを誇る本格京料理会席。旬の京野菜、湯葉、生麩、厳選された京都肉を、四季の彩りとともに器に映し出した料理の数々は、まさに五感で味わう芸術品です。本特集では、保津川のほとりに佇みプライベート温泉露天風呂付き客室と歴史的建造物カフェを誇る世界最高峰のラグジュアリーホテル「翠嵐 ラグジュアリーコレクションホテル 京都」、阪急嵐山駅徒歩1分・全館畳敷きで5つの趣異なる無料貸切風呂と四季の京会席が評判の「京都 嵐山温泉 花伝抄」、そして大堰川の清流を正面に望み伝統の京懐石と嵐山温泉の檜露天風呂を堪能できる老舗料理旅館「嵐山温泉 嵐山辨慶」の3宿を厳選。京都府京都市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの嵐山ステイをお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '渡月橋や竹林の小径が徒歩圏内！早朝・夕暮れの静寂に包まれる宿泊者だけの特権',
        body: '日中の賑わいが去った夕暮れや、清々しい空気が満ちる早朝の嵐山を独り占め。人混みを避けてゆったりと古都の情緒に浸ることができます。'
      },
      {
        num: '02',
        title: '美肌の湯として愛される「嵐山温泉」と風流な貸切風呂・客室露天風呂の贅沢',
        body: 'さらりとした肌触りの嵐山温泉を客室専用露天風呂や多彩な貸切風呂で満喫。渡月橋や嵐山の山並みを眺めながら優雅な湯浴みを楽しめます。'
      },
      {
        num: '03',
        title: '京都市ふるさと納税で最大30％OFF！3年間有効クーポンで紅葉や桜の京都旅に最適',
        body: '宿泊料金が高騰しやすい京都のハイエンドホテルも、ふるさと納税なら実質自己負担2,000円。寄付から3年間有効なので、春の桜や秋の紅葉に合わせて予約可能です。'
      }
    ],
    hotelDetails: [
      {
        key: 'arashiyama_suiran',
        badge: '京都府京都市・保津川の畔に佇むマリオット最高峰ラグジュアリー！天然嵐山温泉の露天風呂付き客室＆歴史的建造物でのシャンパンディライト',
        rank: '厳選名宿 第1選',
        desc: '渡月橋の上流、大堰川の清流と嵐山の雄大な自然が目の前に広がる絶好のロケーションに位置する、世界屈指のラグジュアリーホテル。かつての貴族の別荘地としての格式を受け継ぎ、敷地内には明治期の歴史的建造物を改装したレストランやカフェが佇みます。客室の多くに天然嵐山温泉を引いたプライベート露天風呂が備わり、誰にも邪魔されずに保津川のせせらぎを聞きながら極上の湯浴みが可能。夕暮れ時には歴史的カフェ「茶寮 八翠」にて保津川を眺めながらシャンパンを無料で楽しめるシャンパンディライトが宿泊者に振る舞われます。夕食は和の伝統とフレンチの美意識が融合した極上のイノベーティブ会席で、世界中のVIPを魅了する最上級の京都ステイを体験できます。'
      },
      {
        key: 'arashiyama_kadensho',
        badge: '京都府京都市・阪急嵐山駅徒歩1分の好立地！全館畳敷きの和の心地よさ＆5つの趣異なる無料貸切風呂と豪華京会席（共立リゾート）',
        rank: '厳選名宿 第2選',
        desc: '阪急嵐山駅から徒歩わずか1分、渡月橋へも徒歩圏内に位置する共立リゾートの上質な温泉旅館。玄関を入ると全館が畳敷きとなっており、靴を脱いで素足で心地よく過ごせるのが大きな魅力です。館内には広々とした大浴場のほか、趣の異なる5つの無料貸切風呂（檜風呂、陶器風呂、岩風呂など）が完備され、空いていれば予約不要で何度でもプライベートな温泉巡りが楽しめます。客室は京町家の風情を取り入れた洗練された和洋室。夕食は季節の彩りを映した京会席に、天ぷらやおばんざいを好みに合わせて選べるオーダービュッフェが組み合わされ、共立リゾート名物の夜鳴きそばサービスとともに大満足の滞在を提供します。'
      },
      {
        key: 'arashiyama_benkei',
        badge: '京都府京都市・嵐山大井川のほとり、渡月橋を望む絶景！ミシュラン掲載の本格伝統京懐石と嵐山温泉の檜露天風呂を愉しむ名門料理旅館',
        rank: '厳選名宿 第3選',
        desc: '嵐山の大堰川（大井川）沿い、渡月橋をすぐ間近に望む最高の立地に建つ創業数十年の老舗料理旅館。宿の最大の誇りは、京都の伝統と四季の移ろいを一皿一皿に表現した本格京懐石料理。料理長が毎朝厳選する旬の京野菜、瀬戸内や若狭から届く新鮮な魚介、上質な出汁の旨味が調和した料理は、ミシュランガイドにも掲載されるなど食通から極めて高い評価を得ています。館内には嵐山温泉を引いた風情ある岩露天風呂や檜露天風呂、展望貸切風呂があり、嵐山の山並みを仰ぎながら贅沢な湯浴みが堪能できます。客室はお部屋食対応の純和風数寄屋造りで、細やかな心遣いとおもてなしに心が解きほぐされます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-kyoto-onsen-ryokan-machiya-stay', title: '【京都嵐山温泉＆名門京町家旅館×ふるさと納税】渡月亭・翠嵐・花伝抄' },
      { slug: 'furusato-tax-kyoto-private-machiya-charter-stay', title: '【京都町家一棟貸切プライベート旅館×ふるさと納税】Nazuna椿通・二条城・お宿花' },
      { slug: 'furusato-tax-tangible-cultural-property-sukiya-carpenter-ryokan-stay', title: '【登録有形文化財・宮大工数寄屋造り旅館×ふるさと納税】木造建築美の宿' },
      { slug: 'furusato-tax-dogo-onsen-honkan-walk-luxury-stay', title: '【道後温泉 本館散策＆老舗旅館×ふるさと納税】ふなや・道後御湯・道後プリンス' }
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

for (const cfg of round85Configs) {
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

console.log('\nAll 4 Round 85 pages successfully written!');
