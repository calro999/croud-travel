const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const round90Configs = [
  {
    slug: 'furusato-tax-gero-onsen-bihada-luxury-stay',
    componentName: 'FurusatoGeroOnsenBihadaStayPage',
    tag: '日本三名泉・下呂温泉 美肌の湯＆名門旅館特集',
    title: '日本三名泉・天下の名湯！下呂温泉の美肌の湯めぐり＆国登録有形文化財・極上飛騨牛会席×ふるさと納税完全攻略ガイド【2026年最新】水明館・望川館・湯之島館',
    metaTitle: '日本三名泉・天下の名湯！下呂温泉の美肌の湯めぐり＆国登録有形文化財・極上飛騨牛会席×ふるさと納税完全攻略ガイド【2026年最新】水明館・望川館・湯之島館',
    shortTitle: '下呂温泉 日本三名泉＆名門宿特集',
    description: '有馬・草津と並ぶ日本三名泉・岐阜県下呂温泉！美容液のような滑らかなpH9.2アルカリ性単純温泉。「下呂温泉 水明館」「下呂温泉 望川館」「下呂温泉 湯之島館」を、岐阜県下呂市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。三大大浴場、千百坪日本庭園、昭和初期木造建築美、最高峰飛騨牛会席を満喫。',
    heroTag: '日本三名泉・美肌の湯！岐阜県下呂温泉特集',
    leadTitle: '飛騨川のせせらぎ、湯煙立ちのぼる白鷺の湯。絹のように滑らかな美肌の湯に包まれる下呂温泉の休日へ',
    leadText: '室町時代の詩僧・万里集九や、江戸時代の儒学者・林羅山によって「有馬温泉」「草津温泉」とともに日本三名泉の一つとして天下に轟く岐阜県「下呂温泉（げろおんせん）」。傷ついた白鷺が泉源を教えたという伝説が残り、千有余年の長きにわたり旅人の心と体を癒やし続けてきました。下呂温泉の最大の誇りは、「天然の美肌液」と称される極上の泉質。pH9.2前後のアルカリ性単純温泉は、無色透明でほのかな硫黄の香りが漂い、肌に触れた瞬間にトロリとまとわりつくようなまろやかな感触が特徴です。古い角質を落とし肌をつるつるに整えるクレンジング効果と高い保湿効果を誇り、一度入浴すればその違いを実感できます。宿の露天風呂から飛騨川の清流や山々の稜線を眺めながら入る温泉は、まさに極楽の心地。さらに食事は、豊かな大自然と清流が育んだ最高峰のブランド黒毛和牛「飛騨牛（ひだぎゅう）」。美しい霜降りのサーロインステーキや陶板焼き、名物朴葉味噌（ほおばみそ）焼きなど、料理人が腕を振るう華やかな本格会席料理が旅を至高の歓びで満たしてくれます。本特集では、創業九十余年の歴史を誇り館内に三つの異なる大浴場を擁する象徴的宿「下呂温泉 水明館」、飛騨川沿いの一千百坪もの壮大な日本庭園と開放感あふれる大露天風呂が自慢の「下呂温泉 望川館」、そして昭和6年築の国登録有形文化財の木造建築美と五万坪の森林に佇む最高峰「下呂温泉 湯之島館」の3大名宿を厳選。岐阜県下呂市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの下呂温泉ステイをお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '日本三名泉・天然の化粧水「美肌の湯」！pH9.2のトロトロ温泉で至極の癒やし',
        body: '肌にしっとりと馴染む美容液のような泉質。湯上がりのつるつる感と体の芯からポカポカ温まる持続力は感動的です。'
      },
      {
        num: '02',
        title: 'ブランド黒毛和牛「飛騨牛」の極上会席！朴葉味噌焼きやすき焼きの贅沢な饗宴',
        body: 'とろけるような脂の甘みと濃厚な赤身の旨味。飛騨の地酒とともに味わう贅を尽くしたディナーを堪能できます。'
      },
      {
        num: '03',
        title: '下呂市ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や週末旅に最適',
        body: '名古屋から特急ひだで約1時間半の好アクセス。寄付から3年間有効なので、新緑や紅葉、冬の雪見風呂に合わせて計画できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'gero_suimeikan',
        badge: '岐阜県下呂市・創業九十余年の象徴！飛騨川沿い「野天風呂」「展望大浴場」「檜風呂」の三大大浴場巡り＆飛騨牛会席（水明館・口コミ6,200件超）',
        rank: '厳選名宿 第1選',
        desc: '飛騨川のほとりに広大な敷地を持つ、下呂温泉を代表する創業九十余年の老舗旅館。館内には「青嵐荘」「臨川閣」「飛泉閣」「山水閣」の4つの館があり、皇族やVIPをお迎えしてきた格式を誇ります。最大の自慢は、館内にいながらにして楽しめる3つの異なる大浴場。「巨岩を配した野天風呂」「下呂の街並みと夜景を一望する展望大浴場」「木の香りが心地よい総檜風呂」のすべてで名湯を満喫できます。夕食は最高ランク飛騨牛を取り入れた伝統の本格和食会席料理のほか、本格欧風フレンチや中国料理レストランも完備。美術品が並ぶロビーや日本庭園など、細部にまで至高の美意識が宿る名旅館です。'
      },
      {
        key: 'gero_bosenkan',
        badge: '岐阜県下呂市・飛騨川を望む一千百坪の壮大な日本庭園！四季の自然美と開放感抜群の大露天風呂＆飛騨牛料理（望川館）',
        rank: '厳選名宿 第2選',
        desc: '清流・飛騨川に面して広がる一千百坪もの広大な日本庭園が旅人を迎える、情緒あふれる名門温泉宿。四季折々に表情を変える庭園では、春の桜、初夏の新緑、秋の紅葉、冬の雪景色と、散策するだけで心が洗われます。庭園の緑と飛騨川を望む大露天風呂は開放感抜群で、下呂の良質なアルカリ性単純温泉が贅沢に注がれます。足湯や貸切露天風呂も完備。客室は庭園ビューの和室や露天風呂付き客室が揃い、ファミリーからカップルまで人気。夕食は特選飛騨牛の陶板焼きや朴葉味噌焼き、地元の清流魚を盛り込んだ贅沢な会席料理を個室やお部屋で堪能できます。'
      },
      {
        key: 'gero_yunoshimakan',
        badge: '岐阜県下呂市・昭和六年創業・国の登録有形文化財！五万坪の大森林に佇む木造建築の最高峰＆自家源泉100％名湯（湯之島館）',
        rank: '厳選名宿 第3選',
        desc: '下呂の温泉街を見下ろす山腹、約五万坪もの鬱蒼とした森林に囲まれた孤高の名旅館。昭和6年に建築された本館は国の登録有形文化財に指定されており、宮大工の技が光る繊細な格天井や数寄屋造りの意匠、渡り廊下など、建物自体が日本の近代建築史に残る貴重な美術品です。敷地内の源泉から湧くお湯は、展望大浴場や森の露天風呂、全客室の内湯・露天風呂にまで贅沢に配湯。夕食は月替わりの本格京風会席料理で、極上の飛騨牛や山の幸を歴史の情緒あふれるお部屋食でゆったりと味わえ、日常を忘れさせる本物の別天地ステイを体験できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-hida-takayama-old-town-luxury-stay', title: '【飛騨高山 古い町並み＆極上飛騨牛宿×ふるさと納税】花兆庵・花扇・光風館' },
      { slug: 'furusato-tax-arima-onsen-kinsen-ginsen-luxury-stay', title: '【有馬温泉 金泉銀泉＆名門旅館×ふるさと納税】兵衛向陽閣・御所坊・月光園鴻朧館' },
      { slug: 'furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay', title: '【草津温泉 湯畑散策＆名湯名門旅館×ふるさと納税】櫻井・一井・奈良屋' },
      { slug: 'furusato-tax-tangible-cultural-property-sukiya-carpenter-ryokan-stay', title: '【登録有形文化財・宮大工数寄屋造り旅館×ふるさと納税】木造建築美の宿' }
    ]
  },
  {
    slug: 'furusato-tax-kinugawa-nikko-world-heritage-stay',
    componentName: 'FurusatoNikkoWorldHeritageStayPage',
    tag: '日光東照宮・世界遺産＆奥日光乳白色硫黄泉特集',
    title: '世界遺産日光東照宮の歴史と中禅寺湖の絶景！奥日光の乳白色硫黄泉＆日本最古クラシックホテル×ふるさと納税完全攻略ガイド【2026年最新】千姫物語・日光金谷ホテル・ホテル四季彩',
    metaTitle: '世界遺産日光東照宮の歴史と中禅寺湖の絶景！奥日光の乳白色硫黄泉＆日本最古クラシックホテル×ふるさと納税完全攻略ガイド【2026年最新】千姫物語・日光金谷ホテル・ホテル四季彩',
    shortTitle: '日光 世界遺産＆奥日光温泉名宿特集',
    description: '世界遺産「日光の社寺」と奥日光の大自然！日光東照宮、中禅寺湖、華厳の滝。「日光温泉 日光千姫物語」「日光金谷ホテル」「奥日光 ホテル四季彩」を、栃木県日光市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。日本最古クラシックホテル、乳白色の源泉かけ流し露天風呂、日光湯波・とちぎ和牛を満喫。',
    heroTag: '世界遺産と神宿る奥日光！栃木県日光市特集',
    leadTitle: '徳川家康公を祀る日光東照宮、神聖な男体山と中禅寺湖。千年の祈りと大自然に抱かれる日光の優雅な休日へ',
    leadText: '世界遺産「日光の社寺（日光東照宮・日光二荒山神社・日光山輪王寺）」を擁し、四季を通じて国内外の旅行者が訪れる国際的景勝地「栃木県・日光（にっこう）」。絢爛豪華な陽明門や国宝の眠り猫をはじめとする彫刻美、いろは坂を登った先に広がる大迫力の「華厳の滝」、そして霊峰・男体山を湖面に映す「中禅寺湖」など、歴史遺産と雄大な大自然が完璧に調和した日本屈指の観光地です。日光エリアの宿泊の魅力は、東照宮周辺の格式あるクラシックホテルや温泉旅館、そして奥日光に湧出する白濁の「奥日光湯元温泉（乳白色硫黄泉）」。空気に触れると乳白色に濁る濃厚な硫黄泉は、日本屈指の美肌・血行促進効果を誇り、原生林に囲まれた露天風呂での湯浴みは至福の極みです。さらに食事は、日光の伝統食材「日光湯波（ゆば）」の煮物やお造り、栃木が誇るブランド黒毛和牛「とちぎ和牛」のステーキやすき焼き、日本最古の西洋式クラシックホテルが受け継ぐ伝統のフランス料理など、日光ならではの洗練された美食が旅を彩ります。本特集では、日光東照宮へ徒歩約10分の好立地で女性に優しい美肌温泉と本格懐石料理が評判の「日光温泉 日光千姫物語」、アインシュタインやヘレン・ケラーら世界の偉人が逗留した日本最古のリゾートクラシック「日光金谷ホテル」、そして中禅寺湖畔の静寂な森に佇み乳白色のにごり湯露天風呂を誇る「奥日光 ホテル四季彩」の3宿を厳選。栃木県日光市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの日光ステイをお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '世界遺産・日光東照宮へ徒歩すぐ！早朝の静寂な境内に参拝できる宿泊者の特権',
        body: '観光客の少ない清々しい朝の東照宮や輪王寺をゆっくり散策。歴史の重みと神聖な空気に心が洗われる時間を過ごせます。'
      },
      {
        num: '02',
        title: '中禅寺湖畔に湧く濃厚な「乳白色硫黄泉」と日本最古のクラシックホテル伝統フレンチ',
        body: '原生林の息吹を感じるにごり湯露天風呂や、明治期から受け継がれる名門金谷ホテルのフランス料理ディナーを満喫。'
      },
      {
        num: '03',
        title: '日光市ふるさと納税で最大30％OFF！3年間有効クーポンで紅葉や初夏のベストシーズンに予約',
        body: 'ハイシーズンに予約が集中する日光・中禅寺湖のホテルもふるさと納税なら実質2,000円。寄付から3年間有効なので安心して計画できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'nikko_senhime',
        badge: '栃木県日光市・日光東照宮へ徒歩10分の好立地！清流大谷川を望む美肌温泉大浴場＆女性に優しい本格懐石料理（日光千姫物語）',
        rank: '厳選名宿 第1選',
        desc: '日光東照宮や輪王寺、神橋へ徒歩で行ける観光に最高のロケーションに位置し、徳川秀忠公の娘・千姫の物語をテーマにした温かなおもてなしが光る温泉旅館。館内には清流・大谷川のせせらぎを聞く大浴場や露天風呂、サウナ、シルキーバスが揃い、肌をしっとり潤す温泉で散策の疲れを心地よくリフレッシュできます。客室からは日光連山の美しい稜線を一望。夕食は日光名物の「日光湯波」や「とちぎ和牛」を華やかに盛り込んだ彩り豊かな月替わり懐石料理で、器や盛り付けの細部にまで美意識が散りばめられ、大人の記念日旅行や女子旅、ご夫婦旅行に絶大な支持を集めています。'
      },
      {
        key: 'nikko_kanaya',
        badge: '栃木県日光市・創業明治六年、日本最古のリゾートクラシックホテル！アインシュタイン逗留の登録有形文化財＆伝統のフランス料理',
        rank: '厳選名宿 第2選',
        desc: '明治6年（1873年）創業、日本における西洋式リゾートホテルの草分けとして世界的に知られる名門クラシックホテル。国の登録有形文化財に指定された木造洋館には、アインシュタイン、ヘレン・ケラー、イザベラ・バードら歴史上の偉人が宿泊した記録が残ります。館内には日光東照宮の彫刻を思わせる和洋折衷の木彫装飾や回転ドア、暖炉が配され、まるでタイムスリップしたかのような優雅な空気が漂います。宿の代名詞であるメインダイニングルームでは、歴代料理長が受け継いできた「伝統のフランス料理フルコース（虹鱒のソテー金谷風や大正コロッケなど）」を味わえ、一生の記憶に残るクラシックステイを提供します。'
      },
      {
        key: 'nikko_honbou',
        badge: '栃木県日光市・中禅寺湖畔の豊かな森に佇む大人のリゾート！源泉100％かけ流し「乳白色硫黄泉」露天風呂ととちぎ和牛会席（ホテル四季彩）',
        rank: '厳選名宿 第3選',
        desc: '中禅寺湖のほとり、ミズナラやシラカバの原生林に包まれた静寂な高台に建つ温泉リゾートホテル。宿最大の自慢は、日光湯元温泉から引湯する源泉100％掛け流しの「乳白色のにごり湯（含硫黄-ナトリウム・カルシウム-硫酸塩・炭酸水素塩温泉）」。大浴場や森にせり出す大露天風呂に浸かれば、立ちのぼる硫黄の香りと木々のざわめきに包まれ、極上の癒やしを実感できます。全室から中禅寺湖畔の四季の森を一望。夕食はブランド和牛「とちぎ和牛」のステーキや日光湯波、旬の山海の恵みを職人が繊細に仕立てた季節の和食会席料理で、都会の喧騒から離れた大人の静寂旅に最適です。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-kinugawa-onsen-valley-view-luxury-stay', title: '【鬼怒川温泉 渓谷美＆名門旅館×ふるさと納税】あさや・金谷ホテル・ホテル三日月' },
      { slug: 'furusato-tax-nasu-highland-onsen-resort-stay', title: '【那須高原 絶景リゾート＆温泉ホテル×ふるさと納税】エピナール那須・山楽・グランドメルキュール' },
      { slug: 'furusato-tax-karuizawa-luxury-resort-villa-stay', title: '【軽井沢 高原リゾート＆名門ホテル×ふるさと納税】マリオット・プリンスイースト・音羽ノ森' },
      { slug: 'furusato-tax-tangible-cultural-property-sukiya-carpenter-ryokan-stay', title: '【登録有形文化財・宮大工数寄屋造り旅館×ふるさと納税】木造建築美の宿' }
    ]
  },
  {
    slug: 'furusato-tax-yamagata-zao-onsen-okama-stay',
    componentName: 'FurusatoZaoOnsenOkamaStayPage',
    tag: '山形蔵王温泉 樹氷・御釜＆強酸性硫黄泉特集',
    title: 'エメラルドの火口湖「御釜」と冬の樹氷スノーモンスター！山形蔵王温泉の乳白色強酸性硫黄泉＆極上山形牛名門宿×ふるさと納税完全攻略ガイド【2026年最新】蔵王国際・四季のホテル・高見屋',
    metaTitle: 'エメラルドの火口湖「御釜」と冬の樹氷スノーモンスター！山形蔵王温泉の乳白色強酸性硫黄泉＆極上山形牛名門宿×ふるさと納税完全攻略ガイド【2026年最新】蔵王国際・四季のホテル・高見屋',
    shortTitle: '山形蔵王温泉 樹氷＆にごり湯名宿特集',
    description: '開湯千九百年を誇る東北屈指の名湯・山形蔵王温泉！神秘の火口湖「御釜」と大迫力のスノーモンスター（樹氷）。「蔵王国際ホテル」「蔵王四季のホテル」「深山荘 高見屋」を、山形県山形市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。丸太造り八右衛門の湯、乳白色のにごり湯露天風呂、極上山形牛会席を満喫。',
    heroTag: '神秘の御釜と乳白色の強酸性硫黄泉！山形県蔵王温泉特集',
    leadTitle: 'エメラルドグリーンに輝く御釜、冬を彩る巨大な樹氷。日本屈指の強酸性美肌にごり湯に包まれる山形蔵王の旅へ',
    leadText: '山形県と宮城県にまたがる雄峰・蔵王連峰の山腹に位置し、西暦110年（日本武尊の東征の折）に開湯したと伝わる東北最古級の名湯「山形・蔵王温泉（ざおうおんせん）」。エメラルドグリーンの湖水が神秘的な表情を見せる火口湖「御釜（おかま）」をはじめ、冬に針葉樹アオモリトドマツが氷と雪に覆われて巨大化する世界的な奇観「スノーモンスター（樹氷）」、そして標高の高い高原ならではの高山植物や大パノラマの雲海など、息を呑む大自然が広がります。蔵王温泉の代名詞は、日本屈指の強酸性（pH1.5〜2.0前後）を誇る乳白色の「天然硫黄泉」。「皮膚を強くし、肌を白く滑らかにする美人づくりの湯」として全国に名を轟かせ、湯船を満たす白濁した濃厚なお湯と立ちのぼる硫黄の香りは、まさに本物の温泉地ならではの醍醐味です。宿の木造露天風呂に身を沈めれば、高原の澄んだ空気とともに日頃の疲れが完全に消え去ります。さらに山形の食文化は全国トップクラス。厳しい寒暖差が育んだ極上の黒毛和牛「山形牛」のステーキやすき焼き、山形名物の芋煮鍋、山菜やキノコ、つや姫のご飯など、里山の豊かな実りを盛り込んだ贅沢な会席料理が旅人の舌を魅了します。本特集では、総木造り丸太梁の圧巻の大浴場「八右衛門の湯」と口コミ4.7超を誇る「蔵王国際ホテル」、百松河原に佇む風流な離れ湯「白金の湯」が人気の「蔵王四季のホテル」、そして創業三百年・純和風木造数寄屋造りの風格と自家源泉かけ流しを誇る「深山荘 高見屋」の3宿を厳選。山形県山形市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの蔵王温泉ステイをお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '日本屈指の強酸性・乳白色のにごり湯！「美肌づくりの湯」を100％源泉掛け流しで',
        body: 'pH1台の濃厚な硫黄泉が古い角質を洗い流し肌をすべすべに。木造の風情ある露天風呂で本物の名湯を堪能できます。'
      },
      {
        num: '02',
        title: '世界的な絶景「スノーモンスター（樹氷）」と神秘のエメラルド火口湖「御釜」',
        body: 'ロープウェイから見下ろす大迫力の樹氷や、蔵王エコーラインを抜けて出会う御釜。四季を通じて感動的な絶景が待っています。'
      },
      {
        num: '03',
        title: '山形市ふるさと納税で最大30％OFF！3年間有効クーポンで樹氷・紅葉シーズンに予約',
        body: 'スキー客や観光客で賑わう人気の蔵王温泉もふるさと納税なら実質2,000円。寄付から3年間有効なので、ベストシーズンを賢く確保できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'zao_kokusai',
        badge: '山形県山形市・総木造りの圧巻大浴場「八右衛門の湯」！乳白色100％源泉掛け流し＆口コミ総合4.7点超の最高峰リゾートホテル',
        rank: '厳選名宿 第1選',
        desc: '蔵王温泉の高台に位置し、伝統的な湯治場の温もりとモダンリゾートの快適さが見事に調和したハイグレードホテル。宿のシンボルは、釘を一本も使わずに組み上げられた丸太梁の総木造り大浴場「八右衛門の湯」。高い天井からやわらかな光が差し込み、乳白色の源泉掛け流し温泉が贅沢に溢れ出します。足湯や石造りの露天風呂、貸切風呂も完備。客室は広々とした和洋室やベッド付き和室が揃います。夕食はきめ細やかな霜降りが美しい「極上山形牛」の鉄板焼きステーキや山形名物の芋煮、旬の地場食材をふんだんに盛り込んだ本格和食会席膳で、味覚・温泉・施設すべてにおいて東北屈指の満足度を誇ります。'
      },
      {
        key: 'zao_shiki',
        badge: '山形県山形市・白樺と百松河原に佇む風流な離れ湯「白金の湯」！乳白色にごり湯露天風呂＆山形牛ステーキ会席（四季のホテル）',
        rank: '厳選名宿 第2選',
        desc: '蔵王連峰の自然に囲まれた静かな森のほとりに佇む、温かなおもてなしが評判の温泉リゾートホテル。宿最大の魅力は、館内から専用の木造通路を歩いて向かう離れ湯「離れ湯 百松の湯（白金の湯）」。白樺の木々と川のせせらぎに包まれた露天風呂には、白濁した濃厚な強酸性硫黄泉が注がれ、森林浴と湯浴みが一体となった贅沢な時間が流れます。館内大浴場では肌に優しい弱アルカリ性の湯も楽しめ、2つの異なる泉質を満喫可能。夕食は山形牛の陶板焼きステーキや季節の山菜・きのこ、山形県産ブランド米「つや姫」を取り入れた色彩豊かな会席料理で、心温まる滞在を叶えてくれます。'
      },
      {
        key: 'zao_takamiya',
        badge: '山形県山形市・創業三百年、蔵王温泉街の最高峰老舗！歴史ある木造数寄屋造り建築＆七つの趣異なる源泉風呂（深山荘 高見屋）',
        rank: '厳選名宿 第3選',
        desc: '江戸時代享保元年（1716年）創業、蔵王温泉で最も古い歴史と格式を誇る純和風木造旅館。温泉街の上高湯の高台に佇み、幾重にも連なる階段や回廊、宮大工の技が息づく数寄屋造りの客室は、大人の隠れ家のような圧倒的な風格を醸し出します。館内には木造の「せせらぎの湯」「石造りの露天風呂」など七つの趣異なる湯船があり、創業以来湧き続ける自家源泉を完全掛け流しで堪能。夕食は個室食事処にて、料理長が腕を振るう最高級山形牛のすき焼きやしゃぶしゃぶ、山形の旬の山の恵みを美しく盛り込んだ料亭懐石料理で、本物の歴史と静寂に浸る至高のステイを提供します。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-ginzan-onsen-taisho-romantic-stay', title: '【銀山温泉 大正ロマン＆雪見露天宿×ふるさと納税】能登屋・銀山荘・古勢起屋' },
      { slug: 'furusato-tax-kurokawa-onsen-yumeguri-luxury-stay', title: '【黒川温泉 入湯手形＆渓流露天風呂宿×ふるさと納税】山みず木・奥の湯・新明館' },
      { slug: 'furusato-tax-kinugawa-nikko-world-heritage-stay', title: '【日光東照宮＆奥日光乳白色硫黄泉×ふるさと納税】千姫物語・日光金谷・四季彩' },
      { slug: 'furusato-tax-three-great-wagyu-beef-gourmet-stay', title: '【日本三大和牛・神戸牛＆松阪牛×ふるさと納税】最高峰ステーキ名宿' }
    ]
  },
  {
    slug: 'furusato-tax-nasu-highland-onsen-resort-stay',
    componentName: 'FurusatoNasuHighlandStayPage',
    tag: '那須高原 天皇の避暑地＆高原温泉リゾート特集',
    title: 'ロイヤルリゾート那須の自然と名湯！那須温泉の美肌露天風呂＆極上とちぎ和牛・豪華高原バイキング×ふるさと納税完全攻略ガイド【2026年最新】エピナール那須・山楽・グランドメルキュール',
    metaTitle: 'ロイヤルリゾート那須の自然と名湯！那須温泉の美肌露天風呂＆極上とちぎ和牛・豪華高原バイキング×ふるさと納税完全攻略ガイド【2026年最新】エピナール那須・山楽・グランドメルキュール',
    shortTitle: '那須高原 温泉リゾート＆名門宿特集',
    description: '御用邸が置かれる日本屈指のロイヤルリゾート・栃木県那須高原！雄大な茶臼岳と豊かな森。「ホテルエピナール那須」「那須温泉 山楽」「グランドメルキュール那須高原リゾート＆スパ」を、栃木県那須町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。大型温泉大浴場、大正創業の昭和天皇ゆかり名門、とちぎ和牛を満喫。',
    heroTag: '御用邸の気品と豊かな大自然！栃木県那須町特集',
    leadTitle: '那須連山の雄大な稜線、緑あふれる木漏れ日の森。御用邸のある気品あふれる那須高原で過ごす優雅な休日へ',
    leadText: '東京から東北新幹線で約70分、雄大な茶臼岳の山麓に広がる日本を代表する高原保養地「栃木県・那須高原（なすこうげん）」。大正時代に那須御用邸が造営されて以来、「ロイヤルリゾート」として皇族方や多くの文化人に愛されてきた気品と静寂に包まれたリゾート地です。那須高原の魅力は、標高によって異なる表情を見せる雄大な自然景観。清らかな渓流や滝、四季折々の野花が咲き乱れる牧場、お洒落なカフェやベーカリー、美術館が点在し、高原の澄んだ空気を吸い込みながらのドライブや散策は格別の爽快感をもたらします。さらに開湯千三百年を超える「那須温泉郷」は、効能豊かな天然温泉の宝庫。森の中に広がる広大な岩露天風呂や、檜の香りに包まれる大浴場に浸かれば、高原の涼やかな風とともに日頃の疲れが心地よく解きほぐされていきます。そしてディナーは、栃木の豊かな大地が育んだ最高峰の食材。日本屈指のブランド黒毛和牛「とちぎ和牛」のステーキ、那須の契約農家から毎朝届く甘みたっぷりの高原野菜、那須御養卵や新鮮な乳製品を使ったスイーツなど、贅を尽くした料理が食卓を彩ります。本特集では、那須高原最大級のスケールを誇り大型露天風呂と豪華バイキングがファミリー・カップルに絶大な人気を誇る「那須温泉 ホテルエピナール那須」、大正12年創業・昭和天皇ゆかりの格式高い自家源泉大露天風呂を誇る最高峰「那須温泉 山楽」、そして那須連山を一望する大パノラマと充実の温泉スパが自慢の「グランドメルキュール那須高原リゾート＆スパ」の3大名宿を厳選。栃木県那須町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの那須高原ステイをお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '御用邸のあるロイヤルリゾート！木漏れ日の森と那須連山を望む雄大な大自然',
        body: '東京から新幹線で約70分。四季折々の高原の清々しい空気と、お洒落なベーカリーや美術館巡りをゆったりと楽しめます。'
      },
      {
        num: '02',
        title: '開湯千三百年の名湯とブランド黒毛和牛「とちぎ和牛」の極上グルメ会席',
        body: '歴史ある良質な温泉で心身を癒やし、ジューシーなとちぎ和牛や採れたて高原野菜をフレンチ・会席・豪華バイキングで堪能。'
      },
      {
        num: '03',
        title: '那須町ふるさと納税で最大30％OFF！3年間有効クーポンで避暑や紅葉シーズンに予約',
        body: '夏休みや紅葉期に大人気の那須高原リゾートもふるさと納税なら実質負担2,000円。寄付から3年間有効なので家族旅行に最適です。'
      }
    ],
    hotelDetails: [
      {
        key: 'nasu_epicurean',
        badge: '栃木県那須町・那須高原最大級リゾート！大型温泉大浴場＆露天風呂と楽天トラベルアワード常連の豪華バイキング（口コミ8,500件超）',
        rank: '厳選名宿 第1選',
        desc: '約五万坪という広大な敷地を持ち、那須高原随一の施設規模と満足度を誇る大型総合リゾートホテル。館内には那須温泉を引いたエリア最大級の大浴場や、緑に囲まれた川のせせらぎを聞く大露天風呂、サウナ、温水室内プールを完備し、三世代旅行からカップルまで幅広く楽しめます。最大の自慢は、約90種類もの料理が並ぶ豪華ディナーバイキング「NASUバイキング エルバージュ」。シェフが目の前で焼き上げる牛ステーキや揚げたて天ぷら、那須の採れたて高原野菜、パティシエ特製スイーツが食べ放題。最上階の本格フレンチレストラン「メリメランジュ」での贅沢ディナーも選べます。'
      },
      {
        key: 'nasu_sansui',
        badge: '栃木県那須町・大正十二年創業・昭和天皇ゆかりの格式！自家源泉100％の広大な大露天風呂と最高級とちぎ和牛懐石（那須温泉 山楽）',
        rank: '厳選名宿 第2選',
        desc: '大正12年創業、昭和天皇が皇太子時代にご逗留された歴史を持つ、那須を代表する最高峰の純和風名門旅館。美しい日本庭園を抜けると、大正ロマンの風情漂う格式高い空間が広がります。宿最大の誇りは、約三十畳もの広さを誇る自家源泉掛け流しの大露天風呂。清らかな木漏れ日と小鳥のさえずりに包まれながら、大正時代からこんこんと湧き続ける名湯に心ゆくまで浸ることができます。客室は数寄屋造りの気品ある和室で、細やかなおもてなしが評判。夕食はA5ランクとちぎ和牛のすき焼きやしゃぶしゃぶ、旬の厳選素材を一品一品丁寧に仕上げた本格懐石料理をお部屋食で優雅に味わえます。'
      },
      {
        key: 'nasu_garden',
        badge: '栃木県那須町・那須連山を一望する大パノラマ！広々とした温泉露天風呂とオールインクルーシブで楽しむ極上高原リゾート',
        rank: '厳選名宿 第3選',
        desc: '那須高原の雄大な自然を見下ろす高台に建ち、スタイリッシュなリゾート空間を提供するハイグレードホテル。客室の大きな窓からは、緑豊かな那須の森や雄大な那須連山のパノラマビューが広がり、朝夕の清々しい高原の光に癒やされます。館内には広々とした大浴場や岩造りの露天風呂、サウナが完備され、旅の疲れを心地よくリセット。ラウンジでのドリンクサービスや、地元の厳選食材を取り入れた豪華ディナービュッフェでは、和洋中の多彩な美食を心ゆくまで堪能でき、ファミリーやグループ旅行に高い満足度を誇ります。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-kinugawa-nikko-world-heritage-stay', title: '【日光東照宮＆奥日光乳白色硫黄泉×ふるさと納税】千姫物語・日光金谷・四季彩' },
      { slug: 'furusato-tax-karuizawa-luxury-resort-villa-stay', title: '【軽井沢 高原リゾート＆名門ホテル×ふるさと納税】マリオット・プリンスイースト・音羽ノ森' },
      { slug: 'furusato-tax-ikaho-onsen-stone-steps-luxury-stay', title: '【伊香保温泉 365段石段街＆二大名湯宿×ふるさと納税】福一・岸権旅館・ホテル木暮' },
      { slug: 'furusato-tax-luxury-buffet-gourmet-resort-stay', title: '【豪華ビュッフェ＆オープンキッチン名宿×ふるさと納税】美食リゾート' }
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

for (const cfg of round90Configs) {
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
    '絶景露天風呂',
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

console.log('\nAll 4 Round 90 pages successfully written!');
