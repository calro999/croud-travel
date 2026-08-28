const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Target areas that have huge search volume but lack single post count:
// Osaka, Aichi (Nagoya), Chiba (Maihama/Disney/Makuhari), Hiroshima (Miyajima/Hiroshima Station), Nara
const searchBatches = [
  {
    prefecture: '大阪府',
    prefSlug: 'osaka',
    targets: [
      { area: '梅田・大阪駅', purpose: '新幹線・空港アクセス抜群＆夜景ステイ', query: '大阪駅 ホテル 夜景' },
      { area: 'なんば・心斎橋', purpose: '道頓堀グルメ食べ歩き＆ショッピング拠点', query: 'なんば 心斎橋 ホテル おすすめ' },
      { area: 'USJ・ベイエリア', purpose: 'USJ（ユニバ）満喫＆ファミリー・子連れ', query: 'ユニバーサルシティ ホテル ファミリー' },
      { area: '天王寺・あべの', purpose: 'あべのハルカス＆通天閣・新世界観光', query: '天王寺 ホテル おすすめ' }
    ]
  },
  {
    prefecture: '愛知県',
    prefSlug: 'aichi',
    targets: [
      { area: '名古屋駅', purpose: '新幹線直結・名古屋めしグルメ＆出張・旅行', query: '名古屋駅 ホテル おすすめ' },
      { area: '栄・伏見', purpose: '繁華街ショッピング＆オアシス21夜景', query: '名古屋 栄 ホテル おしゃれ' },
      { area: '金山・熱田', purpose: '熱田神宮参拝＆中部国際空港アクセス', query: '金山駅 ホテル 名古屋' },
      { area: '知多・南知多', purpose: '海の絶景露天風呂＆伊勢湾海鮮料理', query: '南知多 温泉 旅館 海鮮' }
    ]
  },
  {
    prefecture: '千葉県',
    prefSlug: 'chiba',
    targets: [
      { area: '舞浜・浦安', purpose: 'ディズニーリゾート直通＆ファミリー・カップル', query: '舞浜 ホテル ディズニー' },
      { area: '幕張・千葉港', purpose: '幕張メッセイベント＆東京湾オーシャンビュー', query: '幕張 ホテル オーシャンビュー' },
      { area: '成田', purpose: '成田空港前泊・後泊＆成田山新勝寺参拝', query: '成田空港 ホテル 天然温泉' },
      { area: '房総・木更津', purpose: '海ほたるドライブ＆温泉・海鮮バイキング', query: '房総 温泉 旅館 露天風呂 海鮮' }
    ]
  },
  {
    prefecture: '広島県',
    prefSlug: 'hiroshima',
    targets: [
      { area: '広島駅・八丁堀', purpose: '平和記念公園・お好み焼きグルメ＆アクセス', query: '広島駅 ホテル おすすめ' },
      { area: '宮島・廿日市', purpose: '世界遺産厳島神社参拝＆瀬戸内海絶景温泉', query: '宮島 旅館 厳島神社 温泉' },
      { area: '尾道・しまなみ', purpose: '坂の街散策＆しまなみ海道サイクリング拠点', query: '尾道 ホテル しまなみ海道' },
      { area: '呉・竹原', purpose: '大和ミュージアム＆うさぎ島・安芸の小京都', query: '呉 ホテル 温泉' }
    ]
  },
  {
    prefecture: '奈良県',
    prefSlug: 'nara',
    targets: [
      { area: '奈良公園・ならまち', purpose: '東大寺・春日大社・鹿とふれあう古都散策', query: '奈良公園 ホテル 旅館' },
      { area: 'JR・近鉄奈良駅', purpose: '古都観光の拠点＆大浴場・コスパ抜群ホテル', query: '奈良駅 ホテル 大浴場' },
      { area: '飛鳥・橿原・吉野', purpose: '歴史遺産めぐり＆吉野山桜・天然温泉', query: '橿原 奈良 温泉 ホテル' },
      { area: '斑鳩・生駒', purpose: '法隆寺参拝＆信貴山絶景リフレッシュ宿', query: '信貴山 生駒 旅館 温泉' }
    ]
  }
];

