const fs = require('fs');
const path = require('path');
const tsCode = fs.readFileSync(path.join(__dirname, 'src', 'data', 'prefecturesData.ts'), 'utf-8');

const outputDir = path.join(__dirname, 'src', 'data', 'faqs');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const slugs = ["hokkaido", "aomori", "iwate", "miyagi", "akita", "yamagata", "fukushima", "ibaraki", "tochigi", "gunma", "saitama", "chiba", "tokyo", "kanagawa", "niigata", "toyama", "ishikawa", "fukui", "yamanashi", "nagano", "gifu", "shizuoka", "aichi", "mie", "shiga", "kyoto", "osaka", "hyogo", "nara", "wakayama", "tottori", "shimane", "okayama", "hiroshima", "yamaguchi", "tokushima", "kagawa", "ehime", "kochi", "fukuoka", "saga", "nagasaki", "kumamoto", "oita", "miyazaki", "kagoshima", "okinawa"];
const names = ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"];

for (let i = 0; i < slugs.length; i++) {
  const slug = slugs[i];
  const name = names[i];
  
  const prefStart = tsCode.indexOf(`slug: "${slug}"`);
  if (prefStart === -1) continue;
  
  const hMatch = tsCode.substring(prefStart).match(/highlights:\s*\["(.*?)",\s*"(.*?)"/);
  const h1 = hMatch ? hMatch[1] : '人気エリア';
  const h2 = hMatch ? hMatch[2] : '絶景スポット';
  
  const gMatch = tsCode.substring(prefStart).match(/gourmet:\s*\["(.*?)",\s*"(.*?)"/);
  const g1 = gMatch ? gMatch[1] : 'ご当地グルメ';
  const g2 = gMatch ? gMatch[2] : '地元の名産品';
  
  const aMatch = tsCode.substring(prefStart).match(/areaName:\s*"(.*?)"/);
  const a1 = aMatch ? aMatch[1] : '中心地';
  
  const variations = {
    q1: [
      { q: name+'でおすすめの観光地といえばどこですか？', a: name+'を訪れるなら、まずは「'+h1+'」が圧倒的におすすめです！初めての旅行でも回りやすく、周辺には見どころがギュッと詰まっていますよ。' },
      { q: '初めての'+name+'旅行、おすすめの観光地を教えて！', a: '定番ですが「'+h1+'」周辺は外せません。四季折々の魅力があり、何度訪れても新しい発見がある大人気の観光エリアです。' }
    ],
    q2: [
      { q: '車なしでも回れる'+name+'のおすすめ観光地は？', a: '交通アクセスが比較的良い「'+a1+'」周辺を拠点にすると便利です。徒歩や公共交通機関だけでも十分に'+name+'の魅力を満喫できます。' },
      { q: 'カップル向けの'+name+'おすすめ観光地はありますか？', a: 'ロマンチックな雰囲気を楽しむなら「'+h2+'」がぴったりです！夕暮れ時の景色は特に美しく、素敵な思い出になること間違いなしです。' }
    ],
    q3: [
      { q: name+'で雨の日でも楽しめるスポットは？', a: 'せっかくの旅行が雨でも大丈夫！'+name+'には天候に左右されない美術館や、ゆっくり温泉につかれる「'+a1+'」エリアの宿巡りなど、インドアで楽しめる選択肢が豊富です。' },
      { q: '子連れで'+name+'へ。雨の日楽しめる場所はありますか？', a: '屋内型の体験施設やミュージアムが充実しているのでご安心ください。特に「'+h1+'」の近くにある屋内施設は、家族連れに大人気ですよ。' }
    ],
    q4: [
      { q: '女子旅中に雨...'+name+'で雨の日楽しめる過ごし方は？', a: '「'+g2+'」などのご当地スイーツが味わえるカフェ巡りや、伝統工芸の体験ワークショップなど、屋内でも充実した時間を過ごせるのが'+name+'の魅力です。' },
      { q: name+'で雨の日楽しめる温泉街はありますか？', a: 'はい、しっとりとした雨情を感じながらの湯めぐりは格別です。「'+a1+'」周辺の温泉宿なら、館内で湯巡りやご当地グルメを楽しめるので一歩も外に出ずに満喫できます。' }
    ],
    q5: [
      { q: name+'の代表的な観光名所といえば？', a: '全国的にも有名な「'+h1+'」は、'+name+'を語る上で欠かせない観光名所です。そのスケールの大きさや歴史的背景に、きっと圧倒されるはずです。' },
      { q: '歴史を感じられる'+name+'の観光名所を教えて！', a: '風情ある街並みが残る「'+a1+'」エリアには、歴史ファンにはたまらない観光名所が集まっています。着物での散策もおすすめですよ。' }
    ],
    q6: [
      { q: '半日で回れる'+name+'の観光名所は？', a: '移動時間を短縮するなら「'+a1+'」周辺に絞るのが効率的です。代表的な観光名所がコンパクトにまとまっており、サクッと楽しめます。' },
      { q: name+'の観光名所とグルメを両方楽しむには？', a: '「'+h1+'」の周辺には、「'+g1+'」を提供する名店がずらりと並んでいます。観光名所を巡った後に、極上のご当地グルメを堪能する黄金ルートです。' }
    ],
    q7: [
      { q: name+'旅行でおすすめホテルはどう選べばいい？', a: '目的に合わせて選ぶのがコツです。観光メインなら「'+a1+'」周辺のアクセスの良いホテル、宿でゆっくりしたいなら「'+g1+'」のディナーが自慢のリゾートホテルがおすすめですよ。' },
      { q: '記念日旅行にぴったりな'+name+'のおすすめホテルは？', a: '特別な日には、「'+h1+'」の絶景を一望できるラグジュアリーホテルが一押しです。洗練されたおもてなしと非日常の空間で、最高の思い出が作れます。' }
    ],
    q8: [
      { q: 'コスパ抜群の'+name+'おすすめホテルを教えて！', a: '主要駅から少しだけ離れたエリアを狙うと、驚くほどリーズナブルで設備の整ったおすすめホテルが見つかります。浮いたお金で「'+g2+'」を楽しむのも賢い選択です。' },
      { q: '女子旅向けの'+name+'おすすめホテルは？', a: 'アメニティが豊富で、SNS映えするおしゃれなラウンジがあるホテルが大人気！館内で「'+g1+'」を使ったスイーツが楽しめるプランも女性に好評です。' }
    ],
    q9: [
      { q: '温泉と食事を楽しめる'+name+'のおすすめ宿は？', a: 'それなら「'+a1+'」エリアにある老舗旅館が一押しです。源泉掛け流しの名湯と、名物「'+g1+'」を贅沢に使った会席料理が心身を癒してくれます。' },
      { q: '両親へのプレゼント旅行。'+name+'のおすすめ宿は？', a: 'ご年配の方には、バリアフリー対応が進んでいて、部屋食でゆったりと「'+g2+'」を堪能できる落ち着いた雰囲気の和風旅館が大変喜ばれますよ。' }
    ],
    q10: [
      { q: '一人旅で泊まりたい'+name+'のおすすめ宿は？', a: '気兼ねなく過ごせるお一人様歓迎の温泉宿が増えています。「'+a1+'」周辺には、ふらっと立ち寄って「'+g1+'」を肴に地酒を楽しめる、一人旅に優しいお宿が多いです。' },
      { q: 'とにかく料理が美味しい'+name+'のおすすめ宿は？', a: '「泊まれる料亭」とも呼ばれる美食自慢の宿がおすすめです。職人の技が光る「'+g1+'」尽くしのコース料理は、わざわざ足を運ぶ価値があると食通からも絶賛されています。' }
    ]
  };

  const faqs = [
    variations.q1[getRandomInt(variations.q1.length)],
    variations.q2[getRandomInt(variations.q2.length)],
    variations.q3[getRandomInt(variations.q3.length)],
    variations.q4[getRandomInt(variations.q4.length)],
    variations.q5[getRandomInt(variations.q5.length)],
    variations.q6[getRandomInt(variations.q6.length)],
    variations.q7[getRandomInt(variations.q7.length)],
    variations.q8[getRandomInt(variations.q8.length)],
    variations.q9[getRandomInt(variations.q9.length)],
    variations.q10[getRandomInt(variations.q10.length)]
  ];

  fs.writeFileSync(path.join(outputDir, slug + '.json'), JSON.stringify(faqs, null, 2), 'utf-8');
}
console.log('Successfully generated JSON files!');
