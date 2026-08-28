const fs = require('fs');
const path = require('path');

const seasonalConfigs = [
  {
    slug: 'spring-cherry-blossoms',
    badge: 'SPRING SPECIAL',
    title: '【全国】桜・お花見絶景宿＆客室露天風呂 完全ガイド',
    metaDesc: '春の息吹！全国屈指の桜名所（京都祇園・嵐山、伊豆河津桜、奈良吉野山、青森弘前）と、客室や露天風呂から満開の桜を一望できる厳選お花見温泉旅館・ホテルを徹底ガイド。',
    heroDesc: '春風が心地よい季節。客室のテラスや露天風呂から淡いピンクの桜を独り占めする贅沢。京都、伊豆、吉野山、弘前など、一生に一度は見たい全国の桜絶景宿をご紹介。',
    categoryKey: 'spring-cherry-blossoms',
    areaGuides: [
      {
        key: 'kyoto_sakura',
        title: '1. 京都・祇園東山＆嵐山（古都を彩るしだれ桜と名刹）',
        timing: '見頃：3月下旬〜4月上旬',
        desc: '円山公園の祇園枝垂桜や哲学の道の桜回廊、嵐山渡月橋を借景にした桜景色。風情ある京町家ホテルや奥嵐山の温泉宿で、ライトアップされた夜桜と京料理を味わう極上の春旅が叶います。',
        spots: '円山公園、蹴上インクライン、哲学の道、嵐山渡月橋、仁和寺（御室桜）',
        access: 'JR京都駅から地下鉄・市バスで市内主要桜名所へ15〜25分。嵐山へはJR嵯峨野線で約16分。',
        tip: '早朝6時〜7時台の哲学の道や蹴上インクラインは人が少なく絶好の撮影タイム。夕方は宿でゆっくり桜御膳を堪能するのがおすすめです。'
      },
      {
        key: 'izu_kawazu',
        title: '2. 静岡・伊豆河津＆南伊豆（日本一早い春を告げる早咲き河津桜）',
        timing: '見頃：2月中旬〜3月上旬',
        desc: '本州でいち早く満開を迎える濃いピンクの河津桜と菜の花の絨毯。河津川沿いの桜並木を散策した後は、伊豆の名湯露天風呂と金目鯛の煮付けを堪能する早春の王道ドライブ旅行。',
        spots: '河津川沿い桜並木（約850本）、みなみの桜と菜の花まつり、今井浜海岸、浄蓮の滝',
        access: '特急「踊り子号」で東京駅から河津駅まで直通約2時間30分。東名沼津IC・伊豆縦貫道経由。',
        tip: '見頃時期の国道135号は大変混雑するため、電車（伊豆急行線）利用または早朝8時前のご到着が安心です。'
      },
      {
        key: 'yoshino_sakura',
        title: '3. 奈良・吉野山（山全体を染める一目千本桜の神域）',
        timing: '見頃：4月上旬〜4月中旬',
        desc: '下千本から奥千本へと山肌を駆け上がるように咲き誇る約3万本の山桜。世界遺産・金峯山寺蔵王堂を望む絶景宿に泊まり、朝靄に包まれる幻想的な桜の谷を見下ろす体験は一生の思い出になります。',
        spots: '吉野山（下千本・中千本・上千本・奥千本）、金峯山寺蔵王堂、吉水神社（一目千本景勝地）',
        access: '近鉄特急で大阪阿部野橋駅から吉野駅まで約75分、京都駅から約100分。駅前からロープウェイ・バス接続。',
        tip: '吉野山の桜は標高差があるため見頃が長く続きます。日帰り客が帰った夕方〜早朝の静寂な時間帯を過ごせるのは宿泊者だけの特権です。'
      },
      {
        key: 'hirosaki_sakura',
        title: '4. 青森・弘前公園（日本一と称される桜回廊と花筏）',
        timing: '見頃：4月下旬〜5月上旬（GW期間）',
        desc: '弘前城天守と約2,600本の桜が織りなす圧巻の光景。満開後の外濠をピンク色に埋め尽くす「花筏（はないかだ）」や桜のトンネルは息をのむ美しさ。津軽の地酒と郷土料理を楽しめる温泉宿が人気です。',
        spots: '弘前公園・弘前城（花筏・桜のトンネル）、藤田記念庭園、岩木山神社、嶽温泉',
        access: 'JR奥羽本線「弘前駅」より市内循環バスで約10分。青森空港から空港連絡バスで約55分。',
        tip: '夜間のライトアップ（西濠の桜リフレクション）は必見。GW時期は冷え込むため、厚手の上着を持参し、嶽温泉や浅虫温泉で体を温めましょう。'
      }
    ]
  },
  {
    slug: 'winter-crab-gourmet',
    badge: 'WINTER GOURMET',
    title: '【冬の味覚】カニ食べ尽くし＆絶景雪見温泉旅館 完全ガイド',
    metaDesc: '冬の日本海の王様！城崎温泉（兵庫）、越前三国（福井）、加賀山中（石川）、皆生温泉（鳥取）で本場の松葉ガニ・越前ガニ会席を堪能できる贅沢温泉宿を徹底ガイド。',
    heroDesc: '冬の旅の醍醐味といえば、獲れたて極上のカニ料理と雪見露天風呂。茹でガニ、カニ刺し、焼きガニ、カニすき鍋から甲羅酒まで。北陸・山陰の名湯旅館で極上の美食ステイを。',
    categoryKey: 'winter-crab-gourmet',
    areaGuides: [
      {
        key: 'kinosaki_crab',
        title: '1. 兵庫・城崎温泉（津居山ガニ・柴山ガニと風情ある7つの外湯めぐり）',
        timing: 'カニ漁解禁：11月上旬〜翌年3月下旬',
        desc: '大谿川沿いの柳並木と下駄の音が響く情緒豊かな温泉街。水揚げされたばかりの新鮮なタグ付き松葉ガニ（柴山ガニ・津居山ガニ）を贅沢なフルコースで味わい、雪化粧の街を浴衣で湯巡りできます。',
        spots: '城崎温泉7つの外湯（一の湯・御所の湯等）、城崎ロープウェイ、玄武洞公園、津居山港',
        access: 'JR特急「こうのとり」「はまかぜ」で大阪・京都から城崎温泉駅まで直通約2時間40分。',
        tip: '外湯めぐりパス（デジタル湯めぐり券）が付いた宿を選ぶと便利。冬場は積雪があるため、電車利用またはスタッドレスタイヤ装着が必須です。'
      },
      {
        key: 'echizen_crab',
        title: '2. 福井・越前海岸＆三国温泉（皇室献上品質！本場の越前ガニを食す）',
        timing: 'カニ漁解禁：11月上旬〜翌年3月下旬',
        desc: '黄色いタグが最高級の証である「越前ガニ」。日本海の荒波を望む三国温泉や越前海岸沿いの料理旅館では、水揚げ当日の活ガニを豪快に茹で上げ、濃厚なカニ味噌と上品な甘みの身を心ゆくまで堪能できます。',
        spots: '東尋坊、三国のレトロな町並み、越前がにミュージアム、越前松島水族館、あわら温泉',
        access: '北陸新幹線「芦原温泉駅」または「福井駅」より車・路線バスで約30〜45分。',
        tip: '三国港近くの宿では「茹でたて熱々」の越前ガニを丸ごと1杯提供するプランが名物。三国温泉の夕日と日本海ビュー露天風呂も格別です。'
      },
      {
        key: 'hokuriku_crab',
        title: '3. 石川・加賀温泉郷＆山中・山代（九谷焼の器で愛でるズワイガニ会席）',
        timing: 'カニ漁解禁：11月上旬〜翌年3月下旬',
        desc: '開湯1300年の歴史を誇る山代・山中・粟津・片山津の加賀温泉郷。名門老舗旅館のおもてなしを受けながら、石川のブランドガニ「加能ガニ」と香箱ガニ（雌ガニ）を、美しい伝統工芸の器で優雅に味わえます。',
        spots: '鶴仙渓（山中温泉）、山代温泉古総湯、那谷寺、ゆのくにの森、片山津温泉柴山潟',
        access: '北陸新幹線「加賀温泉駅」直通（東京から約2時間45分）。駅より各温泉街へ無料送迎バス約10〜15分。',
        tip: '11月〜12月限定で味わえる「香箱ガニ（内子と外子が絶品）」付きプランは大人気のため、早期の予約がおすすめです。'
      },
      {
        key: 'tottori_crab',
        title: '4. 鳥取・皆生温泉＆境港（日本有数の水揚げ量を誇る境港の松葉ガニ）',
        timing: 'カニ漁解禁：11月上旬〜翌年3月下旬',
        desc: '弓ヶ浜の白砂青松と日本海を一望する皆生温泉（かいけおんせん）。境港で揚がったばかりの特上松葉ガニや紅ズワイガニをリーズナブルに味わえ、塩分を含んだ美肌の温泉で体の芯まで温まります。',
        spots: '境港水木しげるロード、境港さかなセンター、米子城跡、大山（だいせん）スキー場',
        access: '米子空港よりタクシーで約20分。JR米子駅より路線バスで約20分。米子ICから車で約10分。',
        tip: '米子鬼太郎空港からアクセスが良いため飛行機利用にも最適。皆生温泉名物の「海から湧く温泉」とカニすき鍋の組み合わせは最高です。'
      }
    ]
  },
  {
    slug: 'summer-infinity-pool',
    badge: 'SUMMER RESORT',
    title: '【夏休み・リゾート】絶景インフィニティプール＆オーシャンビュー宿ガイド',
    metaDesc: '空と海が溶け合う絶景！沖縄（恩納村・石垣島宮古島）、和歌山白浜、関東近郊（房総鴨川）でインフィニティプールやプール付き客室を完備した極上リゾートホテルを徹底比較。',
    heroDesc: 'どこまでも続く青い空と水平線。水面に身を委ねて夕日を眺めるインフィニティプールは夏の最高のご褒美。子連れファミリー歓迎の大型プールから大人のプライベートヴィラまで厳選紹介。',
    categoryKey: 'summer-infinity-pool',
    areaGuides: [
      {
        key: 'okinawa_pool',
        title: '1. 沖縄・恩納村（ビーチ直結＆県内屈指のラグジュアリープール）',
        timing: 'おすすめ時期：4月〜10月（真夏〜秋口）',
        desc: '沖縄本島屈指の美しい海が広がる西海岸リゾート。サンセットを望むインフィニティプールやウォータースライダー付きキッズプール、プライベートビーチを併設した憧れのホテルが立ち並びます。',
        spots: '万座毛、真栄田岬（青の洞窟）、恩納海浜公園ナビービーチ、琉球村',
        access: '那覇空港から沖縄自動車道利用で車約50分。空港直行リムジンバスも多数運行。',
        tip: 'クラブラウンジ付き客室を予約すると、プールサイド専用バーでのカクテルタイムや専用チェックインなどワンランク上の滞在が楽しめます。'
      },
      {
        key: 'ishigaki_pool',
        title: '2. 沖縄・石垣島＆宮古島（プライベートプール付き極上ヴィラステイ）',
        timing: 'おすすめ時期：3月〜11月',
        desc: '東洋一と称される宮古ブルーや石垣島の透明度抜群の海。客室に専用プールを備えた独立型ヴィラなら、他の宿泊者を気にせず24時間いつでも泳ぎ、満天の星空を眺めるプライベートな休日を過ごせます。',
        spots: '川平湾（石垣島）、与那覇前浜ビーチ（宮古島）、伊良部大橋、川平タバガー',
        access: '羽田・関空・名古屋・福岡から石垣空港・宮古空港（下地島空港）へ直行便多数運航。',
        tip: 'レンタカーの早期確保が必須。夕暮れ時はヴィラのプールサイドでバーベキューや島野菜ディナーを楽しむプランが人気です。'
      },
      {
        key: 'shirahama_pool',
        title: '3. 和歌山・南紀白浜温泉（白良浜一望＆天然温泉とプールの融合）',
        timing: 'おすすめ時期：6月〜9月',
        desc: '白い砂浜が美しい白良浜まで徒歩すぐ。海を見下ろす高台のインフィニティプールやナイトプールが充実した温泉ホテルが多く、プールで遊んだ後はそのまま源泉かけ流し温泉でリフレッシュできます。',
        spots: '白良浜海水浴場、アドベンチャーワールド、三段壁・千畳敷、白浜海中展望塔',
        access: '南紀白浜空港より車で約10分（羽田から飛行機約70分）。JR特急くろしおで天王寺から約2時間。',
        tip: 'アドベンチャーワールド（パンダやサファリ）の観光と組み合わせたファミリー・カップル旅行に最適です。'
      },
      {
        key: 'shonan_chiba_pool',
        title: '4. 関東近郊・房総半島＆鴨川（都心から車で90分のオーシャンリゾート）',
        timing: 'おすすめ時期：6月〜9月',
        desc: '東京湾アクアラインで都心から快適アクセス。太平洋の水平線を望む海沿いのリゾートホテルでは、海風を感じる屋外プールや天然温泉スパが充実しており、週末の気軽なプチバカンスに最適です。',
        spots: '鴨川シーワールド、マザー牧場、大山千枚田、城崎海岸（千葉）、守谷海水浴場',
        access: '東京・横浜から車でアクアライン経由約80〜90分。JR特急わかしおで東京駅から安房鴨川まで約1時間50分。',
        tip: '鴨川シーワールドのシャチパフォーマンス観賞とセットになった宿泊プランが子連れファミリーに大人気です。'
      }
    ]
  },
  {
    slug: 'winter-snow-onsen',
    badge: 'SNOW ONSON',
    title: '【冬の秘湯】白銀の雪見露天風呂＆絶景名湯旅館 完全ガイド',
    metaDesc: '静寂の雪景色と温かい名湯。山形・銀山温泉、群馬・草津温泉、北海道・登別定山渓、宮城山形・蔵王温泉など、一生に一度は浸かりたい白銀の雪見露天風呂宿を徹底解説。',
    heroDesc: 'しんしんと降り積もる雪の中、立ち上る湯けむりと温かい湯船。大正ロマンの木造旅館街から大自然の秘湯まで、冬だからこそ訪れたい日本の白銀絶景温泉宿をご紹介します。',
    categoryKey: 'winter-snow-onsen',
    areaGuides: [
      {
        key: 'ginzan_snow',
        title: '1. 山形・銀山温泉（ガス灯と大正ロマンが息づく雪の温泉街）',
        timing: '雪見の見頃：12月下旬〜3月上旬',
        desc: '銀山川の両岸に大正〜昭和初期の木造多層建築が立ち並ぶ、まるでおとぎ話のような温泉街。夕暮れ時にガス灯が灯り、白雪が舞う光景は息をのむ美しさ。川沿いの名湯宿で贅沢な雪見ステイを。',
        spots: '銀山温泉街（能登屋旅館等の木造建築）、白銀の滝、延沢銀山遺跡、和楽足湯',
        access: '山形新幹線「大石田駅」より路線バスまたは各旅館の送迎バスで約40分。',
        tip: '冬の銀山温泉は全国屈指の超人気のため、数ヶ月前からの予約が必須。雪靴や防寒具をしっかり準備して出かけましょう。'
      },
      {
        key: 'kusatsu_snow',
        title: '2. 群馬・草津温泉（湯畑の湯けむりと雪のコントラスト）',
        timing: '雪見の見頃：12月中旬〜3月中旬',
        desc: '日本三名泉の一つ、圧倒的な湯量を誇る草津温泉。ライトアップされた湯畑から立ち上る白い湯けむりと降り積もる雪のコントラストは圧巻。pH2前後の強酸性の名湯が冷えた体を芯から温めます。',
        spots: '湯畑、西の河原公園大露天風呂（雪景色の中で入浴）、熱乃湯（湯もみショー）、草津温泉スキー場',
        access: 'JR特急「草津・四万」で上野駅から長野原草津口駅まで約2時間20分、接続バス約25分。',
        tip: '西の河原公園の広大な大露天風呂での雪見入浴は格別。草津温泉スキー場でのスノーアクティビティ後の宿泊にも最適です。'
      },
      {
        key: 'noboribetsu_snow',
        title: '3. 北海道・登別温泉＆定山渓温泉（北海道を代表する名湯と雪景色）',
        timing: '雪見の見頃：12月上旬〜3月下旬',
        desc: '9種類もの多彩な泉質が湧き出す登別温泉や、札幌の奥座敷・定山渓温泉。白煙を上げる地獄谷の冬景色や、渓谷美を眺める雪見露天風呂は北海道ならではのスケール感です。',
        spots: '登別地獄谷、大湯沼、定山渓渓谷（雪灯路イベント）、登別クマ牧場',
        access: '新千歳空港からJR特急または直行バスで登別まで約60分。札幌から定山渓まで直行バス「かっぱライナー号」で約60分。',
        tip: '新千歳空港や札幌駅からのアクセスが良く、冬の北海道観光（雪まつり等）の拠点として極めて優秀です。'
      },
      {
        key: 'zao_snow',
        title: '4. 山形・宮城・蔵王温泉（スノーモンスター樹氷と乳白色の美肌湯）',
        timing: '雪見の見頃：12月下旬〜3月上旬（樹氷は1月下旬〜2月）',
        desc: '世界的に有名なスノーモンスター「蔵王の樹氷」。ロープウェイで幻想的な樹氷ライトアップを鑑賞した後は、硫黄が香る乳白色・強酸性の天然温泉で冷え切った体を極上に解きほぐせます。',
        spots: '蔵王ロープウェイ（樹氷鑑賞）、蔵王温泉大露天風呂（冬季休業あり・足湯充実）、蔵王温泉スキー場',
        access: '山形新幹線「山形駅」より路線バスで蔵王温泉バスターミナルまで約45分。',
        tip: '樹氷ナイトクルーズ（暖房付き雪上車ツアー）付きの宿泊プランがおすすめ。山形名物の玉こんにゃくや米沢牛すき焼きも絶品です。'
      }
    ]
  },
  {
    slug: 'anniversary-luxury-suite',
    badge: 'LUXURY ANNIVERSARY',
    title: '【記念日・誕生日】客室露天風呂＆贅沢スイート極上宿 完全ガイド',
    metaDesc: '大切な記念日、プロポーズ、ご両親へのプレゼントに。箱根・伊豆の離れ露天風呂付き客室、京都の極上ラグジュアリーホテル、東京の高層階夜景スイートなど最高峰の宿泊体験を完全網羅。',
    heroDesc: '誕生日、結婚記念日、特別なご褒美旅行。誰にも邪魔されない客室専用露天風呂、一流シェフが腕を振るう記念日ディナー、夜景を一望するクラブラウンジなど、感動の記念日ステイを叶える名宿をご紹介。',
    categoryKey: 'anniversary-luxury-suite',
    areaGuides: [
      {
        key: 'hakone_luxury',
        title: '1. 神奈川・箱根温泉（全室客室露天風呂付きの大人の隠れ宿）',
        timing: '通年おすすめ（四季折々の景色）',
        desc: '強羅や仙石原の静かな森に佇む、プライベート感を極めた離れやスイートルーム。美肌の天然温泉を客室で24時間気兼ねなく愉しみ、個室食事処や部屋食で極上の懐石料理を味わえます。',
        spots: '箱根ガラスの森美術館、ポーラ美術館、芦ノ湖スカイライン（絶景ドライブ）、成川美術館',
        access: '小田急ロマンスカーで新宿から箱根湯本まで直通約85分。タクシー・送迎で各宿へ。',
        tip: 'アニバーサリー特典（シャンパンサービス、ホールケーキ、花束手配など）がセットになった記念日専用プランの利用がスマートです。'
      },
      {
        key: 'izu_luxury',
        title: '2. 静岡・伊豆修善寺＆伊豆高原（竹林の小径と森に包まれる極上ヴィラ）',
        timing: '通年おすすめ（新緑・紅葉・避暑）',
        desc: '伊豆の小京都・修善寺温泉や伊豆高原の別荘地。数千坪の敷地にわずか数室のみの贅沢な離れ宿が多く、広々とした専用テラスで森林浴や源泉かけ流し温泉を心ゆくまで堪能できます。',
        spots: '修善寺温泉（竹林の小径・修禅寺・独鈷の湯）、城ヶ崎海岸、大室山、伊豆テディベア・ミュージアム',
        access: '特急「踊り子号」で東京駅から修善寺駅まで直通約2時間。新幹線三島駅から伊豆箱根鉄道接続。',
        tip: 'チェックインからチェックアウトまで宿から一歩も出ずに過ごす「おこもりステイ」に最適。アロマエステ付きプランも女性に大人気です。'
      },
      {
        key: 'kyoto_luxury',
        title: '3. 京都・東山祇園＆嵐山（伝統と洗練が融合する最高峰ラグジュアリー）',
        timing: '通年おすすめ（桜・新緑・紅葉・雪景色）',
        desc: '八坂の塔や鴨川を望む歴史的景観地区に佇むラグジュアリーホテル。京都の伝統美を取り入れたモダンな客室、専属コンシェルジュによるオーダーメイドな観光手配、ミシュラン星付きディナーが特別な日を彩ります。',
        spots: '八坂神社、清水寺、祇園白川、高台寺（夜間ライトアップ）、南禅寺水路閣',
        access: 'JR京都駅からタクシーで約10〜15分。地下鉄東西線「東山駅」周辺。',
        tip: '夕暮れ時に東山の街並みを一望できるルーフトップバーでのアペリティフ（食前酒）は記念日デートに最高の演出となります。'
      },
      {
        key: 'tokyo_luxury',
        title: '4. 東京・高層階夜景ホテル（地上200mのパノラマビュー＆クラブラウンジ）',
        timing: '通年おすすめ（記念日・サプライズ）',
        desc: '東京タワーやレインボーブリッジ、摩天楼の夜景をベッドやバスルームから一望できる五つ星ホテル。アフタヌーンティーやカクテルを楽しめる専用クラブラウンジアクセス付きプランで極上のホテルステイを。',
        spots: '東京タワー、六本木ヒルズ展望台（東京シティビュー）、銀座中央通り、お台場海浜公園',
        access: '東京駅・品川駅・羽田空港から地下鉄・タクシーで10〜20分。',
        tip: '予約時に「記念日宿泊」の旨を伝えると、高層階リクエストやメッセージプレートなどの細やかなおもてなしを受けられることがあります。'
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
  keywords: ["${config.slug}", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["${config.categoryKey}"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for ${config.categoryKey}", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${JSON.stringify(config.areaGuides, null, 2)};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ${config.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${config.title}
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ${config.heroDesc}
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 観光・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ見どころ・スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 満足度を高める滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
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

for (const cfg of seasonalConfigs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated seasonal hub page: /${cfg.slug}`);
}