function generateReviewArticle(hotel, pref, area, purpose) {
  const minChargeStr = hotel.hotelMinCharge > 0 ? `¥${Number(hotel.hotelMinCharge).toLocaleString()}〜` : '宿泊プランによる';
  const ratingStr = hotel.reviewAverage > 0 ? `${hotel.reviewAverage}点（5点満点 / 口コミ${hotel.reviewCount}件）` : 'クチコミ高評価';
  
  return `
<h2>【${area}エリア】${purpose}に最高の立地と快適ステイ</h2>
<p>
${pref}の主要観光・ビジネス拠点として大人気の<strong>${area}</strong>エリア。「${purpose}」を目的に旅行や出張を計画するなら、真っ先に候補に挙げたいのが<strong>「${hotel.hotelName}」</strong>です。
</p>
<p>
${hotel.access ? `アクセス面では「${hotel.access}」という抜群のロケーションを誇り、重い荷物を持った移動でもストレスフリー。` : ''}
${hotel.hotelSpecial ? `施設の特徴として「${hotel.hotelSpecial}」が挙げられ、宿泊者からの満足度も非常に高くなっています。` : ''}
</p>

<h2>「${hotel.hotelName}」が選ばれる理由・おすすめポイント</h2>
<ul>
  <li><strong>最安料金の目安:</strong> 1名あたり ${minChargeStr}（時期やプランにより変動）</li>
  <li><strong>宿泊者クチコミ評価:</strong> ⭐ ${ratingStr}</li>
  <li><strong>アクセス利便性:</strong> ${hotel.access || `${area}主要駅から徒歩圏内`}</li>
  <li><strong>周辺観光・グルメ:</strong> ${area}の人気飲食店や観光名所へダイレクトにアクセス可能</li>
</ul>

<h2>宿泊者のリアルな口コミ・滞在の魅力</h2>
<p>
${hotel.userReview ? hotel.userReview.replace(/<[^>]*>/g, '').slice(0, 200) : '清潔感のある客室、親切丁寧なスタッフの接客、そして観光地へのアクセスの良さが口コミでも高く評価されています。カップルでの記念日旅行から子連れファミリー、一人旅や出張まで幅広くおすすめできるホテルです。'}
</p>

<div class="my-6 p-5 rounded-2xl bg-amber-50 border border-amber-300/60 text-center">
  <span class="text-xs font-bold text-amber-800 block mb-1">【楽天トラベル公式】リアルタイム最安値＆空室状況をチェック</span>
  <p class="text-xs text-stone-600 mb-3">ポイント還元やお得な割引クーポン（5と0のつく日セール・限定パックプラン）が適用可能です。</p>
  <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs font-black rounded-xl shadow-md hover:from-amber-500 hover:to-amber-600 transition">
    ✈️ 楽天トラベルで「${hotel.hotelName}」の宿泊プランを見る
  </a>
</div>
  `.trim();
}

async function main() {
  console.log('=== Fetching direct Rakuten API hotels & Generating rich single posts ===');
  const postsDir = path.join(__dirname, 'src', 'data', 'posts');
  let createdCount = 0;

  for (const batch of searchBatches) {
    console.log(`\n========================================`);
    console.log(`Processing Prefecture: ${batch.prefecture} (${batch.prefSlug})`);
    console.log(`========================================`);

    for (const target of batch.targets) {
      console.log(`Querying Rakuten API: "${target.query}" for ${target.area} (${target.purpose})...`);
      await sleep(1300); // Respect 1 req/sec rate limit

      let hotels = [];
      try {
        hotels = await searchRakutenHotels(target.query, 3);
      } catch (err) {
        console.warn(`Query failed: ${err.message}`);
      }

      if (!hotels || hotels.length === 0) {
        console.warn(`No hotels returned for "${target.query}"`);
        continue;
      }

      for (const hotel of hotels) {
        const postId = String(hotel.hotelNo);
        const postFilePath = path.join(postsDir, `${postId}.json`);

        // Check if post already exists
        if (fs.existsSync(postFilePath)) {
          console.log(` -> Post for Hotel #${postId} already exists, updating with rich content & affiliate link...`);
        }

        const reviewHtml = generateReviewArticle(hotel, batch.prefecture, target.area, target.purpose);

        const postData = {
          id: postId,
          title: `【${batch.prefecture}・${target.area}】${hotel.hotelName}の宿泊予約＆アクセス・観光魅力ガイド`,
          hotel_name: hotel.hotelName,
          description: `${batch.prefecture}・${target.area}の「${hotel.hotelName}」は${target.purpose}に最適な人気宿。最安値料金、口コミ評判、周辺観光地へのアクセスから楽天トラベルの最新空室予約まで徹底紹介。`,
          review: reviewHtml,
          image: hotel.hotelImageUrl || (hotel.hotelThumbnailUrl || ''),
          other_images: [hotel.roomImageUrl, hotel.hotelThumbnailUrl].filter(Boolean),
          affiliate_url: hotel.affiliateUrl,
          prefecture: batch.prefecture,
          area: target.area,
          categories: [batch.prefecture, target.area, 'おすすめホテル', '観光拠点', '楽天トラベル'],
          price: hotel.hotelMinCharge || 5000,
          rating: hotel.reviewAverage || 4.2,
          date: '2026-08-28',
          recommended_for: [target.purpose, '観光', '一人旅', 'カップル', 'ファミリー'],
          nearby_tourist_spots: [target.area, `${batch.prefecture}名所`],
          parking_info: hotel.parkingInformation || '駐車場情報は楽天トラベル予約ページにてご確認ください。',
          family_friendly: 'ファミリー・お子様連れでも安心して宿泊可能です。',
          hot_spring_info: hotel.hotelSpecial && hotel.hotelSpecial.includes('温泉') ? '天然温泉・大浴場を完備しています。' : '',
          nearby_gourmet: [`${target.area}名物グルメ`],
          meal_availability: '朝食・夕食付きプランは楽天トラベルから選択可能です。'
        };

        fs.writeFileSync(postFilePath, JSON.stringify(postData, null, 2), 'utf8');
        createdCount++;
        console.log(` ✓ Successfully generated post: ${postId} (${hotel.hotelName})`);
      }
    }
  }

  console.log(`\n🎉 Total ${createdCount} high-quality single hotel posts generated/updated with direct Rakuten API data!`);
}

main().catch(console.error);
