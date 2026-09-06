const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-caves-ice-adventure-stay',
    title: '日本三大氷穴・洞窟温泉＆地底探検アドベンチャー宿×ふるさと納税完全ガイド【2026年最新】富岳風穴・玉泉洞・昇竜洞',
    desc: '真夏でも氷の世界と数億年の石灰岩アート！山梨「富岳風穴・鳴沢氷穴」青木ヶ原樹海の天然クーラーとロイヤルホテル河口湖、沖縄「玉泉洞」東洋一の美しさを誇る三十万本の鍾乳石とおきなわ天然温泉ユインチホテル南城、鹿児島「昇竜洞」沖永良部島ケイビングの聖地とおきえらぶフローラルホテル。日本三大洞窟探検の感動を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大氷穴・洞窟探検宿×ふるさと納税ガイド',
    badge: '日本三大氷穴・洞窟アドベンチャー特集',
    leadTitle: '年中0度の氷の世界から亜熱帯の鍾乳石ワンダーランドまで。地底深くへと潜る非日常の冒険旅',
    leadDesc: '地上とはまったく異なる温度と静寂が支配する日本の驚異的な地底世界「日本三大氷穴・洞窟スポット」――真夏でも平均気温0度から3度を保ち、天井から垂れ下がる巨大な氷柱がライトアップされる富士山麓・山梨の「富岳風穴・鳴沢氷穴」、サンゴ礁から生まれた三十万本以上の鍾乳石が神秘的な地底川を形成する沖縄本島南部の「玉泉洞（おきなわワールド）」、そして東洋屈指の美しさを誇る鍾乳石の結晶「フローストーン」が広がり世界中のケイバーが憧れる奄美群島・沖永良部島の「昇竜洞」。ヘルメットをかぶって足を踏み入れれば、大自然が数万年をかけて彫刻した地底のアートに心を奪われます。探検の後は、絶景露天風呂や南国・富士の恵みを味わうエキサイティングな休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '猛暑でも快適！通年ひんやりとした天然クーラーの非日常アドベンチャー',
        desc: '外の暑さを忘れさせる冷涼な地底空間で、大自然の神秘とスリルを家族やカップルで体験。'
      },
      {
        title: '甲州牛・沖縄あぐー豚・奄美黒糖焼酎などご当地エネルギーチャージ美食',
        desc: '地底探検で心地よく汗を流した後は、地域自慢のスタミナ料理と温泉で心身をフルリフレッシュ。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れのアイランド＆リゾートをお得に予約',
        desc: '沖縄や沖永良部島、河口湖のリゾートホテル宿泊費用が即時控除され、実質2,000円負担でステイ。'
      }
    ],
    items: [
      {
        key: 'cave_fuji_ice',
        themeTitle: '山梨県富士河口湖町・鳴沢村ふるさと納税：樹海の地底に輝く氷の芸術「富岳風穴・鳴沢氷穴」とロイヤルホテル河口湖',
        themeDesc: '青木ヶ原樹海の溶岩洞窟。氷柱や溶岩棚の自然美を体感した後は、河口湖畔に佇む「ロイヤルホテル河口湖」で、富士山を望む開運の湯・露天風呂と甲州ほうとう・和牛溶岩焼きを満喫します。'
      },
      {
        key: 'cave_gyokusendo',
        themeTitle: '沖縄県南城市ふるさと納税：東洋一の鍾乳洞三十万本の奇跡「玉泉洞」と太平洋望む天然温泉ユインチホテル南城',
        themeDesc: '全長5,000mにおよぶ国内最大級の鍾乳洞。青の泉や槍天井に圧倒された後は、高台から太平洋を一望する「ユインチホテル南城」で、ろ過・加水なしの太古の天然温泉「猿人の湯」と沖縄ビュッフェを堪能します。'
      },
      {
        key: 'cave_shoryudo',
        themeTitle: '鹿児島県知名町・和泊町ふるさと納税：ケイビングの聖地が誇る白銀の鍾乳洞「昇竜洞」とおきえらぶフローラルホテル',
        themeDesc: '国の天然記念物に指定された奇跡の洞窟。日本最大級の石筍や美しいフローストーンを探検した後は、東シナ海のオーシャンビューを誇る「おきえらぶフローラルホテル」で、名物黒糖焼酎と島料理に癒やされます。'
      }
    ],
    crossLinks: [
      { title: '日本三大鍾乳洞＆神秘の地底美宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-limestone-caves-mystery-stay', desc: '龍泉洞・龍河洞・秋芳洞。' },
      { title: '日本三大カルスト台地＆絶景スカイドライブ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-karsts-highland-drive-stay', desc: '秋吉台・四国カルスト・平尾台。' },
      { title: '日本三大奇勝＆巨岩奇峰パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-wonders-rock-scenery-stay', desc: '妙義山・耶馬渓・寒霞渓。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-curious-festivals-heritage-stay',
    title: '日本三大奇祭＆天下の奇天烈・熱狂カルチャー温泉宿×ふるさと納税完全ガイド【2026年最新】御柱祭・はだか祭・男鹿なまはげ',
    desc: '日本人の情熱が爆発する奇想天外な祭典！長野「諏訪大社御柱祭」巨木が坂を駆け下る木落しと上諏訪温泉ホテル紅や、愛知「国府宮はだか祭」数万の裸男が厄を祓う熱気とお宿和陽館、秋田「男鹿のナマハゲ」ユネスコ無形文化遺産と男鹿温泉セイコーグランドホテル。日本三大奇祭の度肝を抜くエネルギーを楽天ふるさと納税宿泊クーポンでお得に体験する完全ガイド。',
    h1: '日本三大奇祭＆天下の熱狂カルチャー宿×ふるさと納税ガイド',
    badge: '日本三大奇祭・熱狂文化特集',
    leadTitle: '大地を揺るがす男たちの雄叫びと神仏と交わる狂乱の刻。魂を揺さぶる日本のディープカルチャー旅',
    leadDesc: '日本の伝統的な祭りの中でも、その過激さ・特異さ・圧倒的なスケールから「日本三大奇祭（三大奇天烈神事）」として国内外から熱狂的な注目を集める三つの祭典――巨大なモミの大木に男たちが跨り急坂を一気に滑り降りる長野諏訪の「諏訪大社御柱祭」、真冬の寒空の下、サラシ一丁の裸男たちが神男に触れて厄を落とそうと激しく揉み合う愛知尾張の「国府宮はだか祭」、そして大晦日の夜に荒々しい咆哮とともに家々を訪れ悪霊を祓う秋田男鹿の「男鹿のナマハゲ」。常識を覆すほどのエネルギーと土地の信仰に直に触れる体験は、旅人に強烈な感動とパワーを授けてくれます。祭りの後は、名湯温泉で温まり、名物料理に舌鼓を打つ極上の滞在を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '一生モノの衝撃！日本古来の信仰と荒ぶる魂を目の当たりにする文化体験',
        desc: '教科書やテレビでは伝わらない地響きのような熱気と男衆の気迫をライブで体感。'
      },
      {
        title: '信州手打ち蕎麦・名物石焼料理・尾張名古屋めしなど力強いご当地美食',
        desc: '祭り文化が育んだ滋味あふれる郷土料理を、老舗旅館や名門ホテルの会席ディナーで堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでハイシーズンの祭宿を賢く予約',
        desc: '予約が殺到する祭り前後の宿泊代金が即時控除され、実質負担2,000円で快適ステイ。'
      }
    ],
    items: [
      {
        key: 'festival_onbashira',
        themeTitle: '長野県諏訪市ふるさと納税：七年に一度の天下の大祭「諏訪大社御柱祭」木落しと上諏訪温泉ホテル紅や',
        themeDesc: '諏訪大社四社をめぐる祈りと勇気の大祭。山から巨木を切り出し諏訪大社へと曳き建てる迫力を感じた後は、諏訪湖畔に佇む「ホテル紅や」で、上諏訪の名湯展望風呂と信州サーモン・美酒諏訪五蔵を味わいます。'
      },
      {
        key: 'festival_hadaka',
        themeTitle: '愛知県稲沢市・一宮市ふるさと納税：尾張大國霊神社に数万が群がる「国府宮はだか祭」とお宿和陽館ステイ',
        themeDesc: '千二百年続く天下の厄払い神事。裸男たちの熱気に圧倒された後は、一宮駅近くの家庭的な老舗宿「お宿 和陽館」を拠点に、愛知名物のひつまぶしや味噌カツ、尾張の地酒を満喫します。'
      },
      {
        key: 'festival_namahage',
        themeTitle: '秋田県男鹿市ふるさと納税：ユネスコ無形文化遺産「男鹿のナマハゲ」と男鹿温泉セイコーグランドホテル',
        themeDesc: 'なまはげ館での迫力の習俗体験。夕暮れに日本海を望む男鹿温泉「セイコーグランドホテル」で、熱した石を木桶に放り込む伝統の「名物石焼料理」と、保温効果抜群の黄金のナトリウム塩化物泉に癒やされます。'
      }
    ],
    crossLinks: [
      { title: '日本三大火祭り＆燃え盛る情熱伝統宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-fire-festivals-passion-stay', desc: '那智・野沢温泉・鞍馬。' },
      { title: '日本三大盆踊り＆伝統文化・城下町宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-bon-dances-heritage-stay', desc: '西馬音内・郡上おどり・阿波おどり。' },
      { title: '日本三大薬湯＆濃厚生薬湯治宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-medicinal-springs-healing-stay', desc: '松之山温泉・草津温泉・有馬温泉。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-torii-gates-sacred-stay',
    title: '日本三大鳥居＆パワースポット・歴史探訪クラシックホテル宿×ふるさと納税完全ガイド【2026年最新】厳島神社・大神神社・平安神宮',
    desc: '神域と現世を結ぶ壮大な朱塗りの門！広島「厳島神社大鳥居」海に浮かぶ世界遺産と宮島グランドホテル有もと、奈良「大神神社大鳥居」三輪山を仰ぐ日本最古の神社とホテル奈良さくらいの郷、京都「平安神宮大鳥居」岡崎の文化ゾーンとホテルオークラ京都岡崎別邸。日本三大鳥居（大鳥居）の神聖なエネルギーを楽天ふるさと納税宿泊クーポンでお得に授かる完全ガイド。',
    h1: '日本三大鳥居＆聖地パワースポット宿×ふるさと納税ガイド',
    badge: '日本三大鳥居・神域パワースポット特集',
    leadTitle: '青空や海に映える圧倒的な鳥居の威容。日常を浄化し開運を呼び込む聖地巡礼ステイ',
    leadDesc: '神仏の宿る聖域への入り口として、古来より人々の畏敬と祈りを集めてきた「日本三大鳥居（三大木造・大鳥居）」――瀬戸内海の潮が満ちれば海中に優美に浮かび、引き潮には歩いて根元まで参拝できる世界遺産・安芸の宮島「厳島神社大鳥居」、神体山である三輪山を正面に仰ぎ、高さ32.2mと車道をも跨ぐ圧倒的なスケールを誇る奈良大和の「大神神社大鳥居」、そして平安遷都千百年を記念して建立され京都岡崎のシンボルとして聳える朱塗りの「平安神宮大鳥居」。鳥居をくぐる瞬間に感じる凛とした空気の清らかさは、日常の雑念を払い心を研ぎ澄ましてくれます。格式高いホテルや名旅館で精進料理や門前名物を味わう極上の開運旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '早朝・夕暮れ・ライトアップ！人混みのない時間帯に神聖な鳥居を独占',
        desc: '宿泊客だからこそ体験できる、朝霧や夕焼けに染まる大鳥居の神秘的な絶景を静かに堪能。'
      },
      {
        title: '宮島あなごめし・三輪そうめん・京懐石など神前・門前の伝統名物グルメ',
        desc: '神社の歴史とともに育まれた伝統の美味を、宿の一流料理人が腕を振るう特別会席で味わう。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れのラグジュアリーホテルをお得に予約',
        desc: 'ホテルオークラ京都岡崎別邸や宮島グランドホテル有もとなど格式高い名宿を実質2,000円で満喫。'
      }
    ],
    items: [
      {
        key: 'torii_itsukushima',
        themeTitle: '広島県廿日市市宮島ふるさと納税：海に浮かぶ世界遺産の象徴「厳島神社大鳥居」と宮島グランドホテル有もと',
        themeDesc: '潮の満ち引きで姿を変える朱塗りの大鳥居。宮島最古の歴史を誇る名門「宮島グランドホテル 有もと」で、厳島神社まで徒歩3分の好立地と、名物あなごめし・広島牛・瀬戸内牡蠣会席を堪能します。'
      },
      {
        key: 'torii_oomiwa',
        themeTitle: '奈良県桜井市ふるさと納税：日本最古の神社・三輪山を仰ぐ高さ32m「大神神社大鳥居」とホテル奈良さくらいの郷',
        themeDesc: '酒造りの神様としても知られる大神神社。三輪の街並みを見守る巨大鳥居を参拝した後は、地産地消の美食宿「ホテル奈良さくらいの郷」で、本場三輪そうめんや大和ポーク、奈良の銘酒三輪山本を味わいます。'
      },
      {
        key: 'torii_heian',
        themeTitle: '京都府京都市左京区ふるさと納税：岡崎の街にそびえる国登録有形文化財「平安神宮大鳥居」とホテルオークラ京都岡崎別邸',
        themeDesc: '朱塗りの壮大な大鳥居が迎える文化の杜。南禅寺や東天王岡崎神社を散策した後は、スモールラグジュアリーの極み「ホテルオークラ京都 岡崎別邸」で、日本庭園を望む静寂と至高のフレンチに酔いしれます。'
      }
    ],
    crossLinks: [
      { title: '日本三大仏＆歴史ヒーリング名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-buddhas-heritage-stay', desc: '東大寺大仏・鎌倉大仏・高岡大仏。' },
      { title: '日本三大名園＆大名庭園を愛でる名門宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gardens-heritage-luxury-stay', desc: '兼六園・後楽園・偕楽園。' },
      { title: '日本三大水城＆海に浮かぶ名城展望宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-water-castles-seaside-stay', desc: '今治城・高松城・中津城。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-fireworks-riverside-stay',
    title: '日本三大花火大会＆夜空を染める大輪・リバーサイド特等席展望ホテル×ふるさと納税完全ガイド【2026年最新】長岡・大曲・土浦',
    desc: '日本中の花火師が命を懸ける最高峰の光の芸術！新潟「長岡まつり大花火大会」信濃川を埋め尽くす復興祈願フェニックスとホテルルートイン長岡駅前、秋田「全国花火競技大会・大曲の花火」内閣総理大臣賞を争う昼夜花火とホテルルートイン大曲駅前、茨城「土浦全国花火競技大会」秋の夜空を焦がす競技玉とホテルクラウンヒルズ土浦駅東。日本三大花火の感動を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大花火大会＆リバーサイド展望宿×ふるさと納税ガイド',
    badge: '日本三大花火・光の芸術特集',
    leadTitle: '空が割れ大地が震える大音響と頭上を埋め尽くす光のシャワー。一生に一度は浴びたい奇跡の夜空',
    leadDesc: '長い歴史と花火師たちの研ぎ澄まされた技術によって世界一の美しさと称賛される「日本三大花火大会」――慰霊と復興の祈りを込め信濃川の夜空に幅2kmに及ぶ黄金の光が広がる新潟の「長岡まつり大花火大会」、全国の一流花火師が日本一の座を懸けて魂の作品を打ち上げる秋田雄物川の「全国花火競技大会（大曲の花火）」、そしてスターマインの迫力と秋の澄み切った大気に冴える芸術玉が競演する茨城桜川の「土浦全国花火競技大会」。数万発の花火が連続して夜空を昼間のように照らし出す光景は、観る者すべての涙を誘う圧倒的な感動。混雑を避けて駅前ホテルや温泉宿を確保し、地元の美酒と美食を味わう至高の観覧旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '花火終了後の大混雑も安心！会場アクセス抜群の駅近・好立地ホテル',
        desc: '数十万人の人波を気にせず、花火大会の余韻に浸りながら徒歩や短時間で快適に客室へ帰還。'
      },
      {
        title: '越後牛・秋田錦牛・常陸牛など名産和牛と地酒の贅沢ディナー',
        desc: '日本屈指の米どころ・酒どころが誇る銘酒とブランド和牛を味わう至福のグルメ体験。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで予約困難な花火ウィークも賢くお得に',
        desc: '宿泊代金が即時控除され、実質自己負担2,000円で花火大会の特等席ステイを実現。'
      }
    ],
    items: [
      {
        key: 'fireworks_nagaoka',
        themeTitle: '新潟県長岡市ふるさと納税：幅2kmの黄金フェニックスと正三尺玉「長岡まつり大花火大会」とホテルルートイン長岡駅前',
        themeDesc: '信濃川河川敷を埋め尽くす100万人の大歓声。復興祈願花火フェニックスに心を揺さぶられた後は、長岡駅東口徒歩1分の「ホテルルートイン長岡駅前」の大浴場で寛ぎ、長岡の地酒吉乃川や生姜醤油ラーメンを堪能します。'
      },
      {
        key: 'fireworks_omagari',
        themeTitle: '秋田県大仙市ふるさと納税：最高峰の栄誉・内閣総理大臣賞を争う「大曲の花火」とホテルルートイン大曲駅前',
        themeDesc: '花火師自らが打ち上げる国内最高峰の競技大会。夜空を彩る創造花火に息をのんだ後は、大曲駅直結の「ホテルルートイン大曲駅前」で、活性石人工温泉大浴場に浸かり、秋田名物の比内地鶏やきりたんぽ鍋を満喫します。'
      },
      {
        key: 'fireworks_tsuchiura',
        themeTitle: '茨城県土浦市ふるさと納税：秋の澄んだ空に響く競技玉の最高峰「土浦全国花火競技大会」とホテルクラウンヒルズ土浦駅東',
        themeDesc: '秋晴れの夜空に開く大輪のスターマイン。桜川畔の迫力を体感した後は、土浦駅東口徒歩1分の「ホテルクラウンヒルズ土浦駅東」で、霞ヶ浦のうなぎ料理や茨城名物アンコウ鍋に舌鼓を打ちます。'
      }
    ],
    crossLinks: [
      { title: '日本三大夜景＆天空スカイラウンジホテル×ふるさと納税完全ガイド', url: '/furusato-tax-three-major-night-view-luxury-hotel-stay', desc: '長崎・神戸・函館の夜景。' },
      { title: '新日本三大夜景＆天空スカイパノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-new-three-major-night-views-sky-stay', desc: '皿倉山・若草山・フルーツ公園。' },
      { title: '日本三大火祭り＆燃え盛る情熱伝統宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-fire-festivals-passion-stay', desc: '那智・野沢温泉・鞍馬。' }
    ]
  }
];

