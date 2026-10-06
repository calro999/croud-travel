const fs = require('fs');

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function cleanText(text) {
  if (!text) return '';
  return text.replace(/[【】［］\r\n]/g, ' ').replace(/\s+/g, ' ').trim();
}

function cleanHotelName(name) {
  if (!name) return '';
  return name.replace(/（[^）]+）/g, '').replace(/\s+/g, ' ').trim();
}

function generateIndividualSections(target, cache, secData) {
  const content = fs.readFileSync(target.pagePath, 'utf8');

  // 1. Gather all associated hotels for this page
  const rawMatches = (content.match(/HOTEL%2F(\d+)%2F|HOTEL\/(\d+)\//g) || []);
  const ids = [...new Set(rawMatches.map(m => m.match(/(\d+)/)[1]))];
  let hotels = ids.map(id => cache[id]).filter(Boolean);

  if (hotels.length === 0 && secData[target.slug]) {
    for (const sec of Object.values(secData[target.slug])) {
      if (sec.hotels) {
        for (const h of sec.hotels) {
          if (h && h.hotelName) hotels.push(h);
        }
      }
    }
  }

  // Deduplicate hotels
  const uniqueHotels = [];
  const seenHotelKeys = new Set();
  for (const h of hotels) {
    const key = h.hotelNo || h.hotelName;
    if (!seenHotelKeys.has(key)) {
      seenHotelKeys.add(key);
      uniqueHotels.push(h);
    }
  }

  const pageTitle = cleanText(
    (target.title || target.slug)
      .replace(/【.*?】/g, '')
      .replace(/｜.*$/g, '')
      .replace(/\|.*$/g, '')
  );

  const h1 = uniqueHotels[0] || null;
  const h2 = uniqueHotels[1] || null;

  const h1Name = h1 ? cleanHotelName(h1.hotelName) : '';
  const h2Name = h2 ? cleanHotelName(h2.hotelName) : '';
  const h1Station = (h1 && h1.nearestStation) ? cleanText(h1.nearestStation) + '駅' : '';
  const h1Access = (h1 && h1.access) ? cleanText(h1.access.replace(/。.*$/, '')) : '';
  const h1Special = (h1 && h1.hotelSpecial) ? cleanText(h1.hotelSpecial) : '';
  const h1Address = (h1 && h1.address1) ? `${cleanText(h1.address1)}${cleanText(h1.address2 || '')}` : '';

  let modelCourseHtml = '';
  let faqHtml = '';

  if (uniqueHotels.length > 0) {
    // Completely unique text derived from hotel properties
    const arrivalText = h1Station 
      ? `${h1Station}よりアクセス。${h1Access ? `${h1Access}。` : '最寄り駅周辺の風情を感じながら宿へ移動。'}`
      : (h1Access ? `${h1Access}で現地へ到着。` : `${h1Address || '現地'}へ到着後、チェックイン前の散策へ。`);

    const checkinText = h1Special
      ? `「${h1Name}」にチェックイン。${h1Special.slice(0, 50)}などの宿の特徴に期待を高めつつ客室へ。`
      : `「${h1Name}」へチェックイン。落ち着いた空間で旅の荷を解き、ゆったりとした時間をスタート。`;

    const eveningText = `「${h1Name}」の湯処へ。${h1Special ? `${h1Special.slice(0, 35)}とともに` : '日頃の疲れを癒やす湯浴みとともに'}、夕暮れの特別な寛ぎを満喫。`;

    const dinnerText = `「${h1Name}」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。`;

    const morningBathText = `朝の光が差し込む「${h1Name}」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。`;

    const breakfastText = `「${h1Name}」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。`;

    const departureText = h2Name
      ? `チェックアウト後は近隣エリアを観光。本記事でご紹介した「${h2Name}」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。`
      : `チェックアウト後は${h1Address || '周辺'}の観光名所や特産品店へ立ち寄り。旅の思い出を胸に大満足で帰路へ。`;

    modelCourseHtml = `        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】${escapeXml(h1Name)}を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> ${escapeXml(arrivalText)}</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> ${escapeXml(checkinText)}</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> ${escapeXml(eveningText)}</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> ${escapeXml(dinnerText)}</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> ${escapeXml(morningBathText)}</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> ${escapeXml(breakfastText)}</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> ${escapeXml(departureText)}</li>
              </ul>
            </div>
          </div>
        </section>`;

    const faqAccess = `「${h1Name}」へは、${h1Access || '公共交通機関またはお車でのアクセスが可能です'}。${h1Station ? `最寄りの${h1Station}からの経路案内も充実しています。` : '詳しい送迎情報や道順は楽天トラベルの最新宿情報をご確認ください。'}`;

    const faqSpecial = `「${h1Name}」は${h1Special ? `『${h1Special.slice(0, 45)}』という点` : '上質な客室空間とおもてなし'}が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。`;

    const faqDiff = h2Name
      ? `「${h1Name}」と「${h2Name}」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。`
      : `「${h1Name}」では季節ごとに異なる宿泊プランや料理プランが用意されています。ご旅行の人数や滞在スタイルに合わせて最適なプランをお選びいただけます。`;

    faqHtml = `        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と${escapeXml(h1Name)}の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「${escapeXml(h1Name)}」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. ${escapeXml(faqAccess)}
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「${escapeXml(h1Name)}」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. ${escapeXml(faqSpecial)}
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. ${escapeXml(faqDiff)}
              </p>
            </details>
          </div>
        </section>`;
  } else {
    // Non-hotel guide pages
    const guideMorningText = `「${pageTitle}」の目的地へ移動。午前中の比較的混雑が穏やかな時間帯から観光をスタート。`;
    const guideLunchText = `周辺で話題のご当地グルメランチを堪能。地域の特産品を味わい旅のエネルギーを満たす。`;
    const guideAfternoonText = `「${pageTitle}」で注目される代表スポットをじっくり散策。見どころを巡り写真撮影や街歩きを楽しむ。`;
    const guideEveningText = `夕刻の落ち着いた雰囲気の中、地元食材を活かした夕食を楽しんで心地よい一日の締めくくりへ。`;
    const guideDay2MorningText = `爽やかな朝の空気を感じながら2日目をスタート。朝の名所や散策路を歩き、心地よい時間を満喫。`;
    const guideDay2DepartureText = `地域の特産品が集まる直売所やお土産処へ立ち寄り。「${pageTitle}」の思い出とともに帰路へ。`;

    modelCourseHtml = `        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】${escapeXml(pageTitle)}を満喫するおすすめモデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜主要スポット散策と名物体験</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">午前〜</strong> ${escapeXml(guideMorningText)}</li>
                <li>・<strong className="text-stone-800">12:30〜</strong> ${escapeXml(guideLunchText)}</li>
                <li>・<strong className="text-stone-800">14:30〜</strong> ${escapeXml(guideAfternoonText)}</li>
                <li>・<strong className="text-stone-800">18:00〜</strong> ${escapeXml(guideEveningText)}</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝の観光〜お土産探しと快適な帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">08:30〜</strong> ${escapeXml(guideDay2MorningText)}</li>
                <li>・<strong className="text-stone-800">11:30〜</strong> ${escapeXml(guideDay2DepartureText)}</li>
              </ul>
            </div>
          </div>
        </section>`;

    faqHtml = `        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と${escapeXml(pageTitle)}の旅ノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「${escapeXml(pageTitle)}」を効率よく巡るコツは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 人気スポットは午前中の早い時間帯に訪れることで、混雑を避けてゆっくり楽しめます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 事前準備や持ち物で注意すべきポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 歩きやすい靴や現地の気候に合わせた温度調節しやすい服装を意識すると、終日快適に行動できます。
              </p>
            </details>
          </div>
        </section>`;
  }

  return `${modelCourseHtml}\n\n${faqHtml}`;
}

module.exports = { generateIndividualSections };
