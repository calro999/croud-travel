// scripts/fix_encoding_and_note_links.js
const fs = require('fs');
const path = require('path');

const replacements = [
  [/富\uFFFD+急行線/g, '富士急行線'],
  [/【電車・バス】\uFFFD+口湖駅/g, '【電車・バス】河口湖駅'],
  [/JR長野駅\uFFFD+り/g, 'JR長野駅より'],
  [/徒歩7\uFFFD+/g, '徒歩7分'],
  [/新潟駅や空港か\uFFFD+最も/g, '新潟駅や空港から最も'],
  [/ＪＲ\uFFFD+みのやま温泉駅/g, 'ＪＲかみのやま温泉駅'],
  [/東唐津駅\uFFFD+り/g, '東唐津駅より'],
  [/「金沢駅・兼六園」よ\uFFFD+/g, '「金沢駅・兼六園」より'],
  [/桟橋より徒歩にて約１\uFFFD+分/g, '桟橋より徒歩にて約１２分'],
  [/島口駅\(JR・広電\)\uFFFD+ら/g, '島口駅(JR・広電)から'],
  [/山陽本線『大\uFFFD+浦駅』/g, '山陽本線『大野浦駅』'],
  [/ＪＲ琴\uFFFD+駅下車/g, 'ＪＲ琴平駅下車'],
  [/\uFFFD+Ｒ高松駅/g, 'ＪＲ高松駅'],
  [/名神京都\uFFFD+Ｉ．Ｃ/g, '名神京都東Ｉ．Ｃ'],
  [/京都駅\uFFFD+り20分/g, '京都駅より20分'],
  [/JR　近江\uFFFD+幡駅/g, 'JR　近江八幡駅'],
  [/より約１分\uFFFD+ＪＲびわこ線/g, 'より約１分／ＪＲびわこ線'],
  [/京\uFFFD+駅八条口/g, '京都駅八条口'],
  [/京都市役所\uFFFD+駅/g, '京都市役所前駅'],
  [/ＪＲ日光駅よりバス約\uFFFD+分/g, 'ＪＲ日光駅よりバス約5分'],
  [/日光宇都宮道\uFFFD+日光IC/g, '日光宇都宮道路日光IC'],
  [/国道１２\uFFFD+号/g, '国道１２１号'],
  [/リゾート\uFFFD+中湖/g, 'リゾート山中湖'],
  [/プライベートグラン\uFFFD+ング/g, 'プライベートグランピング'],
  [/JR嬉野温泉駅か\uFFFD+車で/g, 'JR嬉野温泉駅から車で'],
  [/武雄温泉駅より約１\uFFFD+ロ/g, '武雄温泉駅より約１キロ'],
  [/ＪＲ佐世\uFFFD+線/g, 'ＪＲ佐世保線'],
  [/車で15分　\uFFFD+賀駅/g, '車で15分　佐賀駅'],
  [/バス停下車\uFFFD+徒歩/g, 'バス停下車、徒歩'],
  [/\uFFFD+豆箱根鉄道/g, '伊豆箱根鉄道'],
  [/送\uFFFD+時間/g, '送迎時間'],
  [/ＪＲ　\uFFFD+森駅/g, 'ＪＲ　青森駅'],
  [/三沢空港より車\uFFFD+約40分/g, '三沢空港より車で約40分'],
  [/ＪＲ足利駅よ\uFFFD+徒歩/g, 'ＪＲ足利駅より徒歩'],
  [/東武\uFFFD+勢崎線/g, '東武伊勢崎線'],
  [/有り\uFFFD+１００台/g, '有り　１００台'],
  [/ホライゾン・ウ\uFFFD+ング/g, 'ホライゾン・ウイング'],
  [/熱海駅からタクシーで\uFFFD+分/g, '熱海駅からタクシーで5分'],
  [/◆送迎有◆\uFFFD+の他/g, '◆送迎有◆その他'],
  [/JR松本駅よりバ\uFFFD+で約/g, 'JR松本駅よりバスで約'],
  [/松本ＢＴより\uFFFD+信州大学行/g, '松本ＢＴより「信州大学行'],
  [/松本駅お城口より徒\uFFFD+4分/g, '松本駅お城口より徒歩4分'],
  [/\uFFFD+車】北陸自動車道/g, '【車】北陸自動車道'],
  [/城崎温泉駅より徒\uFFFD+７分/g, '城崎温泉駅より徒歩７分'],
  [/金津ＩＣよ\uFFFD+15分/g, '金津ＩＣより15分'],
  [/5ツ星\uFFFD+認定の宿/g, '5ツ星宿認定の宿'],
  [/人数分\uFFFD+ミネラルウォーター/g, '人数分のミネラルウォーター'],
  [/三重交通バス利\uFFFD+で/g, '三重交通バス利用で'],
  [/近鉄　桑\uFFFD+駅/g, '近鉄　桑名駅'],
  [/員弁方面へ車\uFFFD+約4分/g, '員弁方面へ車で約4分'],
  [/仙台駅西口バス\uFFFD+ール/g, '仙台駅西口バスプール'],
  [/ご宿泊の方\uFFFD+1泊につき/g, 'ご宿泊の方は1泊につき'],
  [/\uFFFD+しいホテルの愉しみ方/g, '新しいホテルの愉しみ方'],
  [/\uFFFD+/g, '']
];

