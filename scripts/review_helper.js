/**
 * review_helper.js
 * 楽天APIの生クチコミからゴミ（HTML、日付、リンク、途切れ）および
 * ネガティブワード（詰まり、最悪、汚い、不満等）を完全に排除し、
 * 宿の魅力を引き出す上質な宿泊体験レビューへと昇華させる共通モジュール。
 */

function cleanAndCurateReview(rawText, hotelName = '') {
  if (!rawText || typeof rawText !== 'string') {
    return '温泉の泉質が素晴らしく、温かいおもてなしとお料理に心から癒やされました。';
  }

  // 1. HTMLタグ・リンク・途切れゴミの除去
  let t = rawText.replace(/<[^>]+>/g, '')
                 .replace(/https?:\/\/[^\s\u3000\n"'<]+/g, '')
                 .replace(/他の画像やクチコミの詳細はこちら[^\n"']*/g, '')
                 .replace(/クチコミの詳細はこちら[^\n"']*/g, '')
                 .replace(/つづきはこちら[^\n"']*/g, '')
                 .replace(/\d{4}[-/年]\d{1,2}[-/月]\d{1,2}(?:日)?(?:\s+\d{1,2}:\d{2}(?::\d{2})?)?(?:投稿)?/g, '')
                 .replace(/[…\.]+\s*$/g, '')
                 .replace(/[■◆★☆●▼▲［］♪]/g, ' ')
                 .trim();

  // 2. 句読点で分割してネガティブセンテンスを排除
  const sentences = t.split(/([。！!？?])/);
  const badKeywords = [
    '排水', '詰まり', '最悪', '不満', '汚い', '臭い', '冷たかっ', '態度が悪',
    'うるさ', '狭すぎ', '古いだけ', 'がっかり', '二度と', '残念', '食べたいものが少な', '美味しくない'
  ];

  let cleaned = [];
  for (let i = 0; i < sentences.length; i += 2) {
    const s = (sentences[i] || '').trim();
    const sep = sentences[i + 1] || '。';
    if (!s) continue;
    if (badKeywords.some(bw => s.includes(bw))) continue;
    cleaned.push(s + sep);
  }

  let res = cleaned.join('').trim();

  // 3. 短すぎる場合や文字化けの場合は宿の魅力を引き出す高評価レビューへ置換
  if (res.length < 20 || !/[\u3040-\u309F\u30A0-\u30FF]/.test(res)) {
    res = 'お風呂の泉質が素晴らしく、入浴後もお肌がすべすべで温もりが長く続きました。スタッフの方々の気配りも温かく、夕食のお料理も素材の味が引き立っていて大満足です。';
  }

  return res.replace(/\s+/g, ' ').trim();
}

module.exports = { cleanAndCurateReview };
