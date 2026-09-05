const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const pages = [
  {
    slug: 'zen-meditation-shojin-cuisine-temple-retreat-stay',
    title: '禅寺坐禅体験＆精進料理宿坊完全ガイド【高野山・永平寺・京都リトリート】',
    description: '世界遺産高野山の歴史ある宿坊、福井・大本山永平寺門前、京都妙心寺界隈の枯山水庭園を望む禅体験宿を特集。朝のお勤め、護摩祈祷、本格精進料理で雑念を払い心を整えるリトリートステイ。',
    heroTag: '坐禅・精進料理・宿坊特化',
    leadTitle: '凛とした静寂と警策の音。心を無にして自己と向き合う禅寺リトリート',
    leadText: '朝露に濡れる苔庭、早朝の澄んだ空気に響く鐘の音と読経。日常の喧騒や情報過多のデジタル社会から身を置き、呼吸を整えて無心になる「坐禅（ざぜん）体験」。五味五色五法に基づき命に感謝していただく色彩豊かな「精進料理」、そして僧侶とともに過ごす「朝のお勤め」。現代人の心身を芯からリセットする、本物の禅と宿坊の旅へご案内します。',
    sections: [
      {
        key: 'koyasan_zen_shukubo_stay',
        badge: '世界遺産・弘法大師開創の天空聖地',
        intro: '標高約800mの山上盆地に広がる密教の聖地・高野山。117ある寺院のうち約50箇所の寺院が宿坊として参拝者を迎えます。美しい日本庭園、国宝級の障壁画、毎朝行われる厳かな勤行と護摩焚き、そして胡麻豆腐をはじめとする伝統の本膳式精進料理が堪能できます。'
      },
      {
        key: 'kyoto_zen_temple_stay',
        badge: '枯山水庭園と臨済宗の大本山',
        intro: '妙心寺や大徳寺、建仁寺など日本を代表する禅寺が集う古都・京都。白砂と巨石が織りなす枯山水庭園の縁側に腰掛け、僧侶の手ほどきで呼吸と姿勢を調える本格坐禅体験。静寂の宿坊や禅の哲学を取り入れた宿で、特別な京都時間を過ごせます。'
      },
      {
        key: 'eiheiji_zen_retreat_stay',
        badge: '道元禅師の教え息づく大本山永平寺',
        intro: '曹洞宗の大本山として厳しい修行で知られる福井・永平寺。樹齢数百年の巨杉に囲まれた境内での坐禅指導、永平寺から認証を受けた「親禅の宿 柏樹關」などで、伝統の精進料理と快適なホテルステイが融合した上質なリトリートを体験できます。'
      }
    ],
    faq: [
      {
        q: '宿坊に泊まるのは初めてですが、作法やルールは厳しいですか？',
        a: '現在の宿坊は一般的な旅館やホテル並みに設備が整っており、温かいホスピタリティで迎えてくれます。門限や朝のお勤めの時間厳守など寺院ごとの基本ルールはありますが、僧侶が親切に案内してくれるため、初心者の方でも安心して宿泊できます。'
      },
      {
        q: '精進料理でお腹はいっぱいになりますか？お酒は飲めますか？',
        a: '肉や魚は一切使いませんが、湯葉、豆腐、旬の根菜、きのこ、海藻などを多彩な調理法で仕上げるため、品数も多く非常に満足感があります。お酒については「般若湯（はんにゃとう）」として提供している宿坊も多くあります。'
      },
      {
        q: '坐禅で足が痛い場合はどうすればいいですか？',
        a: '結跏趺坐（けっかふざ）や半跏趺坐が難しい場合は、正座や椅子に座って行う「椅子坐禅」を許可している寺院がほとんどです。無理をせず背筋を伸ばして呼吸に集中することが最も大切です。'
      }
    ]
  },
  {
    slug: 'tea-ceremony-authentic-chashitsu-matcha-ryokan-stay',
    title: '茶道・本格茶室＆抹茶体験宿完全ガイド【京都・金沢・宇治数寄屋ステイ】',
    description: '数寄屋造りの名門旅館に備えられた本格茶室、裏千家・表千家の点前体験、加賀百万石の茶の湯文化、宇治の茶畑を望むティーリゾートを特集。一期一会の精神と極上和菓子を味わう大人の旅。',
    heroTag: '本格茶室・茶道体験特化',
    leadTitle: '躙口をくぐり、一服の薄茶をいただく。一期一会の美意識に浸る茶の湯ステイ',
    leadText: '千利休が大成した「侘び茶」の精神。頭を下げて躙口（にじりぐち）をくぐれば、そこは世俗の身分や日常の喧騒を忘れ、亭主と客人が心を通わせるわずか四畳半の小宇宙。季節の花と掛け軸、釜の湯が沸く松風の音、抹茶の鮮やかな緑と芳醇な香り。日本の伝統建築美と茶の湯のおもてなしが息づく、選りすぐりの数寄屋旅館とティーリゾートへご案内します。',
    sections: [
      {
        key: 'kyoto_sukiya_tea_ryokan_stay',
        badge: '三千家の本山・京都の数寄屋旅館',
        intro: '表千家・裏千家・武者小路千家が本拠を置く茶道の聖地・京都。宮大工が釘を使わずに建てた本格茶室を敷地内に有する老舗料理旅館では、亭主による本格的なお点前と季節の生菓子、そして茶懐石の真髄を味わう特別な時間が流れます。'
      },
      {
        key: 'kanazawa_tea_culture_stay',
        badge: '加賀百万石・武家茶道の美',
        intro: '前田利家をはじめ歴代藩主が茶の湯を奨励した金沢。ひがし茶屋街や兼六園の時雨亭など名茶室が点在。金沢の宿では、九谷焼や山中漆器の銘器で点てるお抹茶と、加賀藩御用達の老舗和菓子による格調高い茶道体験が叶います。'
      },
      {
        key: 'uji_tea_farm_retreat_stay',
        badge: '日本茶のふるさと・宇治川の茶畑',
        intro: '宇治茶の名産地・京都宇治。宇治川の清流や茶畑を望むモダンなティーホテルでは、煎茶・玉露の温度別の淹れ分け体験や、濃厚な本場宇治抹茶を自分で点てる体験、抹茶を使った創作フレンチなど、お茶を五感で楽しむリトリートステイが人気です。'
      }
    ],
    faq: [
      {
        q: '茶道の作法や知識が全くなくても体験できますか？',
        a: '全く問題ありません。旅館やホテルの茶道体験では、お茶のいただき方や器の鑑賞法、お菓子の食べ方まで優しく丁寧に教えてもらえます。「美味しく味わい、そのひとときを愉しむ」ことが基本ですので気兼ねなくご参加ください。'
      },
      {
        q: '服装に指定や注意点はありますか？',
        a: '茶室に入る際は、畳を傷つけないよう清潔な白い靴下（または白足袋）を着用するのがマナーです。また、大切な茶器を傷つけないよう、指輪や腕時計などのアクセサリー類は事前に外しておきましょう。'
      },
      {
        q: '客室でお茶を点てるプランもありますか？',
        a: 'はい、客室に茶道具一式（茶筅、抹茶、茶碗、ポット等）が用意されており、好きな時間に自分自身でお茶を点てて愉しめるプライベートなお茶体験プランを用意している宿も増えています。'
      }
    ]
  },
  {
    slug: 'shakyo-meditation-mindfulness-sacred-temple-stay',
    title: '写経・写仏＆瞑想マインドフルネス宿完全ガイド【出羽三山・お遍路・鎌倉】',
    description: '出羽三山（羽黒山）山伏修行ゆかりの宿坊、四国八十八ヶ所霊場のお遍路寺院、古都鎌倉の禅寺ゆかりの宿を特集。墨をすり一文字ずつ仏の言葉をなぞる写経、阿字観瞑想でマインドフルネスを体感する旅。',
    heroTag: '写経・写仏・瞑想特化',
    leadTitle: '一筆一文字に心を込める。墨の香りに包まれて頭を空っぽにする写経ステイ',
    leadText: '静寂に包まれた寺院の一室、すずりに水を垂らしてゆっくりと墨をすり、筆先を整えて般若心経の文字をなぞる「写経（しゃきょう）」。また、下絵の仏様を丁寧に筆で写し取る「写仏（しゃぶつ）」。文字や絵にひたすら集中することで、日々の不安や雑念が消え去り、心が驚くほど穏やかに整っていきます。自分自身を取り戻す、静寂のマインドフルネス宿へご案内します。',
    sections: [
      {
        key: 'dewasanzan_mountain_ascetic_stay',
        badge: '生まれ変わりの旅・羽黒山修験宿坊',
        intro: '山形県・出羽三山（羽黒山・月山・湯殿山）の門前に連なる歴史ある宿坊街「手向（とうげ）」。山伏が案内する国宝五重塔の杉木立参道、山の恵みをいただく伝統の精進料理、そして白装束に身を包んで行う写経や瞑想で、魂の再生（生まれ変わり）を体感できます。'
      },
      {
        key: 'shikoku_henro_pilgrimage_stay',
        badge: '同行二人・四国八十八ヶ所霊場',
        intro: '弘法大師空海の足跡を辿る四国遍路。お遍路さんを迎える札所寺院の宿坊では、本堂での写経体験や納経、早朝の勤行が行われます。お遍路装束に身を包み、自分自身の人生を見つめ直す静謐な祈りの時間が過ごせます。'
      },
      {
        key: 'kamakura_zen_mindfulness_stay',
        badge: '山稜に抱かれた古都の禅寺ステイ',
        intro: '建長寺や円覚寺など禅の歴史が色濃く残る鎌倉。谷戸（やと）の自然に囲まれたホテルや旅館では、寺院と連携した早朝の写経・写仏ワークショップや、坐禅・マインドフルネスプログラムが充実。都心から気軽に行ける週末リトリートとして人気です。'
      }
    ],
    faq: [
      {
        q: '字が下手でも写経をすることはできますか？',
        a: '写経は文字の美しさを競うものではなく、一文字一文字に心を込めて向き合う行為そのものが大切です。薄く印刷された手本の上をなぞる形式が一般的ですので、筆を持ったことがない初心者の方でも安心して取り組めます。'
      },
      {
        q: '写経したお経の用紙はどうすればよいですか？',
        a: '書き終えた写経用紙は、宿泊寺院の本堂に奉納して祈祷してもらうか、旅の記念やお守りとして自宅へ持ち帰ることができます。奉納料が含まれているプランも多くあります。'
      },
      {
        q: '所要時間はどのくらいかかりますか？',
        a: '般若心経（262文字）をすべて書く場合は約40分〜1時間程度が目安です。短縮版のお経や一文字写経、仏様の姿をなぞる写仏など、時間や好みに合わせて選べる施設も多くあります。'
      }
    ]
  },
  {
    slug: 'samurai-katana-armor-buke-yashiki-heritage-stay',
    title: '武家屋敷＆サムライ・甲冑・刀剣体験宿完全ガイド【会津・角館・知覧歴史旅】',
    description: '白虎隊の歴史息づく会津若松、みちのくの小京都・角館の黒板塀武家屋敷、薩摩武士の面影を残す知覧武家屋敷庭園を特集。陣羽織・甲冑着付けや居合道体験、武家屋敷を再生した登録文化財宿を徹底解説。',
    heroTag: '武家屋敷・サムライ体験特化',
    leadTitle: '黒板塀と石畳の向こうに息づく武士道。江戸の風情を今に伝える武家屋敷ステイ',
    leadText: '重厚な長屋門、美しく手入れされた枯山水庭園、刀傷の残る柱。会津藩士の義の心、角館の枝垂れ桜と黒板塀、そして薩摩武士の美意識が息づく知覧。当時の武家屋敷そのものや蔵をリノベーションした歴史的建造物の宿に泊まり、本物の甲冑着付けや居合切り体験、武家伝統の会席料理を味わう、侍の美学に浸るヘリテージステイへご案内します。',
    sections: [
      {
        key: 'aizu_samurai_buke_stay',
        badge: '什の掟・義を重んじた会津藩の魂',
        intro: '鶴ヶ城の城下町として栄え、戊辰戦争や白虎隊の悲話で知られる会津若松。復元された広大な「会津武家屋敷」や藩校日新館の見学とともに、名湯・東山温泉の渓流沿いに建つ老舗宿で会津郷土料理「こづゆ」や地酒、武家ゆかりの歴史ロマンを堪能できます。'
      },
      {
        key: 'kakunodate_samurai_mansion_stay',
        badge: 'みちのくの小京都・角館黒板塀通り',
        intro: '江戸時代そのままの道幅と黒板塀が続く秋田・角館の武家屋敷通り。青柳家や石黒家など現存する上級武士の屋敷が立ち並びます。武家屋敷の土蔵や古民家をモダンに再生したホテルでは、樺細工の調度品や比内地鶏鍋を味わう特別なステイが叶います。'
      },
      {
        key: 'chiran_satsuma_samurai_stay',
        badge: '薩摩の小京都・知覧武家屋敷群',
        intro: '生垣の小道と7つの名勝庭園が残る鹿児島・知覧。母ヶ岳を借景にした枯山水庭園は江戸中期の武士の教養の高さを物語ります。知覧特攻平和会館の歴史見学や、指宿温泉の砂むし温泉と組み合わせた南九州の歴史探訪ステイが楽しめます。'
      }
    ],
    faq: [
      {
        q: '武家屋敷の内部見学や甲冑体験は宿泊者以外でもできますか？',
        a: '角館や会津の主要武家屋敷は一般公開されており、観光施設として見学や甲冑着付け体験が可能です。宿泊施設によっては、宿泊者限定の夜間ライトアップ見学やプライベート居合道体験プランを用意しているところもあります。'
      },
      {
        q: '武家屋敷宿の客室設備（水回り・冷暖房）は快適ですか？',
        a: '外観や梁・柱は歴史的な武家建築や蔵の風合いをそのまま活かしつつ、水回り（バス・トイレ）・ベッド・空調・Wi-Fiなどは最新の高級ホテル基準に全面改装されています。歴史の情緒と現代の快適性を兼ね備えています。'
      },
      {
        q: '刀剣や歴史ファン向けの見どころは周辺にありますか？',
        a: '会津若松城の郷土博物館や角館青柳家の武器蔵（刀剣や甲冑の展示）、各地の鍛冶屋や刀剣工房など、本物の日本刀や武具を間近に鑑賞できるスポットが充実しています。'
      }
    ]
  },
  {
    slug: 'traditional-crafts-pottery-gold-leaf-washi-stay',
    title: '伝統工芸体験宿完全ガイド【金沢金箔・越前和紙・有田焼陶芸ステイ】',
    description: '金沢の金箔貼り＆九谷焼絵付け、福井の越前和紙漉き・越前焼、佐賀の有田焼・波佐見焼の窯元巡りを特集。職人の手仕事を間近で体感し、自作の器や工芸品を持ち帰る特別なクラフトリゾート。',
    heroTag: '伝統工芸・陶芸体験特化',
    leadTitle: '職人の技を五感で体感。自ら創り出す喜びに出会う日本の伝統工芸ステイ',
    leadText: '金沢の1万分の1ミリまで薄く打ち延ばされた金箔工芸、千五百年の歴史を持つ越前和紙の手漉き体験、そして有田・波佐見の登り窯と白磁の器作り。見るだけでなく、名工の手ほどきを受けながら自分だけの一品を作り上げる贅沢。館内の調度品や料理を彩る器にも最高峰の工芸品が使われ、日本の職人魂と手仕事の温もりに浸るクリエイティブな旅へご案内します。',
    sections: [
      {
        key: 'kanazawa_gold_leaf_craft_stay',
        badge: '国内シェア99%・金沢箔と九谷焼',
        intro: '加賀百万石の工芸王国・金沢。薄い金箔を小箱や手鏡に貼り付ける「金箔貼り体験」や、鮮やかな五彩で彩る「九谷焼絵付け体験」。工芸作家の作品がギャラリーのように並ぶ温泉旅館で、美肌の湯とともに日本の美の極致を体感できます。'
      },
      {
        key: 'echizen_washi_pottery_stay',
        badge: '越前和紙の里＆越前焼の古窯',
        intro: '日本最古の歴史を誇る福井・越前和紙の里「パピルス館」での紙漉き体験や、日本六古窯の一つ「越前焼」の陶芸ろくろ体験。あわら温泉や越前海岸の宿を拠点に、素朴で温かみのある手仕事の里をのんびり巡ることができます。'
      },
      {
        key: 'arita_hasami_ceramic_retreat_stay',
        badge: '磁器発祥の地・有田焼＆波佐見焼',
        intro: '日本で初めて白磁が焼かれた佐賀県有田町と、お洒落な日常の器で大人気の長崎県波佐見町。歴史的なトンバイ塀の路地や窯元巡り。宿では人間国宝の器に盛られた極上会席や、美肌の嬉野温泉・武雄温泉と組み合わせた贅沢な滞在が叶います。'
      }
    ],
    faq: [
      {
        q: '作った工芸品や陶器はその日に持ち帰ることができますか？',
        a: '金箔貼りや和紙漉き体験はその場で乾かして当日持ち帰ることができます。陶芸（ろくろ・手びねり・絵付け）は窯での素焼き・本焼きが必要なため、後日（約1〜2ヶ月後）完成品が自宅へ郵送されます。'
      },
      {
        q: '小さな子どもや不器用な大人でも体験できますか？',
        a: '専任の職人やインストラクターがマンツーマンで優しくサポートしてくれるため、お子様からご年配の方まで誰でも簡単に素晴らしい作品を完成させることができます。家族旅行の思い出作りにも最適です。'
      },
      {
        q: '宿の中で工芸体験ができるプランはありますか？',
        a: 'はい、旅館のワークショップルームやサロンで金箔体験や匂い袋作り、水引アートなどができる宿泊プランを用意している施設が多数あります。移動の手間なく滞在中に楽しめます。'
      }
    ]
  }
];