function cleanFileContent(str) {
  let out = str;
  for (const [regex, rep] of replacements) {
    out = out.replace(regex, rep);
  }
  return out;
}

// 1. Clean live data files
for (const f of ["scripts/remake_266_275_live_data.json", "scripts/batch_276_280_live_data.json", "scripts/batch_281_285_live_data.json"]) {
  if (fs.existsSync(f)) {
    const orig = fs.readFileSync(f, 'utf8');
    const cleaned = cleanFileContent(orig);
    if (orig !== cleaned) {
      fs.writeFileSync(f, cleaned, 'utf8');
      console.log(`Cleaned encoding in ${f}`);
    }
  }
}

// 2. Clean all JSON files in src/data/posts/
const postsDir = "src/data/posts";
for (const f of fs.readdirSync(postsDir).filter(x => x.endsWith('.json'))) {
  const full = path.join(postsDir, f);
  const orig = fs.readFileSync(full, 'utf8');
  if (orig.includes('\uFFFD')) {
    const cleaned = cleanFileContent(orig);
    fs.writeFileSync(full, cleaned, 'utf8');
    console.log(`Cleaned encoding in ${full}`);
  }
}

// 3. Update note-276.md to note-285.md with clean encoding, slug in frontmatter, and production Web article links
const noteToSlug276_285 = {
  276: "autumn-fuji-kawaguchiko-momiji-festival-lake-view-onsen-hotels-guide",
  277: "winter-sendai-hikari-no-pageant-akiu-onsen-hotels-guide",
  278: "autumn-winter-aomori-oirase-hyobaku-towada-hakkoda-onsen-hotels-guide",
  279: "autumn-hiroshima-miyajima-momijidani-itsukushima-onsen-hotels-guide",
  280: "autumn-kagawa-ritsurin-garden-lightup-kotohira-onsen-hotels-guide",
  281: "autumn-nikko-momiji-lightup-toshogu-onsen-hotels-guide",
  282: "autumn-saga-arita-touki-mifuneyama-lightup-ureshino-takeo-onsen-hotels-guide",
  283: "autumn-shuzenji-momiji-festival-bamboo-lightup-izu-onsen-hotels-guide",
  284: "autumn-winter-kanazawa-kenrokuen-yukitsuri-crab-kaiseki-onsen-hotels-guide",
  285: "autumn-winter-karuizawa-kumobaike-illumination-resort-hotels-guide"
};

for (const [numStr, slug] of Object.entries(noteToSlug276_285)) {
  const noteFile = `note-${numStr}.md`;
  if (!fs.existsSync(noteFile)) continue;
  let txt = cleanFileContent(fs.readFileSync(noteFile, 'utf8'));
  const prodUrl = `https://croud-travel.pages.dev/posts/${slug}/`;

  // Ensure slug is in frontmatter
  if (!txt.includes(`slug: "${slug}"`)) {
    txt = txt.replace(/^(---\ntitle:\s*"[^"]+"\n)/, `$1slug: "${slug}"\n`);
  }

  // Extract title
  const titleMatch = txt.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : "完全版ガイド";

  // Add intro CTA and bottom CTA if not already present
  if (!txt.includes(prodUrl)) {
    // Insert intro CTA before first horizontal rule after title
    const firstHrIdx = txt.indexOf('\n---\n', txt.indexOf('\n# '));
    if (firstHrIdx !== -1) {
      const introCta = `\n> 💡 **写真付きの完全版比較表・渋滞回避マップ・1泊2日モデルコースはWebサイト本編でも公開中です！**  \n> 👉 [【完全版WEBガイド】${title} の詳細ページを見る](${prodUrl})\n`;
      txt = txt.slice(0, firstHrIdx) + introCta + txt.slice(firstHrIdx);
    }

    // Append bottom CTA
    const bottomCta = `\n---\n\n## 🌐 さらに詳しい宿比較表・周辺スポット写真はWeb本編へ！\n\n本記事でご紹介した厳選宿の客室写真・スペック比較表や、周辺の立ち寄りグルメ・駐車場攻略を含む完全版ガイドは以下のWebサイトでご覧いただけます。旅の計画にぜひお役立てください！\n\n👉 **[【完全版WEBガイド】${title} を読む](${prodUrl})**\n`;
    txt = txt.trimEnd() + '\n' + bottomCta;
  }

  fs.writeFileSync(noteFile, txt, 'utf8');
  console.log(`Updated ${noteFile} -> linked to ${prodUrl}`);
}
