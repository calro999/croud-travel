const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-secluded-canyon-isolated-onsen-stay',
    title: '秘境・渓谷の一軒宿×ふるさと納税完全ガイド【2026年最新】黒部峡谷・祖谷・みちのく深山の完全遮断リトリート',
    desc: '携帯の電波も届かない大自然の懐へ。黒部峡谷鉄道トロッコの終着点、日本三大秘境・祖谷のかずら橋とケーブルカー露天風呂、東北深山のブナ原生林に佇む秘湯一軒宿を楽天ふるさと納税宿泊クーポンでお得に予約する自然回帰の旅。',
    h1: '秘境・渓谷の一軒宿×ふるさと納税ガイド',
    badge: '秘境渓谷・深山一軒宿特集',
    leadTitle: '都会のノイズを完全に遮断。轟く渓流の音と原生林の静寂に還る至高の湯守宿',
    leadDesc: '深い峡谷を縫うように走るトロッコ列車や、切り立った断崖にかかる吊り橋を渡った先。日常のあらゆる喧騒や情報から切り離された「秘境の一軒宿」には、地球の鼓動を直接肌で感じる野生の贅沢があります。岩肌から滾々と湧き出る新鮮な自家源泉、木々のざわめきと野鳥のさえずり。楽天ふるさと納税を活用すれば、寄付額の最大30%が宿泊クーポンとして還元され、一生に一度は訪れたい憧れの秘境宿を賢くお得に予約できます。',
    merits: [
      {
        title: '俗世を離れた大峡谷の川床露天風呂やケーブルカー野天風呂',
        desc: '谷底へ向かう専用ケーブルカーで降りる秘湯露天風呂や、エメラルドグリーンの渓谷美を間近に臨む野天風呂。自然と一体化する圧倒的な開放感を味わえます。'
      },
      {
        title: '山菜・岩魚・ジビエなど、山の恵みと清流の幸を味わう山里料理',
        desc: '宿の主人が朝採りした旬の山菜やキノコ、炭火でじっくり香ばしく焼き上げる川魚の塩焼き。素朴でありながら身体の芯まで染み渡る滋味あふれる郷土会席です。'
      },
      {
        title: 'ふるさと納税で過疎や豪雪と戦う秘境自治体・名湯文化の維持に貢献',
        desc: '交通アクセスの厳しい秘境を維持し続ける地域の温泉文化やインフラ保全を寄付で応援しながら、実質自己負担2,000円でプレミアムな滞在を楽しめます。'
      }
    ],
    items: [
      {
        key: 'kurobe_canyon',
        themeTitle: '富山県黒部市ふるさと納税：黒部峡谷・宇奈月温泉からトロッコ列車で巡る険峰峡谷の一軒宿',
        themeDesc: '日本一深いV字峡谷として名高い黒部峡谷。トロッコ電車の車窓から望むエメラルドグリーンの黒部川と紅葉・新緑の断崖絶壁。峡谷沿いに湧く無色透明の名湯と、富山湾のキトキト鮮魚・白えび料理を堪能できます。'
      },
      {
        key: 'iya_canyon',
        themeTitle: '徳島県三好市ふるさと納税：日本三大秘境祖谷・かずら橋とケーブルカーで登る天空露天風呂',
        themeDesc: '平家落人伝説が息づく四国山地の奥座敷。宿専用のケーブルカーで山肌を登った先にある展望露天風呂から見下ろす祖谷渓の雲海と大渓谷は圧巻。名物「祖谷そば」やアメゴの塩焼きに舌鼓を打ちます。'
      },
      {
        key: 'geto_canyon',
        themeTitle: '岩手県北上市・深山秘湯ふるさと納税：ブナ原生林と栗駒山麓に抱かれる自家源泉かけ流し宿',
        themeDesc: 'みちのくの深い森に抱かれた歴史ある湯治場。足元から自噴する野趣あふれる湯舟や木造の素朴な佇まいの中で、日頃酷使した心と身体を自然本来のリズムへと優しくリセットできます。'
      }
    ],
    crossLinks: [
      { title: '秘湯・ランプの宿×デジタルデトックス温泉旅', url: '/furusato-tax-secret-hotspring-lamp-retreat-stay', desc: '電気の通わない山奥の宿でランプの灯火と満天の星に癒やされる静寂旅。' },
      { title: '清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-waterfall-river-gorge-healing-onsen-stay', desc: '奥入瀬渓流・天城湯ヶ島・作並温泉の滝見露天宿。' },
      { title: 'おひとり様贅沢ソロ温泉ワーケーション旅', url: '/furusato-tax-solo-retreat-private-onsen-stay', desc: '客室露天風呂とおこもり空間で誰にも邪魔されない至福のリトリート。' }
    ]
  },
  {
    slug: 'furusato-tax-three-major-night-view-luxury-hotel-stay',
    title: '日本三大夜景＆天空スカイラウンジホテル×ふるさと納税完全ガイド【2026年最新】長崎・神戸・函館の1000万ドル夜景ステイ',
    desc: '長崎稲佐山、神戸六甲山、函館山の日本新三大夜景・世界新三大夜景を一望する特等席ホテル！客室バルコニーや最上階スカイバーからきらめく光の海を眺める大人の記念日・ラグジュアリーステイを楽天ふるさと納税でお得に予約。',
    h1: '日本三大夜景＆スカイラウンジホテル×ふるさと納税ガイド',
    badge: '日本三大夜景・天空ラウンジ特集',
    leadTitle: '宝石箱をひっくり返したような光の絨毯。天空の客室から愛でる夜景のパノラマ',
    leadDesc: 'すり鉢状の地形に光が立体的に広がる長崎、港と六甲山の稜線が美しく調和する神戸、そして両側を海に挟まれたくびれのシルエットが幻想的な函館。日本を代表する三大夜景ホテルでは、窓一面に広がる光の海を眺めながらシャンパンを傾ける優雅な時間が流れます。楽天ふるさと納税を活用すれば、高層階夜景確約ルームやクラブラウンジ付きプランも最大30%OFFで贅沢に予約可能です。',
    merits: [
      {
        title: '高層階・海側・夜景ビュー確約ルームで感動のパノラマを独占',
        desc: '部屋に入った瞬間に息を呑む1000万ドルの夜景。プライベートな空間で誰にも邪魔されず、夜景のきらめきとともに大切な人と特別なひとときを過ごせます。'
      },
      {
        title: 'ホテル最上階のクラブラウンジや夜景露天風呂の非日常体験',
        desc: 'カクテルタイムの無料ドリンクやオードブルを片手に夜景を鑑賞できるラウンジアクセス。光の海を見下ろしながら湯船に浸かる展望大浴場も格別です。'
      },
      {
        title: 'プロポーズ・結婚記念日・誕生日祝いのサプライズに最高の選択肢',
        desc: 'アニバーサリー特典（ケーキ・花束・ワイン）が付いたラグジュアリープランもふるさと納税の対象。一生の思い出に残る記念旅行を格安で叶えられます。'
      }
    ],
    items: [
      {
        key: 'nagasaki_nightview',
        themeTitle: '長崎県長崎市ふるさと納税：世界新三大夜景・稲佐山山頂からすり鉢状の長崎港を見下ろすホテル',
        themeDesc: 'モナコ、上海と並び「世界新三大夜景」に認定された長崎。稲佐山の中腹に建つホテルから望む長崎港の夜景は、山々に広がる街の灯りが星空のように輝く圧倒的なスケールを誇ります。'
      },
      {
        key: 'kobe_nightview',
        themeTitle: '兵庫県神戸市ふるさと納税：日本三大夜景・神戸六甲山テラス＆ベイエリアの摩天楼ステイ',
        themeDesc: '大阪平野から神戸港まで100万ドルのパノラマが広がる六甲山。港に浮かぶポートタワーやメリケンパークのライトアップ、神戸牛ディナーとともにロマンチックな夜を演出します。'
      },
      {
        key: 'hakodate_nightview',
        themeTitle: '北海道函館市ふるさと納税：函館山ロープウェイ至近・津軽海峡の漁火ときらめく街並み',
        themeDesc: '扇形に広がる独特の地峡が生み出す奇跡の夜景。夜空を照らす街の光と、漆黒の津軽海峡に点々と浮かぶイカ釣り漁船の漁火が織りなす幻想的な景色を特等席の客室から楽しめます。'
      }
    ],
    crossLinks: [
      { title: '憧れの最高峰宿・記念日スイート＆ヴィラ', url: '/furusato-tax-anniversary-luxury-suite-villa-stay', desc: '箱根・京都・沖縄の極上アニバーサリーステイ。' },
      { title: '朝食日本一受賞・究極の朝ごはんホテル×ふるさと納税完全ガイド', url: '/furusato-tax-award-winning-breakfast-gourmet-hotel-stay', desc: '函館・神戸・金沢のいくら盛り放題＆美食ビュッフェ。' },
      { title: '日本三大星空・天体観測リゾート×ふるさと納税完全ガイド', url: '/furusato-tax-starry-sky-astronomy-retreat-stay', desc: '阿智村・八ヶ岳清里・鳥取大山の満天星空リゾート。' }
    ]
  },
  {
    slug: 'furusato-tax-riverside-kawadoko-cooling-inn-stay',
    title: '清流川床料理＆避暑せせらぎ名宿×ふるさと納税完全ガイド【2026年最新】京都貴船・四万十川・越後岩室の涼風ステイ',
    desc: '足元を流れる清流の冷気と涼風！京都貴船の元祖川床料理、日本最後の清流四万十川の鮎尽くし、新潟岩室温泉の庭園宿を楽天ふるさと納税宿泊クーポンでお得に予約する清涼美食ガイド。',
    h1: '清流川床料理＆避暑せせらぎ名宿×ふるさと納税ガイド',
    badge: '清流川床料理・避暑せせらぎ特集',
    leadTitle: '天然の冷涼クーラーに包まれる贅沢。川のせせらぎを間近に味わう至極の和食',
    leadDesc: '真夏の暑さを忘れさせてくれる、川面に張り出した特等席「川床（かわどこ）」。水面から立ち上るマイナスイオンと清流を渡る涼風を感じながらいただく鮎の塩焼きや湯引き鱧、京野菜の涼やかな会席は、日本の夏が誇る最高峰の風雅です。楽天ふるさと納税クーポンを使えば、予約困難な名物川床ディナー付きの上質な宿泊プランも実質2,000円の自己負担で優雅に楽しめます。',
    merits: [
      {
        title: '市街地よりマイナス5度から10度涼しい川床の特等席でディナー',
        desc: '清流のすぐ上に設えられた座敷でいただく伝統料理。せせらぎの音を天然のBGMに、昼は木漏れ日、夜は提灯の明かりに照らされた幻想的な風情を満喫できます。'
      },
      {
        title: '清流で育まれた天然鮎の炭火焼きや岩魚・川エビの極上美味',
        desc: '串に刺して炭火で香ばしくじっくり焼き上げた鮎は、ほろ苦いワタとふっくらした身の甘みが絶品。地元の純米酒との相性も抜群です。'
      },
      {
        title: '避暑地リゾートや由緒ある温泉旅館の滞在とセットでお得に消化',
        desc: '川床料理を提供する老舗旅館は宿泊単価が高めですが、ふるさと納税クーポンを活用すれば最大30%の大幅割引。夏の贅沢旅行に最適です。'
      }
    ],
    items: [
      {
        key: 'kibune_kawadoko',
        themeTitle: '京都府京都市ふるさと納税：京都奥座敷貴船・清流の上に設えられた元祖川床料理と貴船神社',
        themeDesc: '貴船川のせせらぎが手の届く距離に流れる川床席。京都の夏の風物詩である活鮎や鱧料理、冷酒を心ゆくまで堪能し、縁結びの神として名高い貴船神社の静寂な朝を散策できます。'
      },
      {
        key: 'shimanto_kawadoko',
        themeTitle: '高知県四万十市ふるさと納税：日本最後の清流四万十川・屋形船遊覧と天然鮎・川エビの郷土料理',
        themeDesc: '名水百選に選ばれる四万十川。沈下橋を望む雄大な自然の中で、屋形船での川下りや天然青のり・天然ウナギの美味を味わい、川のせせらぎを聴きながら天然温泉に浸かる癒やしの休日です。'
      },
      {
        key: 'iwamuro_kawadoko',
        themeTitle: '新潟県新潟市ふるさと納税：越後平野の奥座敷・開湯300年岩室温泉の日本庭園と旬の清流美味',
        themeDesc: '弥彦山麓に抱かれた歴史ある温泉郷。風情ある数寄屋造りの老舗宿で、日本庭園のせせらぎを愛でながら、日本海の海の幸と新潟が誇る極上米・地酒のマリアージュを楽しめます。'
      }
    ],
    crossLinks: [
      { title: 'ご当地グルメ宿を堪能する美食旅特集', url: '/furusato-tax-local-gourmet-inn-stay', desc: '高千穂牛・天然あなご・伊勢海老を味わう返礼クーポン旅。' },
      { title: '日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド', url: '/furusato-tax-sake-brewery-pairing-onsen-stay', desc: '越後湯沢・諏訪・会津の名酒と温泉旅。' },
      { title: '清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-waterfall-river-gorge-healing-onsen-stay', desc: '奥入瀬渓流・天城湯ヶ島・作並温泉の滝見露天宿。' }
    ]
  },
  {
    slug: 'furusato-tax-kura-sauna-private-villa-charter-stay',
    title: '蔵サウナ＆一棟貸しプライベートヴィラ×ふるさと納税完全ガイド【2026年最新】信濃町・八ヶ岳・丹波篠山の完全貸切ととのい旅',
    desc: '築100年の土蔵を改装した本格薪サウナや大自然の地下水水風呂！八ヶ岳、野尻湖畔、丹波篠山など一棟丸ごと貸切できるプライベートサウナヴィラを楽天ふるさと納税宿泊クーポンでお得に予約する究極のサウナリトリート。',
    h1: '蔵サウナ＆一棟貸しヴィラ×ふるさと納税ガイド',
    badge: '蔵サウナ・一棟貸しヴィラ特集',
    leadTitle: '誰にも邪魔されない完全プライベートな「ととのい」。自然と調和する極上サウナステイ',
    leadDesc: '重厚な土壁が熱を柔らかく蓄える歴史ある「蔵サウナ」や、木漏れ日の森に佇むフィンランド式薪サウナヴィラ。好きなアロマでセルフロウリュを楽しみ、キンと冷えた天然地下水の水風呂へダイブ。満天の星空や深緑の風に包まれながら外気浴を味わう時間は、現代人にとって最高の贅沢です。楽天ふるさと納税を活用して、家族や仲間、パートナーと一棟まるごと独占するとっておきのサウナ合宿へ。',
    merits: [
      {
        title: '時間制限なし！セルフロウリュし放題のプライベートサウナ',
        desc: 'パチパチと薪がはぜる音、立ち上るヴィヒタの香り。他人の目を気にすることなく、自分好みの温度・湿度・音楽で究極のととのいを追求できます。'
      },
      {
        title: '広いウッドデッキや庭園での星空外気浴とBBQグリル完備',
        desc: 'サウナ後はウッドデッキのインフィニティチェアで外気浴。地元の特産肉や新鮮野菜をみんなで豪快に焼き上げるプライベートBBQディナーも楽しめます。'
      },
      {
        title: '高額な一棟貸切料金もグループや家族でふるさと納税枠を活用',
        desc: '1泊10万円前後のハイエンドヴィラも、返礼クーポンを適用すれば自己負担実質2,000円。寄付枠を賢く一括消化したい方に最適です。'
      }
    ],
    items: [
      {
        key: 'shinano_sauna_villa',
        themeTitle: '長野県信濃町ふるさと納税：野尻湖・黒姫高原の森に佇む本格フィンランドサウナ付きコテージ',
        themeDesc: 'サウナの聖地として熱い注目を集める信濃町。大自然の森に包まれたログコテージで薪サウナを満喫し、雪解け水が育む天然水風呂と高原の清涼な空気で心身が研ぎ澄まされます。'
      },
      {
        key: 'yatsugatake_sauna_villa',
        themeTitle: '山梨県北杜市ふるさと納税：八ヶ岳南麓・A-Frameデザインの薪ストーブサウナ付きデザイナーズヴィラ',
        themeDesc: '三角屋根の美しいフォルムと南アルプス・富士山を望む絶景立地。本格的なサウナ小屋と大型ジャグジーを備え、夜は八ヶ岳の満天の星空を仰ぎながら至福のディープリラックスへ導かれます。'
      },
      {
        key: 'sasayama_sauna_villa',
        themeTitle: '兵庫県丹波篠山市ふるさと納税：築百年の古民家・土蔵再生サウナ＆手ぶらBBQ一棟貸切',
        themeDesc: '丹波篠山の里山に佇むぽつんと一軒家。伝統的な建築美を残しながら最新サウナとDJブース・BBQ設備を完備。最大10名まで泊まれる広大な空間で、記憶に残るグループステイが叶います。'
      }
    ],
    crossLinks: [
      { title: '愛犬同伴＆プライベートサウナご褒美ステイ', url: '/furusato-tax-pet-sauna-private-hotspring-stay', desc: '裏磐梯・伊豆高原・白馬の特化宿ガイド。' },
      { title: '古民家再生・歴史的町家オーベルジュ×文化財ホテル滞在記', url: '/furusato-tax-kominka-heritage-townhouse-auberge-stay', desc: '篠山・飛騨高山・竹田城下の歴史情緒と地産馳走ステイ。' },
      { title: '豪華グランピング×星空ドームテント完全ガイド', url: '/furusato-tax-luxury-glamping-bbq-dome-stay', desc: '河口湖・琵琶湖・淡路島の手ぶら焚き火BBQ。' }
    ]
  }
];

