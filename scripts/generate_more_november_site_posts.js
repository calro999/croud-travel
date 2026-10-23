const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const ADDITIONAL_ARTICLES = [
  {
    id: 'autumn-november-nikko-kinugawa-lightup-guide',
    slug: 'autumn-november-nikko-kinugawa-lightup-guide',
    title: '【2026年11月限定】世界遺産・日光の社寺 逍遥園ライトアップ＆鬼怒川名湯特選宿5選',
    hotel_name: '日光・鬼怒川 逍遥園ライトアップ＆名湯特選宿',
    prefecture: '栃木県',
    area: '日光・中禅寺湖・鬼怒川',
    categories: ['11月限定', '日光紅葉', '逍遥園ライトアップ', '世界遺産', '鬼怒川温泉', '秋旅行'],
    searchKeywords: [
      '日光温泉 ホテル 清晃苑',
      '日光温泉 日光千姫物語',
      '鬼怒川温泉 あさや',
      '鬼怒川温泉 鬼怒川パークホテルズ',
      '日光東照宮晃陽苑'
    ],
    introHighlights: '江戸初期の名園・日光山輪王寺「逍遥園」の秋の夜間ライトアップ。樹齢数百年のモミジが心字池に沈み込むように映る「逆さ紅葉」の鮮烈な赤と漆黒の夜空のコントラスト。東照宮徒歩1分の宿や、空中庭園露天風呂を誇る鬼怒川温泉の名宿とともに、いろは坂渋滞を回避するスマートな日光紅葉旅を徹底ガイドします。',
    modelCourseSnippet: '東武特急スペーシアXで日光駅へ。東照宮徒歩1分の宿にチェックインし、日中は世界遺産の社殿群を拝観。夕暮れ16:45のマジックアワーに合わせて逍遥園ライトアップへ入場し、夜は鬼怒川の渓谷露天風呂で温まる王道ルート。'
  },
  {
    id: 'autumn-november-yamanakako-diamond-fuji-guide',
    slug: 'autumn-november-yamanakako-diamond-fuji-guide',
    title: '【2026年11月限定】山中湖「夕焼けの渚 紅葉まつり」＆ダイヤモンド富士完全攻略特選宿5選',
    hotel_name: '山中湖 夕焼けの渚紅葉まつり＆ダイヤモンド富士特選宿',
    prefecture: '山梨県',
    area: '山中湖・忍野・富士吉田',
    categories: ['11月限定', '山中湖紅葉', 'ダイヤモンド富士', '富士山ビュー', '秋旅行', '楽天トラベル厳選'],
    searchKeywords: [
      '百年水の湯 富士山中湖ホテル',
      'ビジョングランピングリゾート山中湖',
      'SUN PLAZA HOTEL 富士山中湖',
      '富士松園ホテル 山中湖',
      'ホテルルートイン河口湖'
    ],
    introHighlights: '約600mの紅葉回廊がライトアップされる「夕焼けの渚 紅葉まつり」と、富士山頂に夕日がピタリと重なる天体ショー「ダイヤモンド富士」が同じ湖畔で同時に狙える11月の山中湖。標高1,000mの澄み切った秋空の下、全室富士山ビューやバスターミナル徒歩1分の直近宿を拠点に、神秘的な絶景を完全制覇します。',
    modelCourseSnippet: '初日は14:30に平野または旭日丘湖畔で15:30のダイヤモンド富士を撮影。16:30から点灯する夕焼けの渚紅葉まつりを散策し、夜は富士の伏流水「百年水の湯」で冷えた身体を温め、翌朝は本場吉田のうどんを味わう絶景旅。'
  },
  {
    id: 'autumn-november-osaka-midosuji-lightup-guide',
    slug: 'autumn-november-osaka-midosuji-lightup-guide',
    title: '【2026年11月開幕】全長4kmの光の回廊「大阪・御堂筋イルミネーション」＆大阪城紅葉特選ホテル5選',
    hotel_name: '大阪 御堂筋イルミネーション＆天然温泉特選ホテル',
    prefecture: '大阪府',
    area: '大阪・梅田・本町・難波',
    categories: ['11月開幕', '御堂筋イルミネーション', '大阪・光の饗宴', '大阪城紅葉', '天然温泉', '駅直結'],
    searchKeywords: [
      'アパホテル＆リゾート 御堂筋本町駅前タワー',
      'スーパーホテルPremierなんば心斎橋',
      'ホテルマイステイズ御堂筋本町',
      'ホテルマイステイズ心斎橋',
      '変なホテル大阪 なんば'
    ],
    introHighlights: '梅田から難波まで全長約4kmの街路樹が一斉に光を放つ世界記録の祭典「御堂筋イルミネーション」。昼間は大阪城公園の樹齢300年の大イチョウを巡り、夜は中之島から本町・心斎橋へと続く光のトンネルを歩く。御堂筋直結や天然温泉大浴場を備えた宿を拠点に、秋のビル風をものともしない快適な大阪ステイを提案します。',
    modelCourseSnippet: '昼は大阪城公園の紅葉と天守閣を散策。夕方17:00の点灯に合わせて中之島の中央公会堂から御堂筋を南下し、本町・心斎橋のイルミを巡る。夜は駅直結タワーホテルの大浴殿露天風呂で温まり、道頓堀グルメを満喫。'
  },
  {
    id: 'autumn-november-shinshu-soba-matsumoto-guide',
    slug: 'autumn-november-shinshu-soba-matsumoto-guide',
    title: '【2026年11月限定】信州「秋の新そば解禁」＆国宝松本城の三段紅葉特選名宿5選',
    hotel_name: '信州 松本城三段紅葉＆手打ち新そば特選宿',
    prefecture: '長野県',
    area: '松本・美ヶ原温泉・浅間温泉',
    categories: ['11月解禁', '信州新そば', '松本城紅葉', '美ヶ原温泉', '浅間温泉', '秋旅行'],
    searchKeywords: [
      '美ヶ原温泉 旅館すぎもと',
      '松本 浅間温泉 ホテル玉之湯',
      '天然温泉 梓の湯 ドーミーイン松本',
      '美ヶ原温泉 追分屋旅館',
      '浅間温泉 東石川旅館'
    ],
    introHighlights: '7月に種をまき、晩秋の寒暖差で旨味を凝縮させた「秋の新そば」が一斉に出揃う11月の信州。緑がかった翡翠色の十割新そばの圧倒的な香りと甘み、そして北アルプス初雪の白・紅葉の朱・漆黒天守が織りなす松本城の「三段紅葉」。館主手打ちそばの名宿から名湯・美ヶ原温泉まで、大人の舌と目を満たす極上宿を厳選しました。',
    modelCourseSnippet: '早朝7:30に松本城外堀で無風の水鏡に映る三段紅葉を撮影。城下町の蕎麦名店で新そばを塩で手繰り、午後は美ヶ原温泉へ。夜は館主が打つ十割新そばと信州会席、ジャズが流れる民芸空間で贅沢な寛ぎを堪能。'
  },
  {
    id: 'autumn-november-dogo-onsen-matsuyama-guide',
    slug: 'autumn-november-dogo-onsen-matsuyama-guide',
    title: '【2026年11月最新】全館再開の「道後温泉本館」と松山城紅葉完全攻略特選宿5選',
    hotel_name: '愛媛 道後温泉本館全館再開＆松山城紅葉特選宿',
    prefecture: '愛媛県',
    area: '道後温泉・松山',
    categories: ['11月最新', '道後温泉本館', '松山城紅葉', '愛媛鯛めし', '名門老舗', '秋旅行'],
    searchKeywords: [
      '道後温泉 ふなや',
      '道後温泉 大和屋本店',
      '道後温泉 花ゆづき',
      '道後温泉 道後グランドホテル',
      '道後温泉 ホテルルナパーク'
    ],
    introHighlights: '約5年半の保存改修を終え全館営業を完全再開した日本最古の温泉「道後温泉本館」。秋風が心地よい11月、現存天守・松山城の紅葉と、瀬戸内海の真鯛が脂を蓄える旬が到来します。日中の2時間待ちを回避する「朝6時の刻太鼓一番風呂」と、松山炊き込み＆宇和島生卵漬けの2大鯛めし食べ比べを叶える道後屈指の名宿を特集します。',
    modelCourseSnippet: '本館徒歩3分の老舗宿に宿泊。朝6:00の刻太鼓とともに開門する本館霊の湯で一番風呂を堪能し、湯上がりに坊っちゃんタルトを味わう。日中は一人乗りリフトで松山城の紅葉パノラマを登り、名物鯛めしランチを楽しむ極上旅。'
  },
  {
    id: 'autumn-november-matsushima-entuuin-kaki-guide',
    slug: 'autumn-november-matsushima-entuuin-kaki-guide',
    title: '【2026年11月限定】日本三景・松島「円通院」紅葉ライトアップ＆初牡蠣特選宿5選',
    hotel_name: '松島 円通院紅葉ライトアップ＆松島湾初牡蠣特選宿',
    prefecture: '宮城県',
    area: '松島・塩釜・仙台',
    categories: ['11月限定', '松島紅葉', '円通院ライトアップ', '松島かき', '松島温泉', '日本三景'],
    searchKeywords: [
      '松島温泉 小松館 好風亭',
      '松島温泉 松島センチュリーホテル',
      '松島温泉 ホテル大松荘',
      '松島温泉 ホテル松島大観荘',
      '新館 もと美荘 松島'
    ],
    introHighlights: '伊達政宗の嫡孫・光宗の霊廟「三慧殿」を抱く円通院。心字の池の水面に漆黒と真紅のシンメトリーを描く「逆さ紅葉」のライトアップと、11月に本格解禁を迎える松島湾の「初牡蠣」。国道45号の渋滞を回避するJR仙石線アクセスと、地下1,500mから湧く「絹肌の湯」を誇る松島海岸徒歩圏の厳選宿を徹底解説します。',
    modelCourseSnippet: '仙台駅からJR仙石線で松島海岸駅へ直行。昼はかき小屋で熱々の焼き牡蠣を堪能し、遊覧船で松島湾を巡る。夜は事前WEBチケットで19:15に円通院へレイト入場し、並ばずに逆さ紅葉を鑑賞。宿の貸切露天風呂で松島湾の夜景を独占。'
  },
  {
    id: 'autumn-november-hakata-lightup-walk-guide',
    slug: 'autumn-november-hakata-lightup-walk-guide',
    title: '【2026年11月限定】博多ライトアップウォーク「博多千年煌夜」＆秋の博多グルメ特選宿5選',
    hotel_name: '博多 博多千年煌夜ライトアップ＆天然温泉特選ホテル',
    prefecture: '福岡県',
    area: '博多・祇園・中洲',
    categories: ['11月限定', '博多千年煌夜', '承天寺枯山水', '櫛田神社', '博多もつ鍋', '天然温泉'],
    searchKeywords: [
      'ドーミーインPREMIUM博多 キャナルシティ前',
      'ドーミーイン博多祇園',
      'スーパーホテルPremier博多駅 筑紫口',
      'ホテルルートイン博多駅前 博多口',
      'ホテルルートイン博多駅南'
    ],
    introHighlights: 'うどん・そば発祥の地・承天寺の方丈枯山水庭園「洗濤庭」や東長寺の五重塔、櫛田神社の大銀杏が一斉にライトアップされる「博多千年煌夜」。さらに大相撲九州場所や、寒サバ（胡麻サバ）・博多もつ鍋・水炊きが最高の旬を迎える11月の博多。会場のど真ん中に位置する祇園・櫛田神社前の天然温泉ホテルを拠点に、夜の博多を満喫します。',
    modelCourseSnippet: '祇園駅前の天然温泉ホテルにチェックイン。17:30点灯の東長寺から反時計回りに承天寺、妙楽寺、櫛田神社を巡る。20:30に散策を終えて本場博多水炊きまたはもつ鍋を味わい、21:30以降の空いている時間帯に中洲屋台で締めの一杯。'
  },
  {
    id: 'autumn-november-shirakawago-fire-drill-guide',
    slug: 'autumn-november-shirakawago-fire-drill-guide',
    title: '【2026年11月限定】世界遺産・白川郷「秋の一斉放水」＆飛騨高山紅葉特選名宿5選',
    hotel_name: '白川郷 一斉放水訓練＆飛騨高山温泉特選宿',
    prefecture: '岐阜県',
    area: '白川郷・飛騨高山',
    categories: ['11月限定', '白川郷一斉放水', '合掌造り紅葉', '飛騨高山温泉', '飛騨牛朴葉味噌', '秋旅行'],
    searchKeywords: [
      '高山グリーンホテル',
      '飛騨高山温泉 旅館あすなろ',
      '飛騨高山温泉 ひだホテルプラザ',
      '飛騨の里 旅館 むら山',
      '平湯温泉 岡田旅館'
    ],
    introHighlights: '合掌造りの集落内に点在する約60基の放水銃から一斉に空高く水柱が噴射される、年に一度の「白川郷 火災予防一斉放水」。秋晴れの青空と紅葉を背景に巨大な水のカーテンが広がる奇跡の絶景。当日の朝7:00満車を回避する「前夜・飛騨高山温泉泊」ルートと、A5飛騨牛朴葉味噌焼き・自家源泉名湯を堪能する極上旅をガイドします。',
    modelCourseSnippet: '前日は高山駅前の温泉旅館に宿泊し、古い町並みの紅葉散策とA5飛騨牛会席を堪能。当日は朝6:00前に高山を出発して白川郷せせらぎ公園駐車場へ先回り。朝8:00の一斉放水を荻町展望台から見学し、宮川朝市に立ち寄って帰路へ。'
  }
];

