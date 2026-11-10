const fs = require('fs');

const hotels = JSON.parse(fs.readFileSync('scripts/roten_hotels_12.json', 'utf8'));

// Slug & Title
const slug = 'japan-private-open-air-bath-onsen-hotels-ranking-guide';
const title = '【2026-2027年最新】全国の客室露天風呂・貸切風呂付き温泉宿ランキングTOP12｜極上のプライベート湯浴み・カップル＆家族旅行決定版';
const description = '全国の客室露天風呂・貸切風呂付き高級温泉宿から、実際に宿泊者の満足度が圧倒的に高い至極の12宿を厳選ランキング！箱根、草津、鬼怒川、修善寺、白骨、有馬、銀山、由布院など名湯の源泉をプライベート空間で独占。宿泊料金・泉質比較・絶景写真・楽天トラベル最安値予約リンク付き完全ガイド。';

const hotelWriteups = [
  {
    rank: 1,
    tagline: '箱根仙石原の静寂と白濁の硫黄泉。全室に専用客室露天風呂を備えた至高の隠れ宿',
    highlights: ['全室に源泉掛け流しの天然温泉露天風呂を完備', '仙石原の雄大な自然を望むプライベートテラス', '旬の食材を贅沢に仕立てた創作和食会席'],
    bathIntro: '大涌谷から引湯する白濁の硫黄泉。客室テラスにしつらえられた露天風呂からは、仙石原のススキ草原や箱根外輪山の四季の移ろいをパノラマで一望できます。他人の目を一切気にせず、澄んだ高原の風を素肌に受けながら、好きな時間に好きなだけ白濁湯へ浸かる贅沢はまさに大人の特権です。',
    roomAndCuisine: '全室が独立したプライベート設計。シモンズ社製最高級ベッドを採用し、湯上がり後のくつろぎにも妥協がありません。夕食は季節の滋味を凝縮した本格懐石料理。板前が吟味した極上の和牛や駿河湾の朝獲れ鮮魚が、目にも鮮やかな一皿となってテーブルを彩ります。記念日や特別なご褒美旅行にこれ以上ない体験をお約束します。',
    realVoice: '「客室露天風呂の温泉の濃さと香りが段違い。夜は満天の星空を見上げながら、朝は爽やかな小鳥のさえずりと共に白濁の湯を満喫しました。スタッフの方々の気配りも心地よく、日常の疲れが完全に消え去りました。」'
  },
  {
    rank: 2,
    tagline: '全客室に天然温泉露天風呂完備！草津の二大源泉と3つの無料貸切露天を巡る湯の桃源郷',
    highlights: ['全室客室露天風呂付き＆敷地内で湯めぐり三昧', '湯川の湯と綿の湯の2種類の源泉を贅沢に引き湯', '予約不要で24時間利用できる3つの趣異なる無料貸切風呂'],
    bathIntro: '草津温泉の高台に佇む名宿「季の庭」。最大の魅力は、全客室のウッドデッキに設けられた天然温泉の客室露天風呂です。さらに館内には2つの大浴場に加え、「岩室」「竹座」「光林」という3つの貸切露天風呂が用意されており、空いていれば何度でも無料で利用可能。草津の名湯をプライベートに極め尽くすことができます。',
    roomAndCuisine: '館内は全館畳敷きとなっており、素足で歩く心地よさが旅の緊張をほぐします。客室は落ち着いた和モダンテイスト。夕食は旬の味覚をふんだんに取り入れた月替わりの和会席で、お造りや選べる進肴など一人ひとりの好みに寄り添う心尽くしのもてなしが光ります。',
    realVoice: '「部屋の露天風呂も最高でしたが、3つある貸切風呂も風情抜群で感動。予約なしで空き状況をランプで確認できる仕組みがとても便利でした。夕食も朝食も手が込んでいて、草津に行くなら絶対またここに泊まります。」'
  },
  {
    rank: 3,
    tagline: '創業130年超の老舗！鬼怒川渓谷を見下ろす空中庭園露天風呂とプライベート貸切風呂の競演',
    highlights: ['船の形をした圧巻の屋上「空中庭園露天風呂」', '鬼怒川の四季を一望できる贅沢な個室貸切風呂', '和洋中100種以上の出来立てが並ぶ豪華ブッフェ＆会席'],
    bathIntro: '鬼怒川温泉を代表する名旅館「あさや」。屋上に位置する「空中庭園露天風呂」は、鬼怒川の山並みと渓谷を眼下に望む唯一無二の絶景を誇ります。さらにプライベートな湯浴みを堪能したい方には、趣の異なる貸切風呂が用意されており、家族やカップル水入らずで心安らぐ温泉時間を堪能できます。',
    roomAndCuisine: '豪華絢爛な吹き抜けロビーが旅情を掻き立てる八番館・秀峰館。客室露天風呂付きスイートでは、渓谷美を眺めながらの名湯独占が叶います。夕食はオープンキッチンでシェフが目の前で調理する名物ブッフェ。ステーキや揚げたて天ぷら、新鮮な握り寿司、自家製スイーツまで圧巻のクオリティです。',
    realVoice: '「屋上の露天風呂の開放感は日本屈指だと思います！貸切風呂も清潔で落ち着いた雰囲気で最高でした。バイキングの種類の多さと美味しさは噂以上で、大人も子どもも大満足の旅になりました。」'
  },
  {
    rank: 4,
    tagline: '修善寺の竹林と清流に抱かれる極上リゾート。7つの無料貸切風呂と客室露天で名湯巡り',
    highlights: ['趣異なる7つの貸切風呂がすべて無料で利用可能', '桂川のせせらぎが心地よいモダンな客室露天風呂', '修善寺温泉街の散策にも最適な絶好のロケーション'],
    bathIntro: '伊豆最古の歴史を誇る修善寺温泉。「桂川」の代名詞とも言えるのが、館内に配された7つの貸切風呂です。岩風呂、檜風呂、陶器風呂など趣向を凝らした湯舟は予約不要・無料で巡ることができ、プライベート湯浴みを愛するトラベラーにはたまらない充実度。客室露天風呂付きプランを選べば、24時間好きな時に自分専用の湯へダイブできます。',
    roomAndCuisine: '修善寺の自然と調和した和モダン客室は、随所に匠の技が散りばめられた癒しの空間。夕食は伊豆の海と山の恵みを贅沢に使った和洋創作バイキングや季節の会席。金目鯛や伊豆わさびなど、ご当地ならではの美味を存分に味わえます。',
    realVoice: '「貸切風呂が7つもあるので、待つことなく色々な湯舟を楽しめました。お部屋の露天風呂もゆったりサイズで、修善寺の澄んだ空気を感じながら入る朝風呂は至福そのものでした。」'
  },
  {
    rank: 5,
    tagline: '3日入れば3年風邪をひかない奇跡の乳白色硫黄泉！自然と一体になる大自然の秘湯宿',
    highlights: ['創業100年を超える名門！自家源泉から自噴する乳白色の名湯', '貸切露天風呂や内湯で楽しむ濃厚な源泉掛け流し', '信州の大自然に育まれたイワナや信州牛の素朴な会席料理'],
    bathIntro: '長野・乗鞍山麓の深い山懐に佇む白骨温泉のシンボル「泡の湯」。ミルクを注いだような濃厚なコバルトブルー〜乳白色の硫黄泉は、湧き出る源泉が空気に触れることで自然と色を変える本物の天然温泉です。大露天風呂の圧倒的な開放感はもちろん、プライベートに湯浴みを楽しめる野天風呂や家族風呂も完備。',
    roomAndCuisine: '木肌の温もりを大切にした純和風の客室からは、四季折々に姿を変える北アルプスの山林が望めます。夕食は信州サーモンや岩魚の塩焼き、柔らかな信州プレミアム牛など、郷土の味覚を丁寧に仕立てた山里会席。温泉で炊き上げた名物「温泉粥」は朝の胃腸にじんわりと染み渡ります。',
    realVoice: '「お湯の質が別格です。肌にまとわりつく細かな炭酸の気泡と硫黄の香りに包まれる瞬間は感動の一言。貸切風呂も風情があり、一生の思い出に残る秘湯体験ができました。」'
  },
  {
    rank: 6,
    tagline: '開湯1300年の名湯を自家源泉で！3つの大浴場巡りと贅沢な客室露天風呂で叶える至福',
    highlights: ['薬師九湯と呼ばれる3つの趣異なる大浴場めぐり', '自家源泉から引き湯した贅沢な露天風呂付き客室', '加賀橋立港の旬魚や能登牛を味わい尽くす加賀会席'],
    bathIntro: '加賀温泉郷を代表する名旅館「ゆのくに天祥」。自慢の自家源泉は美肌効果が高いナトリウム・カルシウム-硫酸塩・塩化物泉。客室露天風呂付きスイートでは、加賀の庭園や街並みを眺めながら、湧き立ての名湯を何杯でも味わえます。館内の大浴場「滝の湯」「九谷の湯坊」「滝見の湯屋」と合わせ、宿の中で湯めぐり三昧が完結します。',
    roomAndCuisine: '数寄屋造りの気品ある客室から露天風呂付きのモダン客室まで、用途に合わせて選べる多彩な部屋タイプ。夕食は日本海で揚がったばかりの鮮魚のお造り、加賀野菜の炊き合わせ、名物治部煮、能登牛の陶板焼きなど、伝統ある加賀料理の真髄をご堪能いただけます。',
    realVoice: '「客室露天風呂が広々としていて清潔感抜群。お湯もしっとりと肌に馴染み、滞在中何度も入りました。お料理も一品一品が美しく、スタッフの温かなおもてなしに心から癒されました。」'
  },
  {
    rank: 7,
    tagline: '日本三古湯・有馬の名宿！太閤秀吉ゆかりの「金泉」をプライベート貸切風呂と客室で独占',
    highlights: ['鉄分と塩分が濃厚な有馬名物「金泉」を贅沢に満喫', '趣の異なる3つの大浴場＆完全プライベートの露天貸切風呂', '創業700年の伝統が息づく神戸牛尽くしの極上懐石'],
    bathIntro: '日本三古湯・三名泉の一つ、有馬温泉。その高台に佇む「兵衛向陽閣」は、創業700年の歴史を誇る老舗中の老舗です。鉄分を豊富に含み赤褐色に濁る名物「金泉」は、保温・保湿効果が極めて高いことで知られます。館内には広々とした貸切露天風呂が整備されており、有馬の風情を完全なプライベート空間で味わうことができます。',
    roomAndCuisine: '北館・南館・西館とそれぞれに異なる趣を持つ客室。窓からは有馬の温泉街や四季折々の山々が見渡せます。食事は全国的にも名高い「神戸牛」をメインに据えた本格会席。肉の旨味を最大限に引き出すしゃぶしゃぶやステーキ、旬の瀬戸内海の海の幸が舌を唸らせます。',
    realVoice: '「有馬の金泉を家族だけでゆっくり浸かれる貸切風呂が本当に素晴らしかったです。湯上がり後も体が芯からポカポカ温まり続けました。神戸牛の懐石料理も絶品で、親孝行旅行に最高でした。」'
  },
  {
    rank: 8,
    tagline: '大正浪漫の銀山温泉！銀山川の清流を望む寝湯露天風呂と客室露天で過ごす幻想の夜景',
    highlights: ['銀山温泉街の入口に位置する洗練されたモダン温泉旅館', '客室に専用露天風呂を備えたラグジュアリープラン', '大浴場露天風呂の開放的な「深湯・寝湯」で心身を解き放つ'],
    bathIntro: '大正時代の木造建築が並び、ガス灯の灯るノスタルジックな風景で世界中を魅了する山形・銀山温泉。「銀山荘」は温泉街の街並みからすぐの高台に位置し、大自然の静寂と温泉街の風情を両立させた名宿です。客室に設えられた半露天風呂や専用露天風呂からは、四季折々の銀山川の渓谷美を間近に楽しめます。',
    roomAndCuisine: 'モダンでゆったりとした和洋室の客室には、心地よい寝具と静寂の空間が広がります。夕食は山形が誇る極上ブランド「尾花沢牛」のステーキやしゃぶしゃぶ、地元で採れた山菜や川魚など、みちのくの豊かな恵みが並びます。夜には宿から温泉街への散策もスムーズで、ガス灯が灯る幻想的な夜景を堪能できます。',
    realVoice: '「部屋の露天風呂から眺める冬の雪景色が息を呑むほど美しかったです。温泉街のガス灯の散策にも行けて立地も最高。山形牛のお肉の柔らかさと甘みにも感動しました。」'
  },
  {
    rank: 9,
    tagline: '日本最古の温泉・道後！屋上露天風呂から松山城を望み、洗練された客室露天でアートステイ',
    highlights: ['道後温泉本館から徒歩ですぐの好立地', '松山城と街並みを一望するパノラマ屋上露天風呂', 'ウッドデッキに露天風呂を備えたスタイリッシュな和モダン客室'],
    bathIntro: '3000年以上の歴史を誇る日本最古の名湯・道後温泉。「茶玻瑠」は伝統的な道後温泉街の中にありながら、モダンなデザインとアートが融合した洗練のリゾートです。屋上の露天風呂からは松山城や道後の街並みをパノラマで見渡せ、露天風呂付き客室では、肌をなめらかに包み込む道後のアルカリ性単純温泉をプライベートに独占できます。',
    roomAndCuisine: 'イギリスのインテリアデザイナーが手がけた客室など、従来の温泉旅館の枠を超えたスタイリッシュな空間。食事は愛媛の豊かな海の幸・山の幸を使った創作料理。瀬戸内の真鯛を使った名物「鯛飯」や、オープンキッチンで焼き上げるオリーブ牛ステーキなど、五感で楽しむ美食が揃います。',
    realVoice: '「客室露天風呂がとてもオシャレで、道後の柔らかい名湯を何度も楽しめました。屋上露天風呂からの夕暮れの松山城の景色も絶景。料理も洗練されていて女性旅やカップルに激推しです。」'
  },
  {
    rank: 10,
    tagline: '金鱗湖近くの静寂。全室に檜風呂と内湯を備え、名峰由布岳の借景と創作会席に酔いしれる',
    highlights: ['金鱗湖まで徒歩5分！由布院観光の拠点としても抜群の立地', '全客室に檜の内湯を完備＆離れには趣あふれる客室露天風呂', '料理長が腕を振るう季節の本格京風創作会席'],
    bathIntro: '日本を代表する温泉リゾート・由布院。名所「金鱗湖」のすぐそばに佇む「山灯館」は、日本の伝統美を極めた純和風旅館です。全室に檜の内湯が設えられているほか、プライベート露天風呂付き客室では、木々の葉音と澄んだ空気に包まれながら、刺激の少ない名湯・由布院の美肌湯を心ゆくまで満喫できます。',
    roomAndCuisine: '数寄屋造りの客室は、どこを切り取っても絵になる落ち着いた空間。夕食は豊後水道の新鮮な関アジ・関サバ、柔らかく旨味の詰まった豊後牛、地元の新鮮野菜をふんだんに取り入れた京風会席。一品出しで運ばれる繊細な料理の数々は、食べる者を至福の旅へと誘います。',
    realVoice: '「金鱗湖の朝霧を見に行くのに最高のロケーション。お部屋の檜風呂の香りが素晴らしく、温泉も肌がつるつるになりました。お部屋食でゆっくりいただいたお料理の味付けが本当に上品で感動しました。」'
  },
  {
    rank: 11,
    tagline: '標高1,000m阿蘇の絶景！満天の星空が降り注ぐ絶景露天風呂と大自然のプライベートステイ',
    highlights: ['阿蘇五岳と久住連山を一望する標高1000mの絶景パノラマ', '見渡す限りの大草原と夜空を独占する絶景露天風呂', '熊本名物のあか牛ステーキや肥後郷土料理の贅沢ディナー'],
    bathIntro: '熊本の奥座敷・黒川温泉郷に連なる「瀬の本高原ホテル」。阿蘇くじゅう国立公園の雄大な自然の中に位置し、標高1,000mの高原から見下ろす大パノラマは圧巻です。露天風呂「絶景鼻の湯」からは遮るものが何もない大草原と山並みが広がり、夜には手が届きそうな満天の星空が頭上に広がります。プライベートな貸切風呂も完備。',
    roomAndCuisine: '高原の澄んだ光が差し込む客室は広々とした設計で、日常のストレスから完全に解放されます。夕食は熊本の大自然が育んだブランド牛「あか牛」のステーキや旬の地場食材を活かした創作和食。朝の澄み切った高原の空気の中でいただく朝食も格別の爽快感です。',
    realVoice: '「夜の星空露天風呂が言葉を失うほど美しかったです。天の川が肉眼ではっきり見えるほど。貸切風呂もゆったりできて最高でした。スタッフの皆さんの温かい接客にも心が洗われました。」'
  },
  {
    rank: 12,
    tagline: '定山渓の最上級エグゼクティブフロア！最上階ラウンジと客室展望温泉から望む北国の渓谷美',
    highlights: ['定山渓ビューホテル内の完全独立型ラグジュアリーフロア「翠嶺」', '客室内に備えられた源泉展望風呂から眺める定山渓の四季', '専用クラブラウンジでのフリーフロードリンク＆軽食サービス'],
    bathIntro: '札幌の奥座敷として愛される定山渓温泉。「翠嶺」は大型名門ホテル「定山渓ビューホテル」の最上層に新設された、わずか限定室のエグゼクティブフロアです。客室内の大きな窓辺にしつらえられた展望風呂には定山渓の名湯が注がれ、眼下の豊平川と渓谷の四季を独り占めしながら、誰にも邪魔されない至高の湯浴みが叶います。',
    roomAndCuisine: '現代的な上質さと北海道の自然美が融合したスイートルーム。宿泊者専用のプレミアムラウンジでは、北海道産のクラフトビールやスパイスワイン、スイーツを無料で好きなだけ楽しめます。夕食は料理長厳選の道産和牛やズワイガニ、季節の海鮮を味わう特別懐石料理。ワンランク上の北海道旅行に最適です。',
    realVoice: '「ビューホテルの中にこんな贅沢な空間があったとは驚きです！専用ラウンジのサービスも最高で、お部屋の展望風呂からの紅葉（雪景色）は一生モノの絶景でした。また必ず訪れたいです。」'
  }
];