function generateCode(config) {
  const currentCategoryData = allHotels[config.slug] || {};

  return `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${config.title}',
  description: '${config.desc}',
  keywords: ['ふるさと納税', '楽天トラベル', '宿泊クーポン', '${config.badge}', '温泉旅館', 'ホテル予約', '2026年最新'],
  openGraph: {
    title: '${config.title}',
    description: '${config.desc}',
    url: 'https://croud-travel.pages.dev/${config.slug}',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoTaxPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-white">
      {/* パンくずリスト */}
      <nav className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur px-4 py-3 text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-400 transition">ホーム</Link>
          <span>/</span>
          <Link href="/posts" className="hover:text-amber-400 transition">宿泊ガイド一覧</Link>
          <span>/</span>
          <span className="text-slate-200">${config.badge}</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-black bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 mb-5 shadow-lg shadow-amber-500/20">
            ${config.badge}
          </span>
          <h1 className="text-2xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            ${config.h1}
          </h1>
          <p className="text-sm md:text-lg text-slate-300 leading-relaxed font-medium">
            ${config.desc}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="${officialFurusatoAffUrl}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              <span>🎟️ 楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span className="text-xs bg-black/20 px-2 py-0.5 rounded">公式</span>
            </a>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* リード文ブロック */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10" />
          <h2 className="text-xl md:text-2xl font-black text-amber-400 mb-4 flex items-center gap-2">
            <span>💡</span>
            <span>${config.leadTitle}</span>
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base font-normal">
            ${config.leadDesc}
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl font-black text-white">
              楽天ふるさと納税トラベルクーポンが圧倒的にお得な3つの理由
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-2">
              予約前の獲得はもちろん、予約後の「あとから適用」も可能な最高峰の使い勝手
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${config.merits.map((m, idx) => `
              <div key="${idx}" className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-black text-lg mb-4">
                    0${idx + 1}
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-3">
                    ${m.title}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    ${m.desc}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        {/* 自治体＆厳選宿セクション */}
        <section className="space-y-12">
          <div className="border-l-4 border-amber-500 pl-4">
            <h2 className="text-2xl md:text-3xl font-black text-white">
              ふるさと納税対象・厳選おすすめ宿泊施設
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-1">
              楽天トラベルAPIより最新の料金・宿泊プラン・空室情報をリアルタイム反映中
            </p>
          </div>

          <div className="space-y-12">
            ${config.items.map(item => {
              const target = currentCategoryData[item.key] || { hotels: [] };
              const hotels = target.hotels || [];
              return `
                <div key="${item.key}" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>${item.themeTitle}</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      ${item.themeDesc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    ${hotels.map(h => `
                      <div key="${h.hotelNo}" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            ${h.hotelImageUrl ? `
                              <Image
                                src="${h.hotelImageUrl}"
                                alt="${h.hotelName}"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            ` : `
                              <div className="w-full h-full flex items-center justify-center text-slate-600 text-xs font-mono">
                                NO IMAGE
                              </div>
                            `}
                            ${h.reviewAverage > 0 ? `
                              <div className="absolute top-2 right-2 bg-slate-950/90 border border-amber-400/40 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-black shadow-lg flex items-center gap-1">
                                <span>★</span>
                                <span>${h.reviewAverage.toFixed(1)}</span>
                              </div>
                            ` : ''}
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition">
                              ${h.hotelName}
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              ${(h.hotelSpecial || h.userReview || '').replace(/[\r\n\t]/g, ' ').slice(0, 100)}
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">${h.address1}${h.address2}</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ${h.hotelMinCharge > 0 ? `¥${h.hotelMinCharge.toLocaleString()}〜` : 'プラン参照'}
                            </span>
                          </div>
                          <a
                            href="${h.affiliateUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        {/* 関連・相互リンク集 */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="border-l-4 border-amber-500 pl-3">
            <h3 className="text-lg md:text-xl font-black text-white">あわせて読みたいふるさと納税トラベル特集</h3>
            <p className="text-slate-400 text-xs mt-1">目的や同伴者に合わせて最適な宿泊クーポンを活用しよう</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${config.crossLinks.map((cl, i) => `
              <Link
                key="${i}"
                href="${cl.url}"
                className="block p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition text-sm mb-1 line-clamp-1">
                  ${cl.title}
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  ${cl.desc}
                </div>
              </Link>
            `).join('')}
          </div>
        </section>

        {/* クーポン獲得CTA */}
        <section className="bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <span className="text-3xl">🎫</span>
          <h2 className="text-xl md:text-3xl font-black text-white">
            楽天トラベルふるさと納税クーポンで、一生の思い出に残るプレミアムステイへ
          </h2>
          <p className="text-slate-300 text-xs md:text-base max-w-2xl mx-auto leading-relaxed">
            返礼品クーポンは寄付手続き完了後、数分で楽天トラベルのアカウントに即時付与されます。今年の寄付上限枠を賢く使って、家族みんなの最高の笑顔とくつろぎを手に入れましょう。
          </p>
          <div>
            <a
              href="${officialFurusatoAffUrl}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-base border border-amber-400/40"
            >
              <span>🎟️ 楽天ふるさと納税 宿泊クーポンを獲得する</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
`;
}

for (const p of pagesConfig) {
  const dir = path.join(__dirname, 'src/app', p.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, 'page.tsx');
  fs.writeFileSync(filePath, generateCode(p), 'utf8');
  console.log(`Generated page at: ${filePath}`);
}

console.log('All 4 Round 11 pages successfully created!');
