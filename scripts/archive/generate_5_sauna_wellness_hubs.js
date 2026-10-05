const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const pages = [
  {
    slug: 'barrel-sauna-wood-stove-nature-totonoi-resort-stay',
    title: '本格バレルサウナ＆薪ストーブ宿完全ガイド【大自然森林浴と湖畔ダイブ】',
    description: '本格バレルサウナ、薪ストーブの柔らかい熱、セルフロウリュ、湖畔ダイブや清流クールダウンが叶う大自然サウナリゾートを特集。森林外気浴で極上のディープリラックスへ。',
    heroTag: '本格バレルサウナ・薪ストーブ特化',
    leadTitle: '薪のはぜる音と森の芳香。大自然と一体化する本格バレルサウナステイ',
    leadText: '円筒形の樽型構造が生み出す熱対流と、パチパチとはぜる薪ストーブの柔らかな熱。天然木の香りに包まれながらセルフロウリュを楽しんだ後は、目の前の湖や清流へダイブ、あるいは原生林を渡る風を肌で感じる外気浴デッキへ。現代の喧騒から完全に解き放たれ、五感が研ぎ澄まされる至福のネイチャーサウナ体験をお届けします。',
    sections: [
      {
        key: 'barrel_sauna_forest_stay',
        badge: '森の樽型サウナ＆薪火の温もり',
        intro: '木々の合間に佇む樽型のバレルサウナ。円形壁面が熱と蒸気を効率的に循環させ、天井から降り注ぐ極上のロウリュ蒸気を体感できます。薪ストーブならではの遠赤外線の優しい温もりが体の芯まで染み渡ります。'
      },
      {
        key: 'lakeside_sauna_tent_stay',
        badge: '湖畔ダイブ＆清流クールダウン',
        intro: '火照った体を冷水浴としてそのまま湖や清流へ。天然のシングル水温や澄み切った伏流水に身を委ね、インフィニティチェアで木漏れ日を見上げながらととのう、自然派サウナー憧れのワイルドな体験が待っています。'
      },
      {
        key: 'hokkaido_forest_sauna_stay',
        badge: '本場フィンランド式・白樺ヴィヒタ',
        intro: '北の大地・北海道をはじめとする冷涼な森のリゾート。生白樺の枝葉を束ねたヴィヒタで全身を叩いて血行を促進し、天然アロマオイルの蒸気に包まれる本格的な北欧流サウナリトリートを満喫できます。'
      }
    ],
    faq: [
      {
        q: 'バレルサウナとはどのような特徴がありますか？',
        a: '樽型（バレル）の形状により角がないため、発生したロウリュの熱気・蒸気が部屋全体を円滑に循環し、温度ムラが少なく全身を均一に温めることができます。木の香りと温もりをダイレクトに味わえるのも大きな魅力です。'
      },
      {
        q: '水着の着用は必要ですか？',
        a: '男女共用の屋外バレルサウナや湖畔テントサウナの場合、水着やサウナポンチョ・サウナハットの着用が必要な施設が一般的です。客室専用や貸切サウナの場合は施設ごとの規定をご確認ください。'
      },
      {
        q: 'サウナ初心者でも薪ストーブサウナを楽しめますか？',
        a: 'スタッフが薪のくべ方やロウリュのコツを丁寧にレクチャーしてくれる施設が多く、初心者でも安心して楽しめます。電気ストーブにはない柔らかな輻射熱は息苦しさが少なく、初心者の方にも心地よく過ごせます。'
      }
    ]
  },
  {
    slug: 'panoramic-view-sauna-fuji-ocean-lake-resort-stay',
    title: '富士山・海・夜景パノラマ絶景サウナ宿完全ガイド【展望ととのいテラス】',
    description: '雪化粧の富士山、どこまでも広がる水平線、きらめく都市の摩天楼夜景を一望するパノラマビューサウナを特集。絶景とともに外気浴デッキでととのう非日常のスパリゾート。',
    heroTag: 'パノラマ絶景サウナ特化',
    leadTitle: '視界一面に広がる富士・蒼海・摩天楼。絶景と共鳴するととのいリゾート',
    leadText: 'サウナ室の大きなピクチャーウィンドウ越しに望む霊峰富士の威容、夕暮れに茜色へ染まる大海原、あるいは眼下にきらめく大都市の摩天楼夜景。ただ汗を流すだけでなく、圧倒的なロケーションの美しさに心を奪われながら迎える外気浴は、まさに極上のトリップ。眺望と癒しが究極の調和を奏でる、全国のパノラマ絶景サウナホテルへご案内します。',
    sections: [
      {
        key: 'fuji_view_infinity_sauna_stay',
        badge: '霊峰富士一望・天空のサウナ',
        intro: '山中湖・河口湖畔や富士山麓の高原に位置する絶景サウナ。サウナ室の窓一面に堂々たる富士山が迫り、澄み渡る高原の清涼な空気の中でととのう贅沢。富士の湧水を使用した水風呂との相性も抜群です。'
      },
      {
        key: 'ocean_sunset_sauna_stay',
        badge: '大海原と夕陽・潮風の外気浴',
        intro: '相模湾、太平洋、瀬戸内海の断崖やビーチサイドに建つオーシャンサウナ。波の音をBGMに水平線を眺め、黄金色のサンセットに包まれながらの外気浴デッキ。全身で潮風を感じる開放感は格別です。'
      },
      {
        key: 'skyscrapers_nightview_sauna_stay',
        badge: '摩天楼夜景・都市型ラグジュアリースパ',
        intro: '高層ホテルの最上階スパに設けられた展望サウナ。眼下に広がるメガロポリスの光の海を眺めながらのアウフグースや冷水浴。都会の真ん中で忙しい日常を完全にリセットできるエグゼクティブな癒しです。'
      }
    ],
    faq: [
      {
        q: '絶景サウナのベストな時間帯はいつですか？',
        a: '富士山ビューは空気が澄み渡る早朝の「紅富士」や日中、オーシャンビューは夕暮れのサンセットタイム、都市型ホテルは煌びやかな夜景が広がるナイトタイムが最もドラマチックでおすすめです。'
      },
      {
        q: '外気浴スペースにリクライニングチェア（ととのい椅子）は完備されていますか？',
        a: '特集している多くの施設では、インフィニティチェアや木製リクライニングベッドが絶景を正面に望む特等席に配置されており、最高のビューポジションでととのうことができます。'
      },
      {
        q: '日帰り利用も可能ですか、それとも宿泊者限定ですか？',
        a: '一部の施設は日帰りスパとして利用可能ですが、混雑のない早朝や夕暮れのプライムタイムをゆったり満喫できる宿泊での滞在が圧倒的におすすめです。'
      }
    ]
  },
  {
    slug: 'pure-natural-spring-water-bath-totonoi-onsen-stay',
    title: '地下天然水・飲める名水掛け流し水風呂宿完全ガイド【しきじ流・極上の羽衣】',
    description: '「サウナの聖地しきじ」で知られる静岡の天然水水風呂や、阿蘇・北アルプスの名水百選伏流水を惜しげもなく掛け流す名宿を特集。肌に吸い付くまろやかな水質と天然の羽衣。',
    heroTag: '天然水・名水水風呂特化',
    leadTitle: 'カルキ臭ゼロ、肌を優しく包み込む「飲める名水」。奇跡の水風呂ステイ',
    leadText: '「サウナの良し悪しは水風呂で決まる」と言われるサウナの世界。富士山の雪解け水、阿蘇の大自然が磨いた伏流水、北アルプス山麓の清らかな湧水など、ミネラルを豊富に含んだ地下天然水を贅沢にオーバーフローさせる極上の水風呂。肌を刺すような冷たさがなく、まるでシルクの羽衣をまとったかのようにまろやかに体を包み込む、本物の名水ととのいをご堪能ください。',
    sections: [
      {
        key: 'shizuoka_shikiji_style_spring_stay',
        badge: '富士の恵み・駿河湾沿岸の伏流水',
        intro: 'サウナ愛好家の聖地として名高い静岡エリア。富士山や南アルプスから数十年の歳月をかけて湧き出る地下天然水は、軟水で飲用も可能。蛇口からドバドバと注がれる清純な水風呂で、極上の浮遊感とととのいを体感できます。'
      },
      {
        key: 'kurokawa_aso_pure_water_stay',
        badge: '阿蘇伏流水・名水百選のシングル＆秘湯',
        intro: '阿蘇カルデラの壮大な森が育んだ名水百選の湧水群。熊本・黒川や阿蘇の山間に佇む名旅館では、キリリと冷えた天然水掛け流し水風呂と、良質な硫黄泉や炭酸水素塩泉の温冷交代浴が至福の領域へ導きます。'
      },
      {
        key: 'nagano_alps_pure_spring_stay',
        badge: '北アルプス雪解け水・安曇野清流クールダウン',
        intro: '白馬や安曇野、八ヶ岳山麓に位置する信州の宿。雪解けのピュアな天然水がそのまま注がれる水風呂は、冷たさの中に甘みすら感じる純度の高さ。爽快な高原の森林外気浴とのコンビネーションは格別です。'
      }
    ],
    faq: [
      {
        q: '天然水の水風呂は一般的な水道水の水風呂と何が違いますか？',
        a: '塩素（カルキ）による刺激や臭いが一切なく、ミネラルバランスに優れているため肌触りが非常に柔らかく滑らかです。「いつまでも入っていたくなる」「水に溶け込むような感覚」と表現されるほどの違いがあります。'
      },
      {
        q: '水温（水風呂の温度）はどのくらいですか？',
        a: '地下水は年間を通じて14〜17度前後の安定した水温を保つ施設が多く、過度な冷たさを感じさせずにしっかりとクールダウンできます。一部施設では10度前後のシングル水温を楽しめる場合もあります。'
      },
      {
        q: 'サウナ後の水分補給としてその天然水を飲むことはできますか？',
        a: '飲用許可を取得している施設では、水風呂の注ぎ口や専用給水所から汲みたての天然水をそのまま飲むことができます。体の中からピュアな名水で満たされる感動を味わえます。'
      }
    ]
  },
  {
    slug: 'herbal-steam-ayurveda-detox-wellness-stay',
    title: '薬草ハーブ蒸し＆本格アーユルヴェーダ宿完全ガイド【酵素風呂・体内浄化】',
    description: '和草ハーブやよもぎスチームサウナ、本格アーユルヴェーダ（シロダーラ）、米ぬか酵素風呂、発酵薬膳料理で心身をリセットするウェルネスステイ。極上のデトックスリトリート。',
    heroTag: '薬草蒸し・アーユルヴェーダ特化',
    leadTitle: '大地の薬草と発酵の力で芯から温まる。五感を癒すデトックス＆ウェルネス旅',
    leadText: '古来より日本に自生するよもぎや和ハーブの蒸気に包まれる薬草スチームサウナ、数千年の歴史を持つインド・スリランカ伝統医学に基づくアーユルヴェーダの温かいオイルトリートメント、そして微生物の発酵熱で全身を温める米ぬか酵素風呂。単なるリラクゼーションを超え、体内に溜まった老廃物を排出し、本来の生命力と自然治癒力を呼び覚ます大人のヘルスツーリズムをお届けします。',
    sections: [
      {
        key: 'japanese_herb_mist_sauna_stay',
        badge: '和草ハーブ＆よもぎスチームサウナ',
        intro: '地元で採取された新鮮なよもぎ、ドクダミ、クマザサなどの薬草を贅沢に蒸し上げたミストサウナ。低温多湿の柔らかな蒸気が呼吸器やお肌を潤し、生薬の有効成分が皮膚からじんわり浸透して冷えや疲労を根本からケアします。'
      },
      {
        key: 'ayurveda_oil_spa_retreat_stay',
        badge: '本格アーユルヴェーダ＆シロダーラ',
        intro: '体質（ドーシャ）診断に基づき、厳選された温かい薬草オイルを額のチャクラに静かに垂らし続ける「シロダーラ（脳のマッサージ）」や全身トリートメント。深い瞑想状態へと導かれ、頭の芯までクリアに解き放たれます。'
      },
      {
        key: 'enzyme_fermentation_bath_stay',
        badge: '米ぬか酵素風呂＆発酵薬膳スパ',
        intro: '電気やガスを使わず、微生物の発酵熱だけで60度前後に温まる米ぬか酵素風呂。ふかふかのぬかに全身を埋めることで短時間で大量発汗。腸内環境を整える発酵薬膳料理やファスティングプランと組み合わせた体内リセットが叶います。'
      }
    ],
    faq: [
      {
        q: '高温ドライサウナが苦手な人でも楽しめますか？',
        a: 'はい、薬草スチームやハーブサウナは45〜50度前後のマイルドな中温・高湿度設定のため、息苦しさがなく、ドライサウナの熱風が苦手な方や女性・シニア層にも大変心地よくご利用いただけます。'
      },
      {
        q: 'アーユルヴェーダのシロダーラを受ける際の注意点はありますか？',
        a: '頭皮や髪に温かい薬用オイルをたっぷり使用するため、施術後は専用のハーブシャンプーで洗い流すか、当日は激しい運動や飲酒を避けて静かに休息を取ることでトリートメントの効果を最大限に高められます。'
      },
      {
        q: '一人旅やリフレッシュ休暇にも向いていますか？',
        a: '非常に適しています。静かな環境で自分自身の心と身体に向き合う「セルフケア」「ウェルネスリトリート」として、日常のストレスを解消したい働く女性や男性の一人旅に大人気です。'
      }
    ]
  },
  {
    slug: 'private-room-sauna-luxury-villa-retreat-stay',
    title: '客室専用サウナ＆プライベートヴィラ宿完全ガイド【完全貸切・ととのいスイート】',
    description: '客室専用バレルサウナ、テラス付き水風呂、スイートルーム完備のプライベートサウナ付き宿を厳選。誰の目も気にせず24時間好きな時に自分だけのリズムでととのう至高の贅沢。',
    heroTag: '客室専用サウナ・貸切ヴィラ特化',
    leadTitle: '誰の視線も気にせず、24時間好きな時に。客室専用サウナという究極のプライベート',
    leadText: 'ドアを開ければ、そこは自分たちだけの完全プライベートサウナ。好みの温度へのセッティング、好きなタイミングでのセルフロウリュ、テラスに備えられた専用水風呂への直行、そしてバスローブのままベッドやテラスチェアへダイブ。順番待ちもマナーの気兼ねも一切ない、サウナーにとっての究極の贅沢がここにあります。大切なパートナーや友人、家族と過ごす至福のステイへご案内します。',
    sections: [
      {
        key: 'room_barrel_sauna_villa_stay',
        badge: '客室テラス専用バレルサウナ',
        intro: 'ヴィラの専用ガーデンやテラスに設置されたプライベートバレルサウナ。自然の景色を独り占めしながら、いつでも何度でもロウリュを満喫。ウッドデッキに直結したチラー付き水風呂とリクライニングチェアで完全な解放感を味わえます。'
      },
      {
        key: 'private_spa_suite_stay',
        badge: 'ラグジュアリースイート＆サウナ',
        intro: '客室内にドライサウナやロウリュ対応スチームサウナをビルトインした最高級客室。源泉かけ流しの客室露天風呂と水風呂が並んで配置され、お部屋から一歩も出ることなく完璧な温冷交代浴が完結します。'
      },
      {
        key: 'charter_cottage_sauna_bbq_stay',
        badge: '一棟貸切コテージ＆サウナBBQ',
        intro: '森の中やオーシャンフロントに佇む一棟貸切のプライベートヴィラ。サウナでしっかりと汗を流してととのった後は、テラスで地元ブランド牛やシーフードのBBQ、クラフトビールを楽しむ最高のアウトドアリゾートステイです。'
      }
    ],
    faq: [
      {
        q: '客室サウナは深夜や早朝でも利用できますか？',
        a: '客室専用サウナの多くは24時間いつでも自由に入浴可能です（一部の薪ストーブタイプを除く電気ヒーター式サウナの場合）。夜空の星を眺めながら、あるいは朝一番の目覚ましサウナを気兼ねなく楽しめます。'
      },
      {
        q: 'サウナの温度は自由に調整できますか？',
        a: '多くの施設で80度〜100度前後まで好みの温度を設定でき、備え付けのアロマ水でセルフロウリュを行うことで、体感温度や湿度を自分好みにカスタマイズできます。'
      },
      {
        q: 'カップルや夫婦、家族で一緒に入れますか？',
        a: '完全な客室専用スペースのため、水着を着てカップルやご夫婦、ファミリーで一緒にサウナ・水風呂・外気浴を楽しむことができます。記念日や特別な旅行の思い出作りに最適です。'
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
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-emerald-900/10 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold tracking-wider">
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
                      <h3 className="font-bold text-stone-900 text-lg mb-2 line-clamp-2 font-serif group-hover:text-emerald-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '本格サウナと心地よい水風呂、極上の外気浴で心身が深く整うリトリートをご満喫いただけます。'}
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
                        className="inline-flex items-center gap-1 px-4 py-2 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 rounded-lg text-xs font-bold transition"
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
                <span className="text-emerald-700 font-serif font-black text-lg">Q.</span>
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
        <header className="bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg border border-emerald-800/30">
          <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ${page.heroTag}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-emerald-50">
            ${page.title}
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl">
            ${page.leadText}
          </p>
        </header>

        {/* メインコンテンツセクション */}
        ${sectionsCode}

        {/* よくある質問 FAQ */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-emerald-900/10 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-2">
            <span className="w-2 h-7 bg-emerald-700 rounded-full inline-block"></span>
            よくある質問・サウナリゾートの楽しみ方
          </h2>
          <div className="space-y-4">
            ${faqsCode}
          </div>
        </section>

        {/* 関連リンク */}
        <section className="bg-stone-200/70 rounded-2xl p-6 md:p-8 text-center border border-stone-300">
          <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">
            他のサウナ＆ウェルネス・癒しの宿を探す
          </h3>
          <p className="text-stone-600 text-sm mb-6">
            バレルサウナ、絶景パノラマ、名水水風呂、ハーブ蒸し、完全プライベートサウナ付き客室など、全国の極上サウナ旅をご提案します。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/barrel-sauna-wood-stove-nature-totonoi-resort-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-emerald-100 border border-stone-300 transition shadow-sm"
            >
              🪵🔥 本格バレルサウナ＆薪ストーブ
            </Link>
            <Link
              href="/panoramic-view-sauna-fuji-ocean-lake-resort-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-emerald-100 border border-stone-300 transition shadow-sm"
            >
              🗻🌅 富士・海・夜景パノラマサウナ
            </Link>
            <Link
              href="/pure-natural-spring-water-bath-totonoi-onsen-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-emerald-100 border border-stone-300 transition shadow-sm"
            >
              💧🧖‍♂️ 地下天然水・飲める名水水風呂
            </Link>
            <Link
              href="/herbal-steam-ayurveda-detox-wellness-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-emerald-100 border border-stone-300 transition shadow-sm"
            >
              🌿🧘‍♀️ 薬草蒸し＆アーユルヴェーダ
            </Link>
            <Link
              href="/private-room-sauna-luxury-villa-retreat-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-emerald-100 border border-stone-300 transition shadow-sm"
            >
              🚪✨ 客室専用サウナ＆貸切ヴィラ
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

console.log('All 5 sauna wellness hubs successfully generated!');