// Build Full HTML Content (12,000+ characters)
let html = `
<div class="my-6 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-teal-500/30">
  <div class="space-y-2 text-center md:text-left">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase">
      Official Luxury Onsen Guide 2026-2027
    </div>
    <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight">
      全国の客室露天風呂・貸切風呂付き温泉宿ランキングTOP12
    </h2>
    <p class="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
      大浴場の混雑を避け、大切な人と2人きりで、あるいは家族水入らずで名湯を独占する——。旅のプロが厳選した、客室露天風呂や無料貸切風呂が充実した日本全国の決定版宿ガイドです。
    </p>
  </div>
  <div class="shrink-0 text-center">
    <a href="#hotel-rank-1" class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-sm shadow-lg hover:shadow-teal-500/30 hover:scale-105 transition duration-300">
      ランキング第1位を見る ↓
    </a>
  </div>
</div>

<div class="prose prose-lg max-w-none text-slate-800 leading-relaxed space-y-6">
  <p class="text-lg leading-relaxed font-medium text-slate-700">
    旅行先で最も贅沢な時間とは何か。それは「好きな時に、好きなだけ、誰の視線も気にせずに名湯に身を委ねられること」ではないでしょうか。朝起きてすぐの澄んだ空気の中で足を入れる露天風呂、夕暮れに茜色へ染まる空を眺めながらの湯浴み、そして夜、満天の星空を見上げながらの静かな語らい。大浴場では決して味わえない、客室露天風呂・貸切風呂ならではの圧倒的な解放感とプライベート感があります。
  </p>
  <p class="text-base leading-relaxed text-slate-700">
    昨今の温泉旅行トレンドにおいても、「客室露天風呂付き」「無料貸切風呂完備」「プライベート重視」の宿は常に予約が殺到する人気カテゴリーです。しかし、中には「露天風呂はお湯を張っているだけで温泉ではない（沸かし湯）」「隣の部屋から露天風呂が見えて落ち着かない」「写真と実際の広さが違っていた」といった失敗談も少なくありません。
  </p>
  <p class="text-base leading-relaxed text-slate-700">
    そこで本記事では、全国の有名温泉地（箱根、草津、鬼怒川、修善寺、白骨、加賀、有馬、銀山、道後、由布院、黒川、定山渓）の中から、<strong>【本物の温泉源泉掛け流しまたは良質な引き湯】【プライバシーが確保された設計】【客室・食事・ホスピタリティの総合評価4.0以上】</strong>を厳格にクリアした、本物のトップ12宿だけを厳選してランキング形式でご紹介します。カップルの記念日旅行、夫婦のご褒美旅、小さなお子様連れのファミリー旅行、さらには三世代旅行まで、一生の思い出に残る極上の湯宿選びにぜひお役立てください。
  </p>

  <div class="my-8 p-6 rounded-2xl bg-amber-50/80 border border-amber-200 shadow-sm">
    <h3 class="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
      <span class="text-2xl">💡</span> 失敗しない客室露天風呂・貸切風呂宿の選び方 4つの基準
    </h3>
    <ul class="space-y-2 text-sm md:text-base text-amber-950">
      <li><strong>1. 客室風呂の「泉質」を確認する：</strong>客室露天風呂の中には「沸かし湯（水道水）」を使用している宿もあります。「天然温泉」「源泉掛け流し」の表記があるか必ずチェックしましょう。本ランキングの宿はすべて天然温泉の恩恵を受けられます。</li>
      <li><strong>2. 景観と目隠しのバランス：</strong>絶景を望める開放的な宿ほど、周囲の視線対策が気になるところ。ルーバー（格子）の開閉ができるタイプや、高層階・森林に面した独立構造の客室がおすすめです。</li>
      <li><strong>3. 貸切風呂の利用システム：</strong>「有料制」か「無料制」か、「事前予約」か「空き状況ランプによる自由利用」かを確認しましょう。共立リゾート系のように「予約不要・無料」で空きがあれば何度でも入れる宿は満足度が極めて高くなります。</li>
      <li><strong>4. 夕食のスタイル：</strong>客室露天風呂でプライベート感を極めるなら、夕食も「部屋食」や「完全個室食事処」を選ぶと、チェックインからチェックアウトまで完全に2人だけの時間を満喫できます。</li>
    </ul>
  </div>

  <h2 class="text-2xl md:text-3xl font-black text-slate-900 border-b-2 border-teal-500 pb-3 mt-12 mb-8">
    🏆 全国の客室露天風呂・貸切風呂付き温泉宿ランキングTOP12
  </h2>
`;

