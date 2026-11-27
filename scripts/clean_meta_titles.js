const fs = require('fs');
const path = require('path');

const titleReplacements = [
  {
    oldTitle: '【小学生の親目線】冬休みの自由研究・探究を1泊で終わらせる！化石発掘・地学・宇宙体験ができる体験型温泉宿＆ミュージアム攻略ガイド',
    newTitle: '冬休みの自由研究・探究を1泊で終わらせる！小学生が夢中になる化石発掘・星空観察・地学体験ができる体験型温泉宿5選',
    noteFile: 'note-324.md',
    slug: 'winter-vacation-elementary-science-study-trip-guide'
  },
  {
    oldTitle: '【中学生・高校生の親目線】思春期の子が本当に喜ぶ冬休み旅行！スマホ離れできる非日常グランピング＆適度な距離感を保つヴィラ泊',
    newTitle: '思春期の子どもと行く冬休み旅行！スマホ離れ＆適度な距離感を保てる焚き火グランピング＆独立寝室ヴィラ5選',
    noteFile: 'note-325.md',
    slug: 'winter-vacation-teenagers-family-trip-glamping-villa'
  },
  {
    oldTitle: '【高校生だけの初旅行】冬休みに友達と行く温泉＆街歩き！未成年同意書・格安高速バス・駅チカ宿の完全準備マニュアル',
    newTitle: '高校生だけで行く冬休みの温泉旅行！未成年同意書の準備・格安高速バス・駅チカ商店街食べ歩き宿完全攻略ガイド',
    noteFile: 'note-326.md',
    slug: 'winter-vacation-high-school-friends-first-trip-guide'
  },
  {
    oldTitle: '【大学生目線】冬休みの合宿型「夜通し語り合い＆開発・卒論・創作リトリート」！キッチン付きコテージ＆大画面プロジェクター宿',
    newTitle: '大学生の冬休み開発・卒論・サークル合宿！夜通し語り合える自炊キッチン＆大画面プロジェクター付き貸切コテージ5選',
    noteFile: 'note-327.md',
    slug: 'winter-vacation-college-students-retreat-work-cabin'
  },
  {
    oldTitle: '【小学生の親目線】新学年応援！春休みの「プチ冒険＆自己肯定感アップ」体験型温泉リゾート攻略ガイド',
    newTitle: '新学年への自信を育む春休み家族旅行！小学生がプチ冒険できるアスレチック＆温水プール完備の体験型温泉リゾート5選',
    noteFile: 'note-328.md',
    slug: 'spring-vacation-elementary-nature-camp-onsen-guide'
  },
  {
    oldTitle: '【中学生・高校生の親目線】思春期の子のテンションMAX！テーマパーク満喫＆大人が疲れ果てない駅前オフィシャルホテル攻略ガイド',
    newTitle: '思春期の子と行くディズニー＆USJ春休み旅行！パーク内別行動×大人が疲れ果てない駅前オフィシャルホテル5選',
    noteFile: 'note-329.md',
    slug: 'spring-vacation-teenagers-disney-usj-partner-hotels-guide'
  },
  {
    oldTitle: '【高校生だけの卒業旅行】春休みに友達と行く一生の思い出！USJ＆温泉テーマパーク・格安学割ホテル完全攻略ガイド',
    newTitle: '高校最後の春休みに友達と行く卒業旅行！制服ユニバ＆温泉テーマパークを満喫する1万円台格安学割ホテル5選',
    noteFile: 'note-330.md',
    slug: 'spring-vacation-high-school-graduation-trip-usj-onsen-guide'
  },
  {
    oldTitle: '【大学生目線】春休みの先取り初夏！沖縄本島・石垣島・宮古島で過ごす格安レンタカー＆オーシャンビューリゾート攻略ガイド',
    newTitle: '大学生の春休みは本州を脱出して初夏へ！格安レンタカー＆割り勘で泊まる沖縄・石垣島・宮古島オーシャンビューリゾート5選',
    noteFile: 'note-331.md',
    slug: 'spring-vacation-college-students-early-summer-island-trip-guide'
  },
  {
    oldTitle: '【中高受験生の親目線】冬休みの直前追い込み＆合格祈願！静音・加湿空気清浄機・湯島天満宮至近の受験特化ホテル攻略ガイド',
    newTitle: '冬休みの直前追い込み＆合格祈願！家庭の雑音を遮断する静音デスク・加湿空気清浄機完備の受験生応援ホテル5選',
    noteFile: 'note-332.md',
    slug: 'winter-vacation-exam-students-study-stay-hotels-guide'
  },
  {
    oldTitle: '【祖父母・親・孫の三世代目線】冬休みに家族全員が幸せになる！移動負担ゼロ・バリアフリー・個室料亭の老舗名湯旅館5選',
    newTitle: '祖父母・親・孫の三世代で楽しむ冬休み温泉旅行！移動負担ゼロ・バリアフリー・個室料亭の老舗名湯旅館5選',
    noteFile: 'note-333.md',
    slug: 'winter-vacation-three-generations-family-onsen-guide'
  },
  {
    oldTitle: '【年末年始・冬休みの一人旅】誰にも邪魔されない至福の時間！源泉かけ流し・読書ラウンジ・おこもり湯治宿5選',
    newTitle: '年末年始・冬休みを誰にも邪魔されず過ごす至福の一人旅！源泉かけ流し・読書ラウンジ・おこもり温泉湯治宿5選',
    noteFile: 'note-334.md',
    slug: 'winter-vacation-solo-retreat-book-onsen-guide'
  },
  {
    oldTitle: '【春休み女子旅】写真映えと美肌温泉に癒やされる！浴衣街歩き＆デザインホテルの金沢・熱海・京都・倉敷厳選5宿',
    newTitle: '春休みの女子旅＆母娘旅行！可愛い色浴衣で桜・歴史街歩き＆美肌温泉を満喫する金沢・熱海・京都・倉敷のデザインホテル5選',
    noteFile: 'note-335.md',
    slug: 'spring-vacation-girls-art-hotspring-trip-guide'
  },
  {
    oldTitle: '【初心者ドライバー・学生目線】免許取り立てでも安心！絶景海岸線ドライブ＆オーシャンビュー温泉ホテル5選（伊豆・伊良湖・琵琶湖）',
    newTitle: '免許取り立てでも安心の春休み初ドライブ！道幅が広い海沿い直線ルート＆無料大駐車場完備の絶景温泉ホテル5選',
    noteFile: 'note-336.md',
    slug: 'spring-vacation-new-drivers-scenic-coastal-drive-hotels-guide'
  },
  {
    oldTitle: '【新社会人・卒業記念目線】4月から働く自分への投資！学生最後のご褒美に泊まりたい最高峰ラグジュアリー温泉宿5選',
    newTitle: '4月から働く自分への投資！学生最後の春休みに泊まりたい最高峰スモールラグジュアリー温泉宿5選',
    noteFile: 'note-337.md',
    slug: 'spring-vacation-new-graduates-luxury-celebration-stay-guide'
  }
];

const postsDir = path.join(__dirname, '..', 'src', 'data', 'posts');

for (const item of titleReplacements) {
  // 1. JSON ファイル更新
  const jsonPath = path.join(postsDir, `${item.slug}.json`);
  if (fs.existsSync(jsonPath)) {
    let jsonContent = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(jsonContent);
    data.title = item.newTitle;
    if (data.review) {
      data.review = data.review.replaceAll(item.oldTitle, item.newTitle);
    }
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✓ Updated JSON: ${jsonPath}`);
  }

  // 2. note-*.md ファイル更新
  const notePath = path.join(__dirname, '..', item.noteFile);
  if (fs.existsSync(notePath)) {
    let noteContent = fs.readFileSync(notePath, 'utf8');
    noteContent = noteContent.replaceAll(item.oldTitle, item.newTitle);
    fs.writeFileSync(notePath, noteContent, 'utf8');
    console.log(`✓ Updated Note: ${notePath}`);
  }
}

console.log('All titles successfully replaced!');
