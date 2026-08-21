require('dotenv').config();
const https = require('https');
const fs = require('fs');
const path = require('path');

const appId = process.env.RAKUTEN_APPLICATION_ID;
const accessKey = process.env.RAKUTEN_ACCESS_KEY;
const affId = process.env.RAKUTEN_AFFILIATE_ID;

const CACHE_DIR = path.join(__dirname, 'cache', 'rakuten_hotel_details');
const POSTS_DIR = path.join(__dirname, 'src', 'data', 'posts');

if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchHotelDetailFromApi(hotelNo) {
  return new Promise((resolve, reject) => {
    const url = `https://openapi.rakuten.co.jp/engine/api/Travel/HotelDetailSearch/20260731?format=json&hotelNo=${hotelNo}&responseType=large&applicationId=${appId}&accessKey=${accessKey}&affiliateId=${affId}`;
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.hotels && json.hotels.length > 0) {
            const h = {};
            json.hotels[0].hotel.forEach(obj => Object.assign(h, obj));
            resolve(h);
          } else {
            resolve(null);
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function searchHotelByName(keyword) {
  return new Promise((resolve, reject) => {
    const url = `https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20260731?format=json&keyword=${encodeURIComponent(keyword)}&applicationId=${appId}&accessKey=${accessKey}&affiliateId=${affId}&hits=1`;
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.hotels && json.hotels.length > 0) {
            const b = json.hotels[0].hotel[0].hotelBasicInfo;
            resolve(b.hotelNo);
          } else {
            resolve(null);
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function getHotelDetail(hotelNo, hotelName) {
  let targetNo = hotelNo;
  
  if (!targetNo && hotelName) {
    // Try search by name
    const cacheSearchPath = path.join(CACHE_DIR, `search_${encodeURIComponent(hotelName)}.json`);
    if (fs.existsSync(cacheSearchPath)) {
      targetNo = JSON.parse(fs.readFileSync(cacheSearchPath, 'utf8'));
    } else {
      await sleep(250);
      targetNo = await searchHotelByName(hotelName);
      if (targetNo) {
        fs.writeFileSync(cacheSearchPath, JSON.stringify(targetNo), 'utf8');
      }
    }
  }

  if (!targetNo) return null;

  const cachePath = path.join(CACHE_DIR, `${targetNo}.json`);
  if (fs.existsSync(cachePath)) {
    try {
      return JSON.parse(fs.readFileSync(cachePath, 'utf8'));
    } catch (e) {
      // re-fetch if corrupted
    }
  }

  await sleep(250);
  try {
    const detail = await fetchHotelDetailFromApi(targetNo);
    if (detail) {
      fs.writeFileSync(cachePath, JSON.stringify(detail, null, 2), 'utf8');
    }
    return detail;
  } catch (err) {
    console.error(`Error fetching detail for hotelNo ${targetNo}:`, err.message);
    return null;
  }
}

function generateHotelSpecHtml(detail, fallbackName) {
  if (!detail) return '';

  const b = detail.hotelBasicInfo || {};
  const r = detail.hotelRatingInfo || {};
  const det = detail.hotelDetailInfo || {};
  const fac = detail.hotelFacilitiesInfo || {};

  const name = b.hotelName || fallbackName || '当施設';

  // Bath Info
  const bathTypes = [...new Set((fac.aboutBath || []).map(x => x.bathType).filter(Boolean))];
  const bathQualities = [...new Set((fac.aboutBath || []).map(x => x.bathQuality).filter(Boolean))];
  const bathBenefits = [...new Set((fac.aboutBath || []).map(x => x.bathBenefits).filter(Boolean))];

  const bathTypeStr = bathTypes.length > 0 ? bathTypes.join('・') : '大浴場・客室バスルーム';
  const bathQualityStr = bathQualities.length > 0 ? bathQualities.join('・') : (bathTypes.includes('温泉') ? '天然温泉' : '');
  const bathBenefitsStr = bathBenefits.length > 0 ? bathBenefits.slice(0, 5).join('・') : '';
  const bathRatingStr = r.bathAverage ? `★ ${r.bathAverage} / 5.0` : '';

  // Meal Info
  const breakfastPlaces = [...new Set((fac.aboutMealPlace || []).map(x => x.breakfastPlace).filter(Boolean))];
  const dinnerPlaces = [...new Set((fac.aboutMealPlace || []).map(x => x.dinnerPlace).filter(Boolean))];
  const mealSpecial = b.hotelSpecial ? b.hotelSpecial.replace(/&amp;/g, '&').replace(/<[^>]*>/g, '') : '';
  
  let mealRatingStr = '';
  if (r.dinnerAverage && r.breakfastAverage) {
    mealRatingStr = `夕食★${r.dinnerAverage} / 朝食★${r.breakfastAverage}`;
  } else if (r.dinnerAverage) {
    mealRatingStr = `夕食★${r.dinnerAverage}`;
  } else if (r.breakfastAverage) {
    mealRatingStr = `朝食★${r.breakfastAverage}`;
  }

  // Parking & Access
  const parkingStr = b.parkingInformation ? b.parkingInformation.replace(/<[^>]*>/g, '') : '提携・周辺駐車場あり';
  const accessStr = b.access ? b.access.replace(/<[^>]*>/g, '') : '最寄り駅・主要ICよりアクセス可能';
  const nearestStationStr = b.nearestStation || '';

  // Checkin & Facilities
  const checkinTime = det.checkinTime || '15:00';
  const lastCheckin = det.lastCheckinTime ? `（最終チェックイン: ${det.lastCheckinTime}）` : '';
  const checkoutTime = det.checkoutTime || '10:00';
  const roomCountStr = fac.hotelRoomNum ? `${fac.hotelRoomNum}室` : '';
  
  const mainFacilities = (fac.hotelFacilities || [])
    .map(x => x.item)
    .filter(x => !['テレビ', '電話', 'インターネット接続(無線LAN形式)'].includes(x))
    .slice(0, 6)
    .join('・');

  return `
<div class="my-8 p-6 md:p-8 rounded-3xl bg-amber-50/50 border border-amber-200 shadow-sm space-y-6">
  <div class="border-b border-amber-200 pb-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
    <div>
      <h3 class="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
        🏨 ${name} 宿泊前に知っておきたい詳細スペック＆設備
      </h3>
      <p class="text-xs text-stone-600 mt-1">温泉・お食事スタイル・駐車場・アクセス等の楽天公式最新データ</p>
    </div>
    ${b.reviewAverage ? `<span class="inline-block px-3 py-1 bg-amber-100 text-amber-900 font-extrabold text-xs rounded-full border border-amber-300">総合評価 ⭐ ${b.reviewAverage} (${b.reviewCount || 0}件)</span>` : ''}
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- 温泉・お風呂 -->
    <div class="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
      <div class="flex items-center justify-between border-b border-stone-100 pb-2">
        <h4 class="font-bold text-sm text-stone-900 flex items-center gap-1.5">
          ♨️ 温泉・お風呂
        </h4>
        ${bathRatingStr ? `<span class="text-2xs font-extrabold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">お風呂 ${bathRatingStr}</span>` : ''}
      </div>
      <ul class="text-xs text-stone-700 space-y-1.5 leading-relaxed font-medium">
        <li><strong>設備:</strong> ${bathTypeStr}</li>
        ${bathQualityStr ? `<li><strong>泉質:</strong> ${bathQualityStr}</li>` : ''}
        ${bathBenefitsStr ? `<li><strong>効能:</strong> ${bathBenefitsStr}</li>` : ''}
      </ul>
    </div>

    <!-- お食事・グルメ -->
    <div class="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
      <div class="flex items-center justify-between border-b border-stone-100 pb-2">
        <h4 class="font-bold text-sm text-stone-900 flex items-center gap-1.5">
          🍽️ お食事スタイル・こだわり
        </h4>
        ${mealRatingStr ? `<span class="text-2xs font-extrabold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">${mealRatingStr}</span>` : ''}
      </div>
      <ul class="text-xs text-stone-700 space-y-1.5 leading-relaxed font-medium">
        ${breakfastPlaces.length > 0 ? `<li><strong>朝食:</strong> ${breakfastPlaces.join(' / ')}</li>` : '<li><strong>朝食:</strong> プランにより提供（ビュッフェ・和定食等）</li>'}
        ${dinnerPlaces.length > 0 ? `<li><strong>夕食:</strong> ${dinnerPlaces.join(' / ')}</li>` : '<li><strong>夕食:</strong> 季節の会席・特製ディナーコース等</li>'}
        ${mealSpecial ? `<li><strong>宿の特長:</strong> ${mealSpecial}</li>` : ''}
      </ul>
    </div>

    <!-- 駐車場・アクセス -->
    <div class="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
      <div class="flex items-center justify-between border-b border-stone-100 pb-2">
        <h4 class="font-bold text-sm text-stone-900 flex items-center gap-1.5">
          🚗 駐車場・交通アクセス
        </h4>
        ${r.locationAverage ? `<span class="text-2xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">立地 ★${r.locationAverage}</span>` : ''}
      </div>
      <ul class="text-xs text-stone-700 space-y-1.5 leading-relaxed font-medium">
        <li><strong>駐車場:</strong> ${parkingStr}</li>
        <li><strong>アクセス:</strong> ${accessStr}</li>
        ${nearestStationStr ? `<li><strong>最寄り駅:</strong> ${nearestStationStr}駅</li>` : ''}
      </ul>
    </div>

    <!-- チェックイン＆館内設備 -->
    <div class="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
      <div class="flex items-center justify-between border-b border-stone-100 pb-2">
        <h4 class="font-bold text-sm text-stone-900 flex items-center gap-1.5">
          ⏰ チェックイン＆基本設備
        </h4>
        ${r.cleanlinessAverage ? `<span class="text-2xs font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">清潔感 ★${r.cleanlinessAverage}</span>` : ''}
      </div>
      <ul class="text-xs text-stone-700 space-y-1.5 leading-relaxed font-medium">
        <li><strong>時間:</strong> チェックイン ${checkinTime}〜 ${lastCheckin} / チェックアウト 〜${checkoutTime}</li>
        ${roomCountStr ? `<li><strong>客室数:</strong> ${roomCountStr}</li>` : ''}
        ${mainFacilities ? `<li><strong>主な館内設備:</strong> ${mainFacilities}</li>` : ''}
      </ul>
    </div>
  </div>
</div>
`.trim();
}

async function main() {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.json'));
  console.log(`Processing ${files.length} posts...`);

  let updatedCount = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filepath = path.join(POSTS_DIR, file);
    let post;
    try {
      post = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    } catch (e) {
      continue;
    }

    // Determine hotelNo
    let hotelNo = null;
    const urlMatch = (post.affiliate_url || '').match(/f_no%3D(\d+)|HOTEL%2F(\d+)|f_no=(\d+)|HOTEL\/(\d+)/i);
    if (urlMatch) {
      hotelNo = urlMatch[1] || urlMatch[2] || urlMatch[3] || urlMatch[4];
    } else if (/^\d+$/.test(post.id)) {
      hotelNo = post.id;
    }

    const hotelName = post.hotel_name;

    // Check if this post is a single hotel or has hotelName
    if (hotelNo || (hotelName && !hotelName.includes('10選') && !hotelName.includes('特集') && !hotelName.includes('ランキング'))) {
      const detail = await getHotelDetail(hotelNo, hotelName);
      if (detail) {
        const specHtml = generateHotelSpecHtml(detail, hotelName);
        let rev = post.review || '';

        // If rev doesn't already have the new spec box, insert it before the summary or near the beginning
        if (!rev.includes('宿泊前に知っておきたい詳細スペック＆設備')) {
          if (rev.includes('<h2 id="features"')) {
            rev = rev.replace('<h2 id="features"', `${specHtml}\n\n<h2 id="features"`);
          } else if (rev.includes('<h2 id="summary"')) {
            rev = rev.replace('<h2 id="summary"', `${specHtml}\n\n<h2 id="summary"`);
          } else if (rev.includes('<h2 id="faq"')) {
            rev = rev.replace('<h2 id="faq"', `${specHtml}\n\n<h2 id="faq"`);
          } else {
            rev = `${rev}\n\n${specHtml}`;
          }
          post.review = rev;
          fs.writeFileSync(filepath, JSON.stringify(post, null, 2), 'utf8');
          updatedCount++;
        }
      }
    }

    if ((i + 1) % 50 === 0 || i === files.length - 1) {
      console.log(`[${i + 1}/${files.length}] Processed. Updated: ${updatedCount}`);
    }
  }

  console.log(`Finished! Total updated posts: ${updatedCount}`);
}

main().catch(err => {
  console.error("Fatal error:", err);
});