function generatePage(page) {
  const dir = path.join(__dirname, 'src/app', page.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const sectionsCode = page.sections.map(sec => {
    return `
        {/* セクション: ${sec.key} */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider">
              ${sec.badge}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['${sec.key}']?.label || '${sec.badge}'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ${sec.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['${sec.key}']?.hotels && secData['${sec.key}'].hotels.length > 0 ? (
              secData['${sec.key}'].hotels.map((hotel: any) => (
                <div
                  key={hotel.hotelNo}
                  className="group bg-stone-50/70 border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-stone-200">
                    <img
                      src={hotel.hotelImageUrl || hotel.roomImageUrl || '/images/no-image.jpg'}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur text-amber-300 text-xs font-bold px-2.5 py-1 rounded shadow">
                      ★ {hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : '好評'}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg mb-2 line-clamp-2 font-serif group-hover:text-amber-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '日本の美意識と伝統文化を肌で感じる、心洗われる特別な宿泊体験をお楽しみいただけます。'}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                      <div className="text-xs text-stone-500">
                        {hotel.hotelMinCharge ? (
                          <span>目安: <strong className="text-stone-900 text-base font-bold">{hotel.hotelMinCharge.toLocaleString()}</strong>円〜</span>
                        ) : (
                          <span>プラン一覧で確認</span>
                        )}
                      </div>
                      <a
                        href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-stone-900 hover:bg-amber-900 text-amber-100 rounded-lg text-xs font-bold transition"
                      >
                        詳細・宿泊プラン
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-6 bg-stone-100 rounded-xl text-center text-stone-600 text-sm">
                現在、該当条件に合うおすすめ宿泊施設を精選更新中です。
              </div>
            )}
          </div>
        </section>`;
  }).join('\n');

  const faqsCode = page.faq.map(f => {
    return `
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-amber-700 font-serif font-black text-lg">Q.</span>
                <span>${f.q}</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                ${f.a}
              </p>
            </div>`;
  }).join('\n');

  const content = `import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '${page.title} | クラウドトラベル',
  description: '${page.description}',
  openGraph: {
    title: '${page.title} | クラウドトラベル',
    description: '${page.description}',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['${page.slug}'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">${page.heroTag}</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-stone-850 to-amber-950 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg border border-amber-900/30">
          <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ${page.heroTag}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            ${page.title}
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl">
            ${page.leadText}
          </p>
        </header>

        {/* メインコンテンツセクション */}
        ${sectionsCode}

        {/* よくある質問 FAQ */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-2">
            <span className="w-2 h-7 bg-amber-700 rounded-full inline-block"></span>
            よくある質問・伝統文化体験＆宿坊の楽しみ方
          </h2>
          <div className="space-y-4">
            ${faqsCode}
          </div>
        </section>

        {/* 関連リンク */}
        <section className="bg-stone-200/70 rounded-2xl p-6 md:p-8 text-center border border-stone-300">
          <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">
            他の伝統文化・リトリート宿を探す
          </h3>
          <p className="text-stone-600 text-sm mb-6">
            坐禅・精進料理宿坊、本格茶室茶道、写経マインドフルネス、武家屋敷、伝統工芸体験など、日本の美意識を体感する宿泊ガイド。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/zen-meditation-shojin-cuisine-temple-retreat-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🧘‍♂️ 禅寺坐禅＆精進料理宿坊
            </Link>
            <Link
              href="/tea-ceremony-authentic-chashitsu-matcha-ryokan-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🍵 本格茶室＆茶道体験宿
            </Link>
            <Link
              href="/shakyo-meditation-mindfulness-sacred-temple-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              ✍️ 写経・写仏＆瞑想宿
            </Link>
            <Link
              href="/samurai-katana-armor-buke-yashiki-heritage-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              ⚔️ 武家屋敷＆サムライ体験宿
            </Link>
            <Link
              href="/traditional-crafts-pottery-gold-leaf-washi-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🏺 金箔・和紙・陶芸工芸宿
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf8');
  console.log('Created page for:', page.slug);
}

for (const p of pages) {
  generatePage(p);
}

console.log('All 5 traditional culture hubs successfully generated!');