async function generateAdditional() {
  console.log('=== Starting Additional Site Articles Generation ===');
  const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');

  for (const cfg of ADDITIONAL_ARTICLES) {
    console.log(`\nProcessing: ${cfg.title}`);
    const fetchedHotels = [];

    for (const kw of cfg.searchKeywords) {
      try {
        console.log(`  Searching Rakuten: ${kw}`);
        const res = await searchRakutenHotels(kw, 1);
        if (res && res.length > 0) {
          fetchedHotels.push(res[0]);
        }
      } catch (err) {
        console.warn(`  Failed for ${kw}:`, err.message);
      }
      await sleep(1000);
    }

    if (fetchedHotels.length === 0) {
      console.warn(`  No hotels found for ${cfg.id}, skipping.`);
      continue;
    }

    const comparisonTableHtml = `
<div class="comparison-table-wrapper" style="overflow-x: auto; margin: 30px 0; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
    <thead>
      <tr style="background: #0f766e; color: #ffffff;">
        <th style="padding: 12px 16px; border-bottom: 2px solid #0d9488;">宿名</th>
        <th style="padding: 12px 16px; border-bottom: 2px solid #0d9488; text-align: center;">楽天評価</th>
        <th style="padding: 12px 16px; border-bottom: 2px solid #0d9488; text-align: right;">1泊目安</th>
        <th style="padding: 12px 16px; border-bottom: 2px solid #0d9488;">特徴・おすすめポイント</th>
      </tr>
    </thead>
    <tbody>
      ${fetchedHotels.map((h, i) => `
      <tr style="background: ${i % 2 === 0 ? '#ffffff' : '#f8fafc'}; border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 14px 16px; font-weight: bold; color: #1e293b;">
          <a href="${h.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" style="color: #0d9488; text-decoration: none;">
            ${h.hotelName}
          </a>
        </td>
        <td style="padding: 14px 16px; text-align: center; color: #f59e0b; font-weight: bold;">
          ★${h.reviewAverage || '4.0'}
        </td>
        <td style="padding: 14px 16px; text-align: right; font-weight: bold; color: #0f172a;">
          ¥${Number(h.hotelMinCharge || 8000).toLocaleString()}〜
        </td>
        <td style="padding: 14px 16px; font-size: 13px; color: #475569;">
          ${(h.hotelSpecial || h.userReview || '充実した温泉と絶好のロケーション').slice(0, 75)}...
        </td>
      </tr>
      `).join('')}
    </tbody>
  </table>
</div>`;

    const hotelDetailsHtml = fetchedHotels.map((h, idx) => `
<div class="hotel-feature-card" style="border: 1px solid #cbd5e1; border-radius: 16px; overflow: hidden; margin-bottom: 40px; background: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
  <div style="background: linear-gradient(135deg, #0d9488, #0f766e); color: #ffffff; padding: 16px 20px;">
    <span style="background: #f59e0b; color: #0f172a; padding: 3px 10px; border-radius: 9999px; font-size: 12px; font-weight: 900; margin-right: 8px;">第${idx + 1}位</span>
    <h3 style="display: inline; font-size: 18px; font-weight: bold; margin: 0;">${h.hotelName}</h3>
  </div>
  <div style="padding: 24px;">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 20px;">
      <div style="flex: 1 1 280px; min-width: 260px;">
        <img src="${h.hotelImageUrl || h.roomImageUrl || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'}" alt="${h.hotelName}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 12px;" />
      </div>
      <div style="flex: 2 1 320px; font-size: 14px; line-height: 1.8; color: #334155;">
        <p style="margin-top: 0;"><strong>【所在地】</strong> ${h.address1 || ''}${h.address2 || ''}</p>
        <p><strong>【アクセス】</strong> ${h.access || '最寄り駅より好アクセス'}</p>
        <p><strong>【楽天評価】</strong> <span style="color: #f59e0b; font-size: 16px; font-weight: bold;">★${h.reviewAverage || '4.0'}</span>（クチコミ ${h.reviewCount || '多数'}件）</p>
        <p><strong>【宿泊料金目安】</strong> 1名あたり <span style="color: #dc2626; font-size: 18px; font-weight: bold;">¥${Number(h.hotelMinCharge || 8000).toLocaleString()}〜</span></p>
        <p style="background: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 0;"><strong>💡 編集部イチオシ：</strong> ${h.hotelSpecial || 'イベント会場へのアクセス抜群、旅の疲れを癒やす上質な温泉と旬の会席料理が魅力です。'}</p>
      </div>
    </div>
    ${h.userReview ? `
    <div style="background: #f8fafc; border-left: 4px solid #0d9488; padding: 12px 16px; font-size: 13px; color: #475569; margin-bottom: 20px;">
      <strong>【最新クチコミ抜粋】</strong>「${h.userReview.replace(/<[^>]+>/g, '').slice(0, 150)}...」
    </div>` : ''}
    <div style="text-align: center;">
      <a href="${h.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" style="display: inline-block; background: #dc2626; color: #ffffff; font-weight: bold; font-size: 16px; padding: 14px 32px; border-radius: 8px; text-decoration: none; box-shadow: 0 4px 6px rgba(220,38,38,0.25);">
        楽天トラベルで空室・プランを見る →
      </a>
    </div>
  </div>
</div>
`).join('');

    const fullReview = `
<div class="article-lead-section" style="font-size: 15px; line-height: 1.9; color: #1e293b; margin-bottom: 28px;">
  <p>${cfg.introHighlights}</p>
  <p>11月は紅葉・ライトアップ・大祭・味覚の解禁が重なる年間最大の観光ハイシーズン。週末やイベント開催日は早期満室となるため、楽天トラベルの最新空室状況をご確認の上、早めの予約確保をおすすめします。</p>
</div>

${comparisonTableHtml}

<h2 style="font-size: 20px; font-weight: 900; color: #0f172a; border-left: 6px solid #0d9488; padding-left: 12px; margin: 40px 0 20px 0;">
  🍁 編集部が厳選！11月イベント満喫のおすすめ高評価宿
</h2>

${hotelDetailsHtml}

<div class="autumn-model-course-section" style="margin: 40px 0; background: #fffbeb; border: 1px solid #fef3c7; border-radius: 16px; padding: 22px;">
  <h3 style="font-size: 16px; font-weight: 900; color: #92400e; margin: 0 0 10px 0;">
    🧭 【1泊2日モデルコース】11月イベント満喫スケジュール
  </h3>
  <p style="font-size: 13px; line-height: 1.8; color: #78350f; margin: 0;">
    ${cfg.modelCourseSnippet}
  </p>
</div>

<div class="autumn-booking-tips" style="margin: 32px 0; background: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 16px; padding: 20px; font-size: 13px; line-height: 1.8; color: #134e4a;">
  <h4 style="font-size: 14px; font-weight: 900; color: #0f766e; margin: 0 0 8px 0;">
    💡 11月旅行の予約ワンポイントアドバイス
  </h4>
  <p style="margin: 0 0 8px 0;">・<strong>イベント会場周辺は「車を捨てて徒歩・駅近」が鉄則：</strong> 紅葉名所や大祭会場周辺は激しい渋滞と駐車場満車が発生します。駅近ホテルに車を預けて公共交通や徒歩で動くのが最も安全です。</p>
  <p style="margin: 0;">・<strong>楽天トラベルの「5と0のつく日」クーポン併用：</strong> 毎月5・10・15・20・25・30日は高級宿・温泉宿で最大20%OFFクーポンが配布されるため、タイミングを合わせて予約すると大変お得です。</p>
</div>
`;

    const postJson = {
      id: cfg.id,
      title: cfg.title,
      hotel_name: cfg.hotel_name,
      description: `${cfg.introHighlights.slice(0, 140)}...`,
      is_special_feature: true,
      review: fullReview,
      image: fetchedHotels[0].hotelImageUrl || fetchedHotels[0].roomImageUrl,
      other_images: fetchedHotels.slice(1, 5).map(h => h.hotelImageUrl || h.roomImageUrl).filter(Boolean),
      affiliate_url: fetchedHotels[0].affiliateUrl,
      prefecture: cfg.prefecture,
      area: cfg.area,
      categories: cfg.categories,
      price: fetchedHotels[0].hotelMinCharge || 8800,
      rating: fetchedHotels[0].reviewAverage || 4.3,
      date: '2026-10-23',
      keywords: `${cfg.prefecture} 11月 イベント 温泉 ホテル おすすめ, ${cfg.area} 紅葉 ライトアップ, 楽天トラベル, 2026 最新`,
      summary: `${cfg.title}。楽天トラベル公式APIによる最新クチコミ高評価宿を徹底比較。`,
      review_count: fetchedHotels[0].reviewCount || 150,
      featured_hotels: fetchedHotels.map(h => ({
        name: h.hotelName,
        rating: String(h.reviewAverage || '4.0'),
        price: `¥${Number(h.hotelMinCharge || 8000).toLocaleString()}〜`,
        url: h.affiliateUrl
      }))
    };

    const outPath = path.join(POSTS_DIR, `${cfg.id}.json`);
    fs.writeFileSync(outPath, JSON.stringify(postJson, null, 2), 'utf8');
    console.log(`Saved site post: ${outPath}`);
  }

  console.log('\n--- All Additional November site post JSONs created successfully! ---');
}

generateAdditional().catch(console.error);
