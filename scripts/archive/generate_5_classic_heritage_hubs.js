const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const pages = [
  {
    slug: 'japan-classic-hotel-association-heritage-stay',
    title: '日本クラシックホテルの会加盟名門宿完全ガイド【明治・大正の薫りと登録有形文化財】',
    description: '日光金谷ホテル、富士屋ホテル、奈良ホテルなど日本クラシックホテルの会に加盟する名門建築宿を特集。歴代のVIPや文豪が愛した至高のホスピタリティと往時の美意識を巡る特別な宿泊体験。',
    heroTag: '名門クラシックホテル特化',
    leadTitle: '日本の近代史と西洋建築の美意識が息づく、9つの名門クラシックホテルステイ',
    leadText: '日本にわずか9棟しか存在しない「日本クラシックホテルの会」加盟ホテル。明治から昭和初期にかけて、国の威信をかけて世界各国の国賓やVIPを迎え入れた名建築群は、今なお時を超えた気品と温もりに満ちています。当時のまま大切に手入れされた木製回転ドア、格天井や彫刻の装飾、創業時からの秘伝レシピを受け継ぐ伝統フレンチなど、一度は泊まりたい本物のヘリテージステイへご案内します。',
    sections: [
      {
        key: 'nikko_kanaya_hotel_stay',
        badge: '現存最古のリゾートクラシック',
        intro: '1873年創業、現存する日本最古のリゾートホテルとして知られる日光金谷ホテル。東照宮の雅楽師・金谷善一郎が外国人のために設けたコテージに端を発し、アインシュタインやヘレン・ケラーなど数々の世界的偉人が滞在した歴史的サロンです。'
      },
      {
        key: 'fujiya_hotel_hakone_stay',
        badge: '和洋折衷・明治の宮大工意匠',
        intro: '明治11年創業、箱根宮ノ下に佇む富士屋ホテル。唐破風屋根や本館の登録有形文化財建築、館内随所に施された宮大工による花鳥風月の彫刻や格天井が見事です。クラシカルなメインダイニングで味わう伝統のビーフカレーやコンソメスープは外せません。'
      },
      {
        key: 'nara_hotel_classic_stay',
        badge: '辰野金吾設計・関西の迎賓館',
        intro: '1909年創業、東京駅などを手掛けた明治の巨匠・辰野金吾による桃山御殿風の木造建築。吉野杉をふんだんに使用した格調高い吹き抜けロビー、鳥居を模したマントルピースなど、古都・奈良の景観と調和する圧倒的な気品が漂います。'
      }
    ],
    faq: [
      {
        q: '「日本クラシックホテルの会」とはどのような団体ですか？',
        a: '第二次世界大戦以前に建てられ、現存する歴史的価値の高い建物を維持・保存しながら営業を続けている日本の名門クラシックホテル9社によって2017年に設立された会です。加盟ホテルには日光金谷ホテル、富士屋ホテル、奈良ホテル、東京ステーションホテル、ホテルニューグランドなどが名を連ねています。'
      },
      {
        q: 'クラシックホテルの客室設備や水回りは近代化されていますか？',
        a: '歴史的建築美やアンティーク家具の風合いは大切に残しつつ、水回り・空調・ベッドマットレス・Wi-Fiなどは現代の一流ホテル基準に最新リノベーションされています。快適性とクラシカルな情緒を両立して過ごすことができます。'
      },
      {
        q: '館内ツアーや歴史案内などのサービスはありますか？',
        a: '多くのクラシックホテルでは、ホテルスタッフによる館内ヘリテージツアーや歴史展示室（ミュージアム）の見学が実施・常設されています。建物の彫刻や歴代著名人のエピソードを深く知ることで、滞在がより一層味わい深いものになります。'
      }
    ]
  },
  {
    slug: 'taisho-roman-showa-modern-art-deco-hotel-stay',
    title: '大正ロマン＆昭和モダン・アールデコ建築宿完全ガイド【ステンドグラスと意匠美】',
    description: 'ホテルニューグランド、熱海名邸、旧軽井沢倶楽部など、大正ロマンや昭和初期のアールデコ様式が色濃く残るレトロモダン宿を厳選。ステンドグラスやシャンデリアが誘うノスタルジックな滞在。',
    heroTag: '大正ロマン・昭和モダン建築',
    leadTitle: '幾何学模様とステンドグラスが織りなす、華麗なる大正ロマン＆昭和初期のレトロステイ',
    leadText: '西洋のモダニズムと日本の伝統工芸が奇跡的な融合を果たした大正末期から昭和初期。アールデコ調の幾何学レリーフ、色鮮やかなステンドグラス、重厚な真鍮の照明器具など、当時のモダニストたちが夢見た華麗なる空間が宿の中に息づいています。映画のワンシーンに迷い込んだかのようなノスタルジーに浸り、珈琲やワインを片手に贅沢な読書と寛ぎの時間を愉しむ名宿セレクションです。',
    sections: [
      {
        key: 'hotel_new_grand_yokohama_stay',
        badge: '横浜港を望む昭和モダンの金字塔',
        intro: '1927年（昭和2年）開業。マッカーサー元帥やチャップリンをはじめ多くのVIPを迎えた横浜のシンボル。本館ロビーの重厚なマホガニー階段や大仏次郎が執筆した客室、そしてドリアやナポリタン発祥の地としても名高い不朽の名館です。'
      },
      {
        key: 'atami_kiunkaku_retro_stay',
        badge: '文豪が愛した熱海の名邸と名湯',
        intro: '太宰治や谷崎潤一郎、志賀直哉など日本を代表する文豪たちが愛した熱海屈指の近代和洋建築。美しいサンルームやステンドグラスの意匠美を誇る熱海の名邸・起雲閣の空気感と、相模湾を望む名湯の宿で過ごす大人の隠れ家リゾートです。'
      },
      {
        key: 'kyu_karuizawa_roman_hotel_stay',
        badge: '避暑地軽井沢の大正モダンリゾート',
        intro: '旧軽井沢の緑豊かな森に抱かれたクラシカルホテル。大正ロマンの風情をたたえるステンドグラスや暖炉、アンティーク調の家具が落ち着いた大人の寛ぎを演出。信州の旬食材を生かしたフレンチとともに静謐な時間を過ごせます。'
      }
    ],
    faq: [
      {
        q: 'アールデコ様式とはどのような特徴がありますか？',
        a: '1920年代から30年代にかけて欧米を中心に流行した装飾様式で、直線や円、幾何学模様のパターン、原色のコントラスト、金属やガラスの質感を洗練された形で取り入れているのが特徴です。日本の昭和初期建築にも強い影響を与えました。'
      },
      {
        q: 'ドレスコードや服装に気を付けるべき点はありますか？',
        a: '館内レストラン（特にメインダイニングのディナー）ではスマートカジュアル（男性は襟付きシャツやジャケット、女性はワンピースなど）が推奨される場合があります。クラシカルな空間に合わせて少しお洒落をしていくと、特別な非日常感が一層高まります。'
      },
      {
        q: '女子旅や一人旅でも気兼ねなく楽しめますか？',
        a: '大正ロマンや昭和モダンのレトロ建築は、写真映えするフォトスポットが多く、読書やティータイムを静かに満喫できるため、一人旅や大人の女子旅にも大変人気があります。落ち着いたバーやラウンジでのカクテルタイムもおすすめです。'
      }
    ]
  },
  {
    slug: 'tangible-cultural-property-sukiya-carpenter-ryokan-stay',
    title: '登録有形文化財・宮大工建築の数寄屋旅館完全ガイド【釘を使わぬ木造美と温泉】',
    description: '伊豆修善寺の新井旅館、法師温泉長寿館、有馬温泉陶泉御所坊など、国の登録有形文化財に指定された宮大工建築・数寄屋造りの名旅館を特集。日本の木造伝統美と湯巡り。',
    heroTag: '登録有形文化財・宮大工の宿',
    leadTitle: '釘を一切使わぬ宮大工の神技と名湯。国の登録有形文化財に泊まる贅沢',
    leadText: '日本の風土と豊かな木材、そして熟練の宮大工の手仕事によって生み出された数寄屋造りの名旅館。透かし彫りの欄間、銘木の床柱、川のせせらぎや日本庭園と一体化する回廊など、建物そのものが国の登録有形文化財に指定されている奇跡の空間です。川音や庭の風情に耳を澄ませ、木造建築特有の柔らかな温もりと名湯に身を委ねる、日本文化の真髄に触れる旅へ誘います。',
    sections: [
      {
        key: 'shuzenji_arai_ryokan_stay',
        badge: '桂川沿いに佇む登録文化財の宝庫',
        intro: '伊豆修善寺温泉の中心、桂川の清流沿いに建つ創業明治5年の名旅館。登録有形文化財に指定された15棟の建物と、横山大観や安田靫彦ら文人墨客と館主が共に作り上げた「天平風呂」など、美術館に泊まるような格別の体験が叶います。'
      },
      {
        key: 'houshi_onsen_choujukan_stay',
        badge: '足元湧出の奇跡・明治の木造大浴場',
        intro: '群馬の上信越高原国立公園内、一軒宿として秘湯の風情を残す法師温泉長寿館。明治28年建築の「法師乃湯」は鹿鳴館風のアーチ窓を持つ国登録有形文化財。杉皮葺きの屋根と木造の梁が織りなす空間で、丸太の下からポコポコと自噴する極上の源泉を楽しめます。'
      },
      {
        key: 'arima_goshoboh_heritage_stay',
        badge: '有馬最古の宿・谷崎潤一郎ゆかりのサロン',
        intro: '800年の歴史を誇る有馬温泉最古の宿坊にルーツを持つ陶泉御所坊。昭和初期の数寄屋木造建築とモダンな西洋アンティークが見事に融合し、谷崎潤一郎ら多くの文豪が逗留しました。独特の半混浴式金泉露天風呂と山陰の上質な美食が堪能できます。'
      }
    ],
    faq: [
      {
        q: '文化財の宿は防音や断熱面で不便はありませんか？',
        a: '伝統的な木造建築のため、現代の高気密RC造ホテルに比べると隣室や廊下の気配・川音が感じられやすい面があります。しかし各宿では内障子の二重化や最新の暖房・床暖房設備の導入など、快適に過ごせる工夫が施されています。木のきしみや川のせせらぎも風情として楽しむのが粋な過ごし方です。'
      },
      {
        q: '文化財建築の保護のために宿泊者が気をつけるマナーはありますか？',
        a: '貴重な漆喰壁や組子障子、銘木の柱などは繊細です。スーツケースの車輪で畳や敷居を傷つけないよう持ち上げて運ぶ、柱や障子に鋭利なものを当てないなど、日本の美を後世へ残す思いやりを持った宿泊が望まれます。'
      },
      {
        q: '温泉街の散策や周辺の見どころはありますか？',
        a: '修善寺の竹林の小径や独鈷の湯、有馬の湯本坂など、文化財宿の多くは歴史ある温泉情緒の中心に位置しています。宿の下駄を鳴らして温泉街を浴衣でそぞろ歩きするのも旅の大きな醍醐味です。'
      }
    ]
  },
  {
    slug: 'former-aristocrat-zaibatsu-imperial-villa-resort-stay',
    title: '元華族・旧財閥別邸＆皇室御用達ゆかりの宿完全ガイド【名園と貴族のサロン】',
    description: '箱根強羅花壇（旧閑院宮別邸）、京都南禅寺界隈の旧財閥別邸、中禅寺湖畔の皇室・大使館ゆかりの宿など、日本の政財界VIPや旧華族が愛した名園と隠れ家リゾートを特集。',
    heroTag: '旧華族・旧財閥別邸ステイ',
    leadTitle: '日本の名士たちが美を競い合った、旧華族別邸・財閥倶楽部の名残を宿す極上宿',
    leadText: '明治・大正・昭和にかけて、旧皇族や華族、三菱・三井・住友などの旧財閥当主たちが箱根や京都、日光などの風光明媚な景勝地に築いた至高の別邸群。広大な日本庭園の借景、贅を尽くした建築素材、プライベートな社交場として愛された格式と静寂が、現代の最高峰ラグジュアリー旅館・ホテルとして受け継がれています。名園を愛でながら、日本最高峰のおもてなしと料理を堪能する特別な滞在をお届けします。',
    sections: [
      {
        key: 'gora_kadan_hakone_villa_stay',
        badge: '旧閑院宮別邸・箱根の最高峰懐石旅館',
        intro: '箱根強羅の自然林に抱かれた旧閑院宮別邸跡地。昭和の洋風建築をサロン・カフェとして今に残し、回廊の柱越しに広がる庭園美と自家源泉のいで湯、そして四季折々の極上懐石料理で世界中の旅人を魅了し続ける憧れの名宿です。'
      },
      {
        key: 'kyoto_nanzenji_zaibatsu_villa_stay',
        badge: '東山借景の小川治兵衛名園と数寄屋',
        intro: '京都・南禅寺界隈は明治期に政財界の重鎮たちが競って別邸を構えた日本屈指の別荘地。植治（小川治兵衛）が作庭した琵琶湖疏水を引き込む雄大な名園を眺めながら、名物湯豆腐や京懐石に舌鼓を打つ雅やかな時間を過ごせます。'
      },
      {
        key: 'chuzenji_lake_imperial_villa_stay',
        badge: '奥日光・国際避暑地と御用邸の気品',
        intro: '明治から昭和にかけて各国の外交官や皇族が避暑に訪れた奥日光・中禅寺湖畔。田母沢御用邸や英国・イタリア大使館別邸の歴史が息づく静寂の湖畔で、上質なスパ温泉と奥日光の豊かな大自然を満喫する優雅なステイが叶います。'
      }
    ],
    faq: [
      {
        q: '旧財閥別邸や華族別邸の宿は一般の旅行者でも気軽に泊まれますか？',
        a: 'はい、現在は高級旅館やリゾートホテルとして一般の宿泊予約を受け付けています。歴史的格式は高くとも、温かく心地よいホスピタリティで迎えてくれるため、記念日やご褒美旅行、家族旅行に最適です。'
      },
      {
        q: '庭園散策や写真撮影は自由にできますか？',
        a: '敷地内の広大な名園は宿泊者限定で散策できる宿が多く、混雑のない静寂の中で四季の移ろいや苔庭、池泉回遊式庭園の美しさを堪能できます。朝の澄んだ空気の中での庭園散歩は格別です。'
      },
      {
        q: '食事はどのような形式で提供されますか？',
        a: '多くの宿では、地元の厳選素材や旬の味覚を贅沢に盛り込んだ本格的な京懐石や会席料理がお部屋または個室食事処で提供されます。器選びから盛り付けに至るまで美術品のような美しさを楽しめます。'
      }
    ]
  },
  {
    slug: 'vories-frank-lloyd-wright-architecture-resort-stay',
    title: '巨匠建築・ヴォーリズ＆ライト様式美宿完全ガイド【暖炉・プレイリースタイル】',
    description: 'ウィリアム・メレル・ヴォーリズやフランク・ロイド・ライトの意匠を受け継ぐ近江八幡・軽井沢・阪神間の名建築宿。暖炉の温もりと有機的建築美を体感するリゾートステイ。',
    heroTag: '巨匠建築・ヴォーリズ＆ライト様式',
    leadTitle: '人と自然が調和する有機的建築。巨匠ヴォーリズとライトの息吹に包まれる旅',
    leadText: '日本に数多くの教会や洋館、名建築を遺したウィリアム・メレル・ヴォーリズと、近代建築の三大巨匠フランク・ロイド・ライト。自然素材を活かした暖炉、水平線を強調したプレイリースタイル、光と影を巧みに操る窓の配置など、彼らの建築哲学は「住まう人を心地よく包み込む温もり」に満ちています。建築愛好家はもちろん、居心地の良さを何より大切にしたい旅人に捧げる、巨匠建築リゾート特集です。',
    sections: [
      {
        key: 'omihachiman_vories_heritage_stay',
        badge: 'ヴォーリズ建築の聖地・近江八幡ステイ',
        intro: 'ヴォーリズが宣教師・建築家として半生を捧げた近江八幡。重要伝統的建造物群保存地区の街並みとともに、ヴォーリズ記念館や八幡電話交換局など数多くの作品が点在。地元近江牛や琵琶湖の恵みを味わいながら文化薫る滞在を愉しめます。'
      },
      {
        key: 'karuizawa_vories_forest_inn_stay',
        badge: '軽井沢・歴史的洋館とヴォーリズ教会の森',
        intro: '軽井沢ユニオンチャーチなどヴォーリズゆかりの木造教会が木立の間に佇む軽井沢。カラマツやモミの木に囲まれたクラシックな高原ホテルで、パチパチとはぜる暖炉の火を眺めながら信州の豊かなワインと美味に酔いしれるひとときです。'
      },
      {
        key: 'koshien_hanshin_modernism_stay',
        badge: '甲子園ホテル・阪神間モダニズムの系譜',
        intro: 'フランク・ロイド・ライトの愛弟子・遠藤新が設計した「甲子園ホテル（現・武庫川女子大学甲子園会館）」で知られる西宮・阪神間。ライト式スクラッチタイルや幾何学装飾の息吹を感じながら、洗練された都市リゾートホテルで優雅な滞在が叶います。'
      }
    ],
    faq: [
      {
        q: 'ヴォーリズ建築の魅力や特徴は何ですか？',
        a: '装飾過多にならず、住む人の使いやすさや居心地、健康を第一に考えた「ヒューマニズム」が最大の特徴です。風通しの良い間取り、温かみのある木製階段や手すり、暖炉、自然光を取り込む窓など、包み込まれるような安心感があります。'
      },
      {
        q: 'フランク・ロイド・ライトの有機的建築（オーガニック・アーキテクチャー）とは？',
        a: '自然環境と建築が対立せず、まるで大地から生えてきたかのように一体化する建築思想です。水平方向を強調した深い庇、幾何学模様の大谷石やスクラッチタイルの装飾などが代表的なディテールです。'
      },
      {
        q: '建築見学と合わせて楽しめるおすすめのアクティビティはありますか？',
        a: '近江八幡の水郷めぐりや古い町並み散策、軽井沢の美術館巡りや森のサイクリング、阪神間のカフェやベーカリー巡りなど、文化や景観を五感で楽しむ散策との相性が抜群です。'
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
                        {hotel.hotelSpecial || hotel.userReview || '歴史と情緒あふれる空間で、心ほどける特別な宿泊体験をお楽しみいただけます。'}
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
                        href={hotel.hotelInformationUrl}
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
        <header className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg border border-amber-900/30">
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
            よくある質問・歴史建築宿の楽しみ方
          </h2>
          <div className="space-y-4">
            ${faqsCode}
          </div>
        </section>

        {/* 関連リンク */}
        <section className="bg-stone-200/70 rounded-2xl p-6 md:p-8 text-center border border-stone-300">
          <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">
            他のこだわり・テーマ特化ステイを探す
          </h3>
          <p className="text-stone-600 text-sm mb-6">
            クラシックホテル、登録有形文化財宿のほかにも、日本全国の個性豊かな温泉宿やリゾートホテルをご紹介しています。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/japan-classic-hotel-association-heritage-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🏛️ 日本クラシックホテルの会加盟宿
            </Link>
            <Link
              href="/taisho-roman-showa-modern-art-deco-hotel-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🎨 大正ロマン＆アールデコ建築宿
            </Link>
            <Link
              href="/tangible-cultural-property-sukiya-carpenter-ryokan-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🪵 登録有形文化財・宮大工の宿
            </Link>
            <Link
              href="/former-aristocrat-zaibatsu-imperial-villa-resort-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              👑 旧華族・旧財閥別邸ステイ
            </Link>
            <Link
              href="/vories-frank-lloyd-wright-architecture-resort-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              📐 巨匠建築・ヴォーリズ＆ライト宿
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
console.log('All 5 pages successfully generated!');