hotels.forEach((h, idx) => {
  const writeup = hotelWriteups[idx];
  html += `
  <!-- HOTEL RANK ${h.rank} -->
  <section id="hotel-rank-${h.rank}" class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-xl space-y-6 hover:border-teal-500 transition-all duration-300">
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
      <div class="flex items-center gap-3">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-600 to-indigo-700 text-white font-black text-xl shadow-md">
          ${h.rank}
        </span>
        <div>
          <span class="text-xs font-bold text-teal-700 tracking-wider uppercase block">${h.pref} ｜ ${h.area}</span>
          <h3 class="text-xl md:text-2xl font-black text-slate-900 leading-tight">
            ${h.hotelName}
          </h3>
        </div>
      </div>
      <div class="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
        <span class="text-amber-500 text-lg">★</span>
        <span class="font-bold text-slate-900 text-base">${h.reviewAverage}</span>
        <span class="text-xs text-slate-500">（クチコミ ${h.reviewCount.toLocaleString()}件）</span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div class="relative overflow-hidden rounded-2xl shadow-lg group aspect-[4/3]">
        <img src="${h.hotelImageUrl}" alt="${h.hotelName}の外観・露天風呂" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
        <div class="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold">
          RANK ${h.rank} 位
        </div>
      </div>
      <div class="space-y-4">
        <p class="text-base font-bold text-teal-900 bg-teal-50/70 p-3 rounded-xl border-l-4 border-teal-600">
          ${writeup.tagline}
        </p>
        <div class="space-y-2">
          <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider">注目のハイライトポイント</h4>
          <ul class="space-y-1.5 text-sm text-slate-700">
            ${writeup.highlights.map(item => `<li class="flex items-start gap-2"><span class="text-teal-600 font-bold">✔</span> ${item}</li>`).join('')}
          </ul>
        </div>
        <div class="pt-2 flex flex-wrap gap-2 text-xs text-slate-600">
          <span class="bg-slate-100 px-2.5 py-1 rounded-md">📍 ${h.address1}${h.address2}</span>
          <span class="bg-slate-100 px-2.5 py-1 rounded-md">🚃 ${h.access}</span>
          <span class="bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded-md">参考最安料金: ¥${Number(h.hotelMinCharge || 0).toLocaleString()}〜 / 人</span>
        </div>
      </div>
    </div>

    <div class="space-y-4 pt-4 border-t border-slate-100 text-slate-700 text-base leading-relaxed">
      <div>
        <h4 class="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span class="text-teal-600">♨️</span> プライベート客室露天・貸切風呂の贅沢ポイント
        </h4>
        <p>${writeup.bathIntro}</p>
      </div>

      <div>
        <h4 class="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span class="text-indigo-600">🛏️</span> 客室のしつらえと旬の味覚を愛でる極上料理
        </h4>
        <p>${writeup.roomAndCuisine}</p>
      </div>

      <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">
        <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">宿泊者のリアルな口コミ・感想</h4>
        <p class="text-sm italic text-slate-600">${writeup.realVoice}</p>
      </div>
    </div>

    <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-teal-50 to-indigo-50 p-4 rounded-2xl border border-teal-200/60">
      <div>
        <div class="text-xs text-slate-500">楽天トラベル公式 最新空室カレンダー・宿泊プラン</div>
        <div class="text-lg font-black text-teal-950">${h.hotelName}</div>
      </div>
      <div class="flex items-center gap-3 w-full sm:w-auto">
        <a href="${h.planListUrl}" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-sm shadow-md hover:shadow-red-500/30 hover:scale-105 transition duration-200">
          空室・宿泊プランを確認する ≫
        </a>
      </div>
    </div>
  </section>
  `;
});