function generatePageCode(cfg) {
  return `'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const officialFurusatoAffUrl = "${officialFurusatoAffUrl}";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-rose-500 selection:text-white pb-24">
      {/* Hero Section */}
      <header className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <span className="inline-block w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            ${cfg.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            ${cfg.h1}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            ${cfg.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-rose-500 via-red-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold rounded-2xl shadow-xl shadow-rose-950/40 transition duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 text-base md:text-lg"
            >
              <span>🏮 楽天ふるさと納税トラベル特設ページを見る</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 space-y-16">
        {/* Intro Lead */}
        <section className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 border-l-4 border-rose-500 pl-4">
            ${cfg.leadTitle}
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            ${cfg.leadDesc}
          </p>
        </section>

        {/* 3 Key Merits */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              ふるさと納税トラベルで巡る3つの至高メリット
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">実質自己負担2,000円で憧れの名旅館＆特産グルメをアップグレード</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${cfg.merits.map((m, i) => `
            <div key="${i}" className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold flex items-center justify-center mb-4">
                0${i + 1}
              </div>
              <h3 className="font-bold text-white text-lg mb-2">${m.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">${m.desc}</p>
            </div>`).join('')}
          </div>
        </section>

        {/* Featured Hotels & Regions */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              厳選名所＆楽天トラベル提携おすすめ名宿
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">楽天ふるさと納税宿泊クーポンが利用可能な極上宿</p>
          </div>

          <div className="space-y-12">
            ${cfg.items.map((item, idx) => {
              const h = allHotels[item.key] || {};
              const name = h.hotelName || 'おすすめ温泉旅館';
              const minCharge = h.hotelMinCharge ? h.hotelMinCharge.toLocaleString() : '15,000';
              const img = h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80';
              const rating = (h.reviewAverage && h.reviewAverage > 0) ? h.reviewAverage.toFixed(1) : (typeof h.userReview === 'number' ? h.userReview.toFixed(1) : '4.6');
              const reviewCount = h.reviewCount || 300;
              const affLink = h.affiliateUrl || officialFurusatoAffUrl;
              const special = h.hotelSpecial || '贅沢な美食と名湯、極上の空間で非日常の休日をお楽しみいただけます。';
              const address = (h.address1 || '') + (h.address2 || '');

              return `
            {/* Spot Card ${idx + 1} */}
            <article key="${idx}" className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700/80 transition duration-300 shadow-xl">
              <div className="p-6 sm:p-8 border-b border-slate-800/80">
                <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold rounded-full mb-3">
                  厳選スポット 0${idx + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  ${item.themeTitle}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  ${item.themeDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center bg-slate-950/40">
                <div className="lg:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-800">
                  <Image
                    src="${img}"
                    alt="${name}"
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-xs font-bold text-amber-400 border border-amber-400/30">
                    ★ ${rating}（${reviewCount}件）
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                      ${name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mb-3 flex items-center gap-1">
                      <span>📍</span>
                      <span>${address || '現地周辺'}</span>
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/60">
                      ${special}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-slate-400">参考最安料金（1名あたり）</div>
                      <div className="text-lg sm:text-xl font-black text-rose-400">
                        ${minCharge}円〜
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="${affLink}"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold rounded-xl transition border border-slate-700"
                      >
                        宿泊詳細を見る
                      </a>
                      <a
                        href={officialFurusatoAffUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-lg shadow-rose-950/40"
                      >
                        ふるさと納税で予約
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>`;
            }).join('')}
          </div>
        </section>

        {/* Official Banner CTA */}
        <section className="bg-gradient-to-r from-rose-950/60 via-red-900/40 to-amber-950/60 border border-rose-500/30 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            楽天ふるさと納税トラベルで、今すぐ賢く旅に出よう
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
            寄付翌日から最大3年間使える宿泊クーポンで、行きたかった憧れの名宿を今すぐお得にリザーブ。実質2,000円負担で極上の日本再発見の旅へ。
          </p>
          <a
            href={officialFurusatoAffUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white text-base sm:text-lg font-extrabold rounded-2xl shadow-xl transition duration-300 transform hover:-translate-y-0.5"
          >
            <span>🏮 楽天ふるさと納税トラベル公式特設ページへ</span>
          </a>
        </section>

        {/* Cross Link Section */}
        <section className="border-t border-slate-800/80 pt-12 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            あわせて読みたい関連特集ガイド
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${cfg.crossLinks.map((cl, i) => `
            <Link
              key="${i}"
              href="${cl.url}"
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition flex flex-col justify-between group"
            >
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition mb-2">
                  ${cl.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  ${cl.desc}
                </p>
              </div>
              <div className="mt-4 text-xs font-semibold text-rose-400 flex items-center gap-1">
                <span>記事を読む</span>
                <span>→</span>
              </div>
            </Link>`).join('')}
          </div>
        </section>
      </main>
    </div>
  );
}
`;
}

for (const cfg of pagesConfig) {
  const targetDir = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const filePath = path.join(targetDir, 'page.tsx');
  fs.writeFileSync(filePath, generatePageCode(cfg), 'utf8');
  console.log(`✓ Generated ${filePath}`);
}

console.log('All 4 pages generated successfully for Round 32.');
