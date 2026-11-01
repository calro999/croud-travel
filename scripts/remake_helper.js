// scripts/remake_helper.js
const fs = require('fs');
const path = require('path');

function cleanText(str) {
  if (!str) return '';
  return String(str).replace(/\uFFFD+/g, ' ').replace(/\s+/g, ' ').trim();
}

function renderArticle({
  noteNum,
  slug,
  title,
  description,
  prefecture,
  area,
  categories,
  keywords,
  recommendedFor,
  nearbySpots,
  nearbyGourmet,
  hotSpringInfo,
  parkingInfo,
  mealAvailability,
  familyFriendly,
  editorTip,
  bannerTag,
  bannerText,
  bannerBtnText,
  introTitle,
  introP1,
  introP2,
  guideTitle,
  highlightTitle,
  highlights,
  strategyTitle,
  strategies,
  hotelsSectionTitle,
  hotelConfigs,
  wikiConfigs,
  modelCourseTitle,
  day1Title,
  day1Text,
  day2Title,
  day2Text,
  faqs,
  relatedLinks,
  rawData
}) {
  const hotels = rawData.hotels;
  const wiki = rawData.wiki;

  const h0 = hotels[0];
  const minCharge = Math.min(...hotels.map(h => h.hotelMinCharge || 20000));
  const prodUrl = `https://croud-travel.pages.dev/posts/${slug}/`;

  const featuredHotels = hotels.map((h, i) => ({
    name: cleanText(h.hotelName),
    rating: String(h.reviewAverage || 4.5),
    price: `¥${(h.hotelMinCharge || 15000).toLocaleString()}〜`,
    url: h.affiliateUrl
  }));

  const hotelCardsHtml = hotels.map((h, idx) => {
    const cfg = hotelConfigs[idx];
    const r = h.ratings || {};
    const ratingBadges = [];
    if (r.dinnerAverage > 0) ratingBadges.push(`夕食 ★${r.dinnerAverage}`);
    if (r.breakfastAverage > 0) ratingBadges.push(`朝食 ★${r.breakfastAverage}`);
    if (r.bathAverage > 0) ratingBadges.push(`風呂 ★${r.bathAverage}`);
    if (r.serviceAverage > 0) ratingBadges.push(`接客 ★${r.serviceAverage}`);
    if (r.cleanlinessAverage > 0) ratingBadges.push(`清潔感 ★${r.cleanlinessAverage}`);
    if (r.locationAverage > 0) ratingBadges.push(`立地 ★${r.locationAverage}`);

    const cleanAccess = cleanText(h.access);
    const cleanAddr = cleanText(`${h.address1 || ''}${h.address2 || ''}`);
    const cleanName = cleanText(h.hotelName);

    return `
<!-- 宿${idx + 1}: ${cleanName} -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 ${cfg.badgeClass} font-black text-xs rounded-full">${cfg.badgeText}</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">${idx + 1}. ${cleanName}（${cleanAddr}）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl shrink-0">⭐ 楽天トラベル評価 ${h.reviewAverage}（${h.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${h.hotelImageUrl}" alt="${cleanName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${h.roomImageUrl || h.hotelImageUrl}" alt="${cleanName} 客室・館内" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">${cfg.catchphrase}</p>
      <p>${cfg.body1}</p>
      <p>${cfg.body2}</p>
      ${ratingBadges.length > 0 ? `<div class="flex flex-wrap gap-1.5 pt-1">${ratingBadges.map(b => `<span class="px-2 py-0.5 bg-stone-100 text-stone-800 font-bold text-[11px] rounded-md">${b}</span>`).join('')}</div>` : ''}
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${cleanAddr}</p>
        <p><strong>【アクセス】</strong> ${cleanAccess}</p>
        <p><strong>【宿の特色・設備】</strong> ${cfg.facilities}</p>
        <p><strong>【現地攻略アドバイス】</strong> ${cfg.localTip}</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(h.hotelMinCharge || 15000).toLocaleString()}〜</span>
        <a href="${h.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 ${cfg.btnClass} text-white font-black text-xs rounded-xl shadow transition text-center">
          ${cleanName}の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>`;
  }).join('\n');

  const wikiSpotsHtml = wikiConfigs.map(wc => {
    const w = wiki[wc.key] || {};
    const imgUrl = w.thumbnail || h0.hotelImageUrl;
    const extractText = cleanText(w.extract || wc.fallbackDesc);
    return `
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${imgUrl}" alt="${wc.title}" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 ${wc.tagClass} font-bold text-[11px] rounded-md">${wc.tagText}</span>
        <h3 class="text-base font-bold text-stone-900">${wc.title}</h3>
        <p>${extractText}</p>
        <p class="text-stone-600"><strong>【11月の見どころ＆宿からのアクセス】</strong> ${wc.accessTip}</p>
      </div>
    </div>
  </div>`;
  }).join('\n');

  const faqHtml = faqs.map((f, i) => `
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q${i + 1}. ${f.q}</h3>
    <p class="text-stone-600">A. ${f.a}</p>
  </div>`).join('\n');

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-red-950 via-amber-900 to-stone-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🍁</span><span>${bannerTag}</span>
    </div>
    <p class="text-xs text-stone-200">
      ${bannerText}
    </p>
  </div>
  <a href="${h0.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    ${bannerBtnText} →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 mb-4">
  ${introTitle}
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  ${introP1}
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  ${introP2}
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-6">
  🎪 ${guideTitle}
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-red-100 text-red-800 font-extrabold text-xs rounded-lg">鑑賞・味覚ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">${highlightTitle}</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      ${highlights.map((item, idx) => `<p>${idx + 1}. <strong>${item.label}:</strong> ${item.text}</p>`).join('\n      ')}
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">混雑回避＆現地対策</span>
      <h3 class="text-base font-bold text-stone-900">${strategyTitle}</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      ${strategies.map(s => `<p><strong>【${s.label}】</strong> ${s.text}</p>`).join('\n      ')}
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🏨 ${hotelsSectionTitle}
</h2>

${hotelCardsHtml}

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  📸 宿とあわせて巡りたい観光名所＆イベント会場ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  各宿の周辺に位置する代表的な紅葉名所・歴史社寺・祭礼スポットの背景と、11月ならではの効率的な訪問ルートを整理しました。
</p>

<div class="space-y-6 my-6">
${wikiSpotsHtml}
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🗺️ ${modelCourseTitle}
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-red-50/60 to-amber-50/40 border border-red-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">${day1Title}</h3>
    <p>${day1Text}</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">${day2Title}</h3>
    <p>${day2Text}</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  ❓ 11月旅行のよくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
${faqHtml}
</div>

<div class="my-8 p-6 rounded-3xl bg-red-50/60 border border-red-200">
  <h3 class="text-sm font-bold text-red-950 mb-2">🔗 あわせてチェックしたい秋冬の厳選旅行ガイド</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    ${relatedLinks.map(l => `<li>👉 <a href="${l.url}" class="text-red-800 hover:text-red-600 underline">${l.text}</a></li>`).join('\n    ')}
  </ul>
</div>
`;

  const postData = {
    id: slug,
    slug: slug,
    title: title,
    description: description,
    prefecture: prefecture,
    area: area,
    image: h0.hotelImageUrl,
    other_images: hotels.slice(1).map(h => h.hotelImageUrl),
    hotel_name: `${cleanText(h0.hotelName)}・${cleanText(hotels[1]?.hotelName || '')} ほか`,
    affiliate_url: h0.affiliateUrl,
    categories: categories,
    price: `¥${minCharge.toLocaleString()}〜`,
    rating: h0.reviewAverage || 4.7,
    review_count: h0.reviewCount || 500,
    date: "2026-11-01",
    is_special_feature: true,
    featured_hotels: featuredHotels,
    recommended_for: recommendedFor,
    nearby_tourist_spots: nearbySpots,
    nearby_gourmet: nearbyGourmet,
    hot_spring_info: hotSpringInfo,
    parking_info: parkingInfo,
    meal_availability: mealAvailability,
    family_friendly: familyFriendly,
    editor_tip: editorTip,
    keywords: keywords,
    review: reviewHtml,
    content: reviewHtml
  };

  // Rich Markdown for note-XXX.md (for posting to note.com, driving readers to the production Web article)
  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "2026-11-01"
prefecture: "${prefecture}"
area: "${area}"
tags: ${JSON.stringify(categories)}
---

# ${title}

${introP1}

${introP2}

> 💡 **写真付きの完全版比較表・渋滞回避マップ・1泊2日モデルコースはWebサイト本編でも公開中です！**  
> 👉 [【完全版WEBガイド】${title} の詳細ページを見る](${prodUrl})

---

## 🎪 ${guideTitle}

### ${highlightTitle}
${highlights.map((h, i) => `${i + 1}. **${h.label}**: ${h.text}`).join('\n')}

### ${strategyTitle}
${strategies.map(s => `- **【${s.label}】** ${s.text}`).join('\n')}

---

## 🏨 ${hotelsSectionTitle}

${hotels.map((h, idx) => {
  const cfg = hotelConfigs[idx];
  const r = h.ratings || {};
  const cleanAccess = cleanText(h.access);
  const cleanAddr = cleanText(`${h.address1 || ''}${h.address2 || ''}`);
  const cleanName = cleanText(h.hotelName);
  return `### ${idx + 1}. ${cleanName}（${cleanAddr}）

![${cleanName}](${h.hotelImageUrl})

**${cfg.catchphrase}**

${cfg.body1}

${cfg.body2}

- **楽天トラベル総合評価**: ★${h.reviewAverage}（レビュー数 ${h.reviewCount}件）
- **項目別評価**: 接客 ★${r.serviceAverage || '-'} / 夕食 ★${r.dinnerAverage || '-'} / 朝食 ★${r.breakfastAverage || '-'} / 風呂 ★${r.bathAverage || '-'} / 清潔感 ★${r.cleanlinessAverage || '-'}
- **所在地**: ${cleanAddr}
- **アクセス**: ${cleanAccess}
- **現地攻略アドバイス**: ${cfg.localTip}
- **最安宿泊目安**: 1名利用時 ¥${(h.hotelMinCharge || 15000).toLocaleString()}〜
- 👉 [楽天トラベルで「${cleanName}」の宿泊プラン・空室状況を見る](${h.affiliateUrl})`;
}).join('\n\n---\n\n')}

---

## 📸 宿とあわせて巡りたい観光名所ガイド

${wikiConfigs.map(wc => {
  const w = wiki[wc.key] || {};
  return `- **${wc.title}（${wc.tagText}）**: ${cleanText(w.extract || wc.fallbackDesc)}\n  - **アクセス＆見どころ**: ${wc.accessTip}`;
}).join('\n\n')}

---

## 🗺️ ${modelCourseTitle}

- **${day1Title}**
  ${day1Text}
- **${day2Title}**
  ${day2Text}

---

## ❓ よくある質問（FAQ）

${faqs.map((f, i) => `**Q${i + 1}. ${f.q}**  \nA. ${f.a}`).join('\n\n')}

---

## 🌐 さらに詳しい宿比較表・周辺スポット写真はWeb本編へ！

本記事でご紹介した4宿の客室写真・スペック比較表や、周辺の立ち寄りグルメ・駐車場攻略を含む完全版ガイドは以下のWebサイトでご覧いただけます。旅の計画にぜひお役立てください！

👉 **[【完全版WEBガイド】${title} を読む](${prodUrl})**
`;

  return { postData, noteMarkdown };
}

module.exports = { renderArticle, cleanText };