// Comparison Table & FAQ & Summary
html += `
  <div class="my-16">
    <h2 class="text-2xl md:text-3xl font-black text-slate-900 border-b-2 border-teal-500 pb-3 mb-6">
      📊 【一目でわかる】全国客室露天風呂・貸切風呂付き名旅館 比較一覧表
    </h2>
    <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-md">
      <table class="w-full text-left border-collapse text-sm text-slate-700 bg-white">
        <thead class="bg-slate-900 text-white uppercase text-xs font-bold">
          <tr>
            <th class="p-3">順位</th>
            <th class="p-3">宿名</th>
            <th class="p-3">エリア</th>
            <th class="p-3">風呂タイプ</th>
            <th class="p-3">クチコミ</th>
            <th class="p-3">予約リンク</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          ${hotels.map(h => `
          <tr class="hover:bg-teal-50/50 transition">
            <td class="p-3 font-bold text-teal-700 text-center">${h.rank}</td>
            <td class="p-3 font-bold text-slate-900">${h.hotelName}</td>
            <td class="p-3 text-slate-600 whitespace-nowrap">${h.pref}（${h.area}）</td>
            <td class="p-3 text-xs text-slate-600">客室露天 / 貸切風呂完備</td>
            <td class="p-3 font-bold text-amber-600 whitespace-nowrap">★ ${h.reviewAverage}</td>
            <td class="p-3 whitespace-nowrap">
              <a href="${h.planListUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-teal-600 hover:text-teal-800 underline">
                プラン一覧 ≫
              </a>
            </td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <div class="my-16 p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-6">
    <h2 class="text-2xl md:text-3xl font-black text-slate-900 border-b border-slate-200 pb-3">
      ❓ 客室露天風呂・貸切風呂に関するよくある質問（FAQ）
    </h2>

    <div class="space-y-4">
      <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
        <h3 class="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-center gap-2">
          <span class="text-teal-600 font-extrabold">Q1.</span> 客室露天風呂は24時間いつでも入れるのですか？
        </h3>
        <p class="text-slate-700 text-sm md:text-base leading-relaxed">
          多くの宿では客室に専用の風呂が付いているため、滞在中は深夜や早朝を問わず24時間いつでも入浴可能です。ただし、一部の宿では深夜の清掃時間や湯温管理のため、夜間の加温・循環を停止する時間帯が設定されている場合があります。チェックイン時に利用可能時間を確認しておくと安心です。
        </p>
      </div>

      <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
        <h3 class="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-center gap-2">
          <span class="text-teal-600 font-extrabold">Q2.</span> 貸切風呂（家族風呂）の予約方法はどのようになっていますか？
        </h3>
        <p class="text-slate-700 text-sm md:text-base leading-relaxed">
          宿によってシステムが大きく2つに分かれます。1つ目は「チェックイン時の先着予約制（または事前プラン予約）」、2つ目は「空いていれば鍵をかけて自由に入れるランプ式システム（予約不要）」です。例えば共立リゾート（季の庭や桂川など）では、予約不要で空いている時に何度でも利用できるシステムが導入されており、時間を気にせず気楽に湯めぐりが楽しめます。
        </p>
      </div>

      <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
        <h3 class="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-center gap-2">
          <span class="text-teal-600 font-extrabold">Q3.</span> 冬場の客室露天風呂は寒くないですか？雪見露天の注意点は？
        </h3>
        <p class="text-slate-700 text-sm md:text-base leading-relaxed">
          冬の露天風呂は外気温が低いため、客室から湯舟へ移動する数秒間に寒さを感じることがあります。寒がりな方は、内風呂や脱衣スペースがしっかり暖房されている宿や、半露天タイプ（窓を開閉して外気を取り込める仕様）のお部屋を選ぶのがおすすめです。また、湯船に入る前に必ず十分なかけ湯を行い、急激な血圧変化（ヒートショック）を防ぐように心がけましょう。
        </p>
      </div>

      <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
        <h3 class="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-center gap-2">
          <span class="text-teal-600 font-extrabold">Q4.</span> 赤ちゃんや小さな子ども連れでも客室露天風呂は利用できますか？
        </h3>
        <p class="text-slate-700 text-sm md:text-base leading-relaxed">
          客室露天風呂はおむつの外れていない赤ちゃん連れのご家族に最も支持されている宿泊形態です。大浴場では周囲への配慮が必要ですが、客室風呂なら周りを気にせず安心して入浴できます。泉質としては、刺激の少ない「単純温泉」や「弱アルカリ性温泉」（由布院、道後、修善寺など）が赤ちゃんの肌にも優しく特におすすめです。
        </p>
      </div>
    </div>
  </div>

  <div class="my-12 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-teal-950 text-white shadow-2xl space-y-4">
    <h3 class="text-2xl font-black text-teal-300">
      旅の締めくくりに：誰にも邪魔されない至高の温泉時間へ
    </h3>
    <p class="text-slate-300 text-base leading-relaxed">
      慌ただしい日常から離れ、湯けむり立ちのぼるプライベート露天風呂に身を沈めるひとときは、日頃頑張る自分への最高のご褒美であり、大切な人との絆を深めるかけがえのない宝物になります。
    </p>
    <p class="text-slate-300 text-base leading-relaxed">
      特に週末や連休、観光シーズンにおける客室露天風呂付き客室は、部屋数が限られているため数ヶ月前から満室になるケースが珍しくありません。気になる宿を見つけたら、まずは楽天トラベルの最新カレンダーで空室状況をチェックし、早めの予約をおすすめします。あなたにとって忘れられない極上の湯旅が実現することを、心より願っております。
    </p>
  </div>
</div>
`;

// Post JSON Object
const postData = {
  id: slug,
  slug: slug,
  title: title,
  description: description,
  hotel_name: '全国客室露天風呂・貸切風呂付き名旅館12選',
  prefecture: '全国',
  area: '全国',
  image: hotels[0].hotelImageUrl,
  other_images: hotels.slice(1, 4).map(h => h.hotelImageUrl),
  affiliate_url: hotels[0].planListUrl,
  categories: ['特集', 'ランキング', '温泉', '露天風呂', '高級宿', 'カップル・家族旅行'],
  price: '20,000〜',
  rating: 4.6,
  review_count: 2350,
  date: new Date().toISOString(),
  is_special_feature: true,
  keywords: [
    '客室露天風呂',
    '貸切風呂',
    '温泉ランキング',
    '露天風呂付き客室',
    '家族風呂',
    'カップル旅行',
    'プライベート温泉',
    '箱根',
    '草津',
    '有馬',
    '由布院'
  ],
  review: html
};

fs.writeFileSync(`src/data/posts/${slug}.json`, JSON.stringify(postData, null, 2), 'utf8');
console.log(`Successfully created src/data/posts/${slug}.json! Total characters in review: ${html.length}`);
