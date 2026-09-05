const fs = require('fs');
const path = require('path');

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F')}`;

console.log('Target Official Furusato Affiliate URL:', officialFurusatoAffUrl);

// 1. src/app 以下の全 furusato 記事をチェック
const appDir = path.join(__dirname, 'src/app');
const entries = fs.readdirSync(appDir, { withFileTypes: true });

let updatedPagesCount = 0;

for (const entry of entries) {
  if (entry.isDirectory() && entry.name.startsWith('furusato-tax-')) {
    const pagePath = path.join(appDir, entry.name, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      let content = fs.readFileSync(pagePath, 'utf8');
      let modified = false;

      // 古いアフィIDや生URLの置換
      const oldUrls = [
        'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F',
        'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F',
      ];

      for (const oldUrl of oldUrls) {
        if (content.includes(oldUrl)) {
          content = content.split(oldUrl).join(officialFurusatoAffUrl);
          modified = true;
        }
      }

      // Round 1〜6のページなど、ヘッダーや末尾に「ふるさと納税宿泊クーポン獲得」のCTAが無いページにも追加
      // <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
      // の直後にアフィリエイトボタンを追加
      if (!content.includes(officialFurusatoAffUrl)) {
        if (content.includes('<span>✓ 予約済みでも「あとから割引」対応</span>')) {
          content = content.replace(
            '<span>✓ 予約済みでも「あとから割引」対応</span>\n          </div>',
            `<span>✓ 予約済みでも「あとから割引」対応</span>
          </div>
          <div className="mt-6">
            <a
              href="${officialFurusatoAffUrl}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              <span>🎟️ 楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span className="text-xs bg-black/20 px-2 py-0.5 rounded">公式</span>
            </a>
          </div>`
          );
          modified = true;
        }

        // ページ末尾のCTAにも追加
        if (content.includes('</main>') && !content.includes('楽天トラベルふるさと納税クーポンで')) {
          content = content.replace(
            '</main>',
            `  {/* クーポン獲得CTA */}
        <section className="mt-16 bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 rounded-3xl p-8 text-center space-y-6 shadow-2xl text-white">
          <span className="text-3xl block">🎫</span>
          <h2 className="text-xl md:text-3xl font-black text-white">
            楽天トラベルふるさと納税クーポンで、一生の思い出に残るプレミアムステイへ
          </h2>
          <p className="text-slate-300 text-xs md:text-base max-w-2xl mx-auto leading-relaxed">
            返礼品クーポンは寄付手続き完了後、数分で楽天トラベルのアカウントに即時付与されます。今年の寄付上限枠を賢く使って、家族みんなの最高の笑顔とくつろぎを手に入れましょう。
          </p>
          <div>
            <a
              href="${officialFurusatoAffUrl}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-base border border-amber-400/40"
            >
              <span>🎟️ 楽天ふるさと納税 宿泊クーポンを獲得する</span>
            </a>
          </div>
        </section>
      </div>
    </main>`
          );
          // 万が一</div>のネストが壊れないか確認するため、より安全に置換
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(pagePath, content, 'utf8');
        updatedPagesCount++;
        console.log(`Updated page: ${entry.name}`);
      }
    }
  }
}

// 2. generatorスクリプトも全て同期
const scripts = [
  'generate_4_furusato_pages_round7.js',
  'generate_4_furusato_pages_round8.js',
  'generate_4_furusato_pages_round9.js'
];
for (const s of scripts) {
  const p = path.join(__dirname, s);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/https:\/\/event\.travel\.rakuten\.co\.jp\/special\/furusato\//g, officialFurusatoAffUrl);
    content = content.replace(/https:\/\/hb\.afl\.rakuten\.co\.jp\/hgc\/4e047466\.08412853\.4e047467\.bbffea72\/\?pc=https%3A%2F%2Fevent\.travel\.rakuten\.co\.jp%2Fspecial%2Ffurusato%2F/g, officialFurusatoAffUrl);
    fs.writeFileSync(p, content, 'utf8');
    console.log(`Updated generator script: ${s}`);
  }
}

console.log(`\nSuccessfully processed. Updated ${updatedPagesCount} furusato articles with proper affiliate links!`);
